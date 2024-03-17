import React, { ReactElement } from 'react';
import { Card, LargeButton, Spacer, VeryLargeText } from 'react-otio';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { MapBackground } from '../components/MapBackground';
import { useTheme } from '../hooks/use-theme';
import { SelectedModeState } from '../state';
import { ModeName, RouteName } from '../typings';

const ModeContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Mode = (): ReactElement => {
  const navigate = useNavigate();

  const theme = useTheme();

  return (
    <>
      <ModeContainer>
        <Card height="auto" width="200px" center>
          <VeryLargeText>Game mode</VeryLargeText>
        </Card>

        <Spacer vertical={10} />
        <Card height="auto">
          <ModeButton name={ModeName.TIME_LIMIT} />

          <Spacer vertical={5} />
          <ModeButton name={ModeName.UNLIMITED} />

          <Spacer vertical={5} />
          <ModeButton name={ModeName.CUSTOM_LINES} />

          <Spacer vertical={5} />
          <LargeButton width="200px" bg={theme.highlightColor.primary} onClick={() => navigate(RouteName.SETUP)}>
            Done
          </LargeButton>
        </Card>
      </ModeContainer>

      <MapBackground />
    </>
  );
};

const ModeButton = ({ name }: { name: ModeName }): ReactElement => {
  const [selectedMode, setSelectedMode] = useRecoilState(SelectedModeState);

  const theme = useTheme();

  return (
    <LargeButton
      width="200px"
      bg={selectedMode === name ? theme.backgroundColor.selected : theme.backgroundColor.primary}
      onClick={() => setSelectedMode(name)}
    >
      {name}
    </LargeButton>
  );
};
