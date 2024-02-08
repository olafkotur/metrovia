import React, { ReactElement } from 'react';
import { useUpdateTitle } from 'react-otio';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { GameBar } from '../components/GameBar';
import { useFormatRemainingTime } from '../hooks/use-format-remaining-time';
import { usePreventTouch } from '../hooks/use-prevent-touch';
import { LondonMap } from '../maps/London';
import { SecondsRemainingState, SelectedMapState } from '../state';

const GameContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Game = (): ReactElement => {
  const selectedMap = useRecoilValue(SelectedMapState);
  const secondsRemaining = useRecoilValue(SecondsRemainingState);

  const formatRemainingTime = useFormatRemainingTime();

  usePreventTouch();
  useUpdateTitle({
    placeholder: 'MetroVia',
    value: `${selectedMap} - ${formatRemainingTime(secondsRemaining ?? 0)}`,
  });

  return (
    <GameContainer>
      <LondonMap showControls />
      <GameBar />
    </GameContainer>
  );
};
