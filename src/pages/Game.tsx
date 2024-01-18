import { debounce } from 'lodash';
import React, { ReactElement, useCallback, useEffect, useMemo, useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { Icon, IconButton, RowContainer, SmallText, Spacer, TextInput } from '../components';
import { MATCH_DELAY_MS } from '../const';
import { useFormatRemainingTime, useMatchStation } from '../hooks';
import { LondonMap } from '../maps/London';
import {
  GameStatusState,
  ModalState,
  MutedState,
  PanelState,
  SecondsRemainingState,
  SelectedModeState,
  StationsState,
} from '../state';
import { DEFAULT_THEME } from '../style/theme';
import { GameStatusName, IconName, ModalName, ModeName, PanelName } from '../typings';

const sound = new Audio('ding.mp3');

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
  width: 50%;
  min-width: 600px;
  padding: ${(props) => props.theme.spacing.small};
  bottom: ${(props) => props.theme.spacing.medium};
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

const LoaderContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -5px;
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.backgroundColor.primary};
  z-index: ${(props) => props.theme.zIndex.backdrop};
`;

export const Game = (): ReactElement => {
  const [value, setValue] = useState('');
  const [stations, setStations] = useRecoilState(StationsState);
  const [muted, setMuted] = useRecoilState(MutedState);
  const [secondsRemaining, setSecondsRemaining] = useRecoilState(SecondsRemainingState);
  const [panel, setPanel] = useRecoilState(PanelState);

  const selectedMode = useRecoilValue(SelectedModeState);
  const setModal = useSetRecoilState(ModalState);
  const setGameStatus = useSetRecoilState(GameStatusState);

  const matchStation = useMatchStation();
  const formatRemainingTime = useFormatRemainingTime();

  const unlockedStations = useMemo(() => {
    return stations.filter((v) => v.visible).length;
  }, [stations]);

  const remainingTime = useMemo(() => formatRemainingTime(secondsRemaining), [secondsRemaining]);

  const debouncedMatchStations = useCallback(
    debounce((input: string) => {
      const station = matchStation(input, stations);
      if (station == null) return;

      muted === false && sound.play();
      setStations((stations) => stations.map((s) => (s.id === station.id ? { ...s, visible: true } : s)));
      setValue('');
    }, MATCH_DELAY_MS),
    [muted, stations, matchStation, setStations, setValue],
  );

  const handleChange = useCallback(
    (input: string) => {
      setValue(input);
      debouncedMatchStations(input);
    },
    [setValue, debouncedMatchStations],
  );

  const handleGameEnd = useCallback(() => {
    const isSuccess = unlockedStations === stations.length;
    setGameStatus(isSuccess ? GameStatusName.SUCCESS : GameStatusName.FAILED);
    setModal(ModalName.GAME_STATUS);
  }, [unlockedStations, stations, setModal]);

  const handleGameTimer = useCallback(() => {
    if (selectedMode !== ModeName.TIME_LIMIT) return null;

    const timer = setInterval(() => {
      setSecondsRemaining((seconds) => {
        if (seconds > 0) {
          return seconds - 1;
        } else {
          clearInterval(timer);
          return 0;
        }
      });
    }, 1000);

    return timer;
  }, [selectedMode, stations, unlockedStations, setSecondsRemaining, handleGameEnd]);

  useEffect(() => {
    if (selectedMode !== ModeName.TIME_LIMIT || secondsRemaining > 0) return;
    handleGameEnd();
  }, [secondsRemaining, handleGameEnd]);

  useEffect(() => {
    const timer = handleGameTimer();

    return () => {
      timer && clearInterval(timer);
    };
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

          <IconButton
            size={28}
            bg={panel === PanelName.LINES ? DEFAULT_THEME.backgroundColor.selected : undefined}
            onClick={() => setPanel(panel === PanelName.LINES ? null : PanelName.LINES)}
          >
            <Icon name={IconName.TRAIN} size={20} />
          </IconButton>
          <Spacer horizontal={1} />
          <IconButton size={28} onClick={() => setMuted((value) => !value)}>
            <Icon
              size={20}
              name={IconName.VOLUME}
              color={muted ? DEFAULT_THEME.color.danger : undefined}
              opacity={muted ? 1 : undefined}
            />
          </IconButton>
          <Spacer horizontal={1} />
          <IconButton
            size={28}
            onClick={() => {
              setGameStatus(GameStatusName.RESET);
              setModal(ModalName.GAME_STATUS);
            }}
          >
            <Icon name={IconName.ROTATE} size={20} />
          </IconButton>
          <Spacer horizontal={1} />
          <IconButton
            size={28}
            onClick={() => {
              setGameStatus(GameStatusName.EXIT);
              setModal(ModalName.GAME_STATUS);
            }}
          >
            <Icon size={22} name={IconName.CLOSE} />
          </IconButton>
        </RowContainer>
      </GameBarContainer>
      <LondonMap />
    </GameContainer>
  );
};
