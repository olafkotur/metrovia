import { debounce } from 'lodash';
import React, { ReactElement, useCallback, useEffect, useMemo, useState } from 'react';
import { Icon, IconButton, IconName, RowContainer, SmallText, Spacer, TextInput } from 'react-otio';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { MATCH_DELAY_MS } from '../const';
import { useFormatRemainingTime } from '../hooks/use-format-remaining-time';
import { useMatchStation } from '../hooks/use-match-station';
import {
  GameStatusState,
  LinesState,
  ModalState,
  MutedState,
  PanelState,
  SecondsRemainingState,
  SelectedModeState,
  StationsState,
} from '../state';
import { Theme } from '../theme';
import { GameStatusName, ModalName, ModeName, PanelName } from '../typings';

const sound = new Audio('ding.mp3');

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

export const GameBar = (): ReactElement => {
  const [value, setValue] = useState('');
  const [stations, setStations] = useRecoilState(StationsState);
  const [muted, setMuted] = useRecoilState(MutedState);
  const [secondsRemaining, setSecondsRemaining] = useRecoilState(SecondsRemainingState);
  const [panel, setPanel] = useRecoilState(PanelState);

  const lines = useRecoilValue(LinesState);
  const selectedMode = useRecoilValue(SelectedModeState);
  const setModal = useSetRecoilState(ModalState);
  const setGameStatus = useSetRecoilState(GameStatusState);

  const matchStation = useMatchStation();
  const formatRemainingTime = useFormatRemainingTime();

  const lineStations = useMemo(() => {
    const visibleLines = lines.filter((line) => line.visible);
    return stations.filter((station) => {
      return station.lines.some((lineId) => visibleLines.some((line) => line.id === lineId));
    });
  }, [lines, stations]);

  const unlockedStations = useMemo(() => {
    return lineStations.filter((v) => v.visible).length;
  }, [lineStations]);

  const remainingTime = useMemo(() => formatRemainingTime(secondsRemaining ?? 0), [secondsRemaining]);

  const debouncedMatchStations = useCallback(
    debounce((input: string) => {
      const station = matchStation(input, lineStations);
      if (station == null) return;
      setValue('');

      muted === false && sound.play();
      setStations((stations) => stations.map((s) => (s.id === station.id ? { ...s, visible: true } : s)));
    }, MATCH_DELAY_MS),
    [muted, lineStations, matchStation, setStations, setValue],
  );

  const handleChange = useCallback(
    (input: string) => {
      setValue(input);
      debouncedMatchStations(input);
    },
    [setValue, debouncedMatchStations],
  );

  const handleGameEnd = useCallback(() => {
    const isSuccess = unlockedStations === lineStations.length;
    setGameStatus(isSuccess ? GameStatusName.SUCCESS : GameStatusName.FAILED);
    setModal(ModalName.GAME_STATUS);
  }, [unlockedStations, lineStations, setModal]);

  const handleGameTimer = useCallback(() => {
    if (secondsRemaining == null) return;
    if (selectedMode !== ModeName.TIME_LIMIT) return null;

    const timer = setInterval(() => {
      setSecondsRemaining((seconds) => {
        if ((seconds ?? 0) > 0) {
          return (seconds ?? 0) - 1;
        } else {
          clearInterval(timer);
          return 0;
        }
      });
    }, 1000);

    return timer;
  }, [selectedMode, , setSecondsRemaining, handleGameEnd]);

  useEffect(() => {
    if (secondsRemaining == null) return;
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
    <GameBarContainer>
      <TextInput autoFocus value={value} onChange={handleChange} placeholder="enter a station..." bg="transparent" />

      <Spacer horizontal={5} />

      <RowContainer>
        <PointsText faint>
          {unlockedStations}/{lineStations.length}
        </PointsText>

        <Spacer horizontal={5} />

        {selectedMode === ModeName.TIME_LIMIT && (
          <TimeText faint color={remainingTime === '00:00' ? Theme.color.danger : undefined}>
            {remainingTime}
          </TimeText>
        )}

        <IconButton size={28} onClick={console.log}>
          <Icon name={IconName.LOCATION_PIN} size={20} />
        </IconButton>

        <IconButton
          size={28}
          bg={panel === PanelName.LINES ? Theme.backgroundColor.selected : undefined}
          onClick={() => setPanel(panel === PanelName.LINES ? null : PanelName.LINES)}
        >
          <Icon name={IconName.TRAIN} size={20} />
        </IconButton>
        <Spacer horizontal={1} />
        <IconButton size={28} onClick={() => setMuted((value) => !value)}>
          <Icon
            size={20}
            name={IconName.VOLUME_LOW}
            color={muted ? Theme.color.danger : undefined}
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
          <Icon size={22} name={IconName.XMARK} />
        </IconButton>
      </RowContainer>
    </GameBarContainer>
  );
};
