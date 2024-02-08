import React, { ReactElement } from 'react';
import { Card, LargeButton, MediumText, Spacer, VeryLargeText, useUpdateTitle } from 'react-otio';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { MapBackground } from '../components/MapBackground';
import { useShowStations } from '../hooks/use-show-stations';
import { useStartGame } from '../hooks/use-start-game';
import { Theme } from '../theme';
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
  const showStations = useShowStations();

  const handleStartGame = () => {
    startGame();
    navigate(RouteName.GAME);
  };

  const handlePreview = () => {
    showStations();
    navigate(RouteName.PREVIEW);
  };

  useUpdateTitle({ placeholder: 'MetroVia' });

  return (
    <>
      <SetupContainer>
        <Card height="auto" width="200px" center>
          <VeryLargeText>MetroVia</VeryLargeText>
        </Card>

        <Spacer vertical={10} />
        <Card height="auto">
          <LargeButton width="200px" bg={Theme.backgroundColor.primary} onClick={() => navigate(RouteName.MAP)}>
            <MediumText>Choose map</MediumText>
          </LargeButton>

          <Spacer vertical={5} />
          <LargeButton width="200px" bg={Theme.backgroundColor.primary} onClick={handlePreview}>
            <MediumText>Preview map</MediumText>
          </LargeButton>

          <Spacer vertical={5} />
          <LargeButton width="200px" bg={Theme.backgroundColor.primary} onClick={() => navigate(RouteName.MODE)}>
            <MediumText>Game mode</MediumText>
          </LargeButton>

          <Spacer vertical={5} />
          <LargeButton width="200px" bg={Theme.highlightColor.primary} onClick={handleStartGame}>
            <MediumText color={Theme.color.white}>Start Game</MediumText>
          </LargeButton>
        </Card>
      </SetupContainer>

      <MapBackground />
    </>
  );
};
