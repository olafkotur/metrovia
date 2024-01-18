import React, { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { LargeButton, Spacer, VeryLargeText } from '../components';
import { useStartGame } from '../hooks';
import { DEFAULT_THEME } from '../style/theme';
import { RouteName } from '../typings';

const SetupContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Setup = (): ReactElement => {
  const navigate = useNavigate();
  const startGame = useStartGame();

  const handleStartGame = () => {
    startGame();
    navigate(RouteName.GAME);
  };

  return (
    <SetupContainer>
      <VeryLargeText>Metrofinder</VeryLargeText>

      <Spacer vertical={30} />

      <LargeButton bg={DEFAULT_THEME.highlightColor.primary} onClick={handleStartGame}>
        Start Game
      </LargeButton>
      <LargeButton onClick={() => navigate(RouteName.PREVIEW)}>Preview map</LargeButton>
      <LargeButton onClick={() => navigate(RouteName.MAP)}>Change map</LargeButton>
      <LargeButton onClick={() => navigate(RouteName.MODE)}>Game mode</LargeButton>
    </SetupContainer>
  );
};
