import { debounce } from 'lodash';
import React, { ReactElement, useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { Icon, IconButton, RowContainer, SmallText, Spacer, TextInput } from '../components';
import { GAME_TIME_LIMIT, MATCH_DELAY_MS } from '../const';
import { useMatchStation } from '../hooks';
import { LondonMap } from '../maps/London';
import { LONDON_LINES } from '../maps/London/lines';
import { LONDON_STATIONS } from '../maps/London/stations';
import { SelectedMapState, SelectedModeState } from '../state';
import { DEFAULT_THEME } from '../style/theme';
import { IconName, MapName, ModeName, RouteName, Station } from '../typings';

const GameContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const GameBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  position: absolute;
  width: 60%;
  padding: ${(props) => props.theme.spacing.small};
  bottom: ${(props) => props.theme.spacing.large};
  border-radius: ${(props) => props.theme.borderRadius.medium};
  background: ${(props) => props.theme.backgroundColor.secondary};
`;

const PointsText = styled(SmallText)`
  width: 100px;
  text-align: right;
`;

const TimeText = styled(SmallText)`
  width: 50px;
  text-align: left;
`;

export const Game = (): ReactElement => {
  const selectedMap = useRecoilValue(SelectedMapState);
  const selectedMode = useRecoilValue(SelectedModeState);
  const [counter, setCounter] = useState(GAME_TIME_LIMIT);
  const [value, setValue] = useState('');
  const [stations, setStations] = useState<Station[]>([]);

  const navigate = useNavigate();
  const matchStation = useMatchStation();

  const unlockedStations = useMemo(() => {
    return stations.filter((v) => v.visible).length;
  }, [stations]);

  const remainingTime = useMemo(() => {
    if (selectedMode !== ModeName.TIME_LIMIT) return null;

    const minutes = Math.floor(counter / 60);
    const seconds = counter % 60;
    const formattedCounter =
      new Intl.NumberFormat('en-US', { minimumIntegerDigits: 2 }).format(minutes) +
      ':' +
      new Intl.NumberFormat('en-US', { minimumIntegerDigits: 2 }).format(seconds);

    return formattedCounter;
  }, [selectedMode, counter]);

  const debouncedMatchStations = useCallback(
    debounce((input: string) => {
      const station = matchStation(input);
      if (station != null) {
        setStations((stations) => stations.map((s) => (s.id === station.id ? { ...s, visible: true } : s)));
        return setValue('');
      }
    }, MATCH_DELAY_MS),
    [matchStation],
  );

  const handleChange = (input: string) => {
    setValue(input);
    debouncedMatchStations(input);
  };

  const handleGameEnd = () => {};

  useEffect(() => {
    if (selectedMap === MapName.LONDON) {
      setStations(LONDON_STATIONS);
    }
  }, [selectedMap]);

  useEffect(() => {
    if (selectedMode !== ModeName.TIME_LIMIT) return;

    const timer = setInterval(() => {
      setCounter((counter) => {
        if (counter > 0) {
          return counter - 1;
        } else {
          clearInterval(timer);
          handleGameEnd();
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(timer); // Clean up the interval on unmount
  }, []);

  return (
    <GameContainer>
      <GameBarContainer>
        <TextInput autoFocus value={value} onChange={handleChange} placeholder="enter a station..." bg="transparent" />

        <Spacer horizontal={5} />

        <RowContainer>
          <PointsText faint>
            {unlockedStations} / {stations.length}
          </PointsText>
          <Spacer horizontal={5} />
          {selectedMode === ModeName.TIME_LIMIT && (
            <TimeText faint color={remainingTime === '00:00' ? DEFAULT_THEME.color.danger : undefined}>
              {remainingTime}
            </TimeText>
          )}
          <IconButton size={28} onClick={() => window.location.reload()}>
            <Icon name={IconName.ROTATE} size={20} />
          </IconButton>
          <IconButton size={28} onClick={() => navigate(RouteName.SETUP)}>
            <Icon name={IconName.CLOSE} size={22} />
          </IconButton>
        </RowContainer>
      </GameBarContainer>
      <LondonMap lines={LONDON_LINES} stations={stations} />
    </GameContainer>
  );
};
