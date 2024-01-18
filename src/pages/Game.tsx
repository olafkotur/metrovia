import dayjs from 'dayjs';
import React, { ReactElement, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { Icon, IconButton, RowContainer, SmallText, Spacer, TextInput } from '../components';
import { useMatchStation } from '../hooks';
import { LondonMap } from '../maps/London';
import { LONDON_LINES } from '../maps/London/lines';
import { LONDON_STATIONS } from '../maps/London/stations';
import { SelectedMapState, SelectedModeState } from '../state';
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
  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState('');
  const [stations, setStations] = useState<Station[]>([]);

  const navigate = useNavigate();
  const matchStation = useMatchStation();

  const unlockedStations = useMemo(() => {
    return stations.filter((v) => v.visible).length;
  }, [stations]);

  const handleChange = (input: string) => {
    const station = matchStation(input);
    if (station != null) {
      setValue('');
      setStations((stations) => {
        const index = stations.findIndex((s) => s.id === station.id);
        const updatedStations = [...stations];
        updatedStations[index].visible = true;
        return updatedStations;
      });
    }

    setValue(input);
  };

  useEffect(() => {
    if (selectedMap === MapName.LONDON) {
      setStations(LONDON_STATIONS);
    }
  }, [selectedMap]);

  useEffect(() => {
    if (selectedMode !== ModeName.TIME_LIMIT) return;

    const timer = setInterval(() => {
      setCounter((counter) => counter + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <GameContainer>
      <GameBarContainer>
        <TextInput autoFocus value={value} onChange={handleChange} placeholder="enter a station..." bg="transparent" />

        <Spacer horizontal={5} />

        <RowContainer>
          <PointsText faint>{unlockedStations} stations</PointsText>
          <Spacer horizontal={5} />
          {selectedMode === ModeName.TIME_LIMIT && <TimeText faint>{dayjs.unix(counter).format('mm:ss')}</TimeText>}
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
