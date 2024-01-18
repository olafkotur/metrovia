import React, { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { LargeButton, Spacer, VeryLargeText } from '../components';
import { SelectedModeState } from '../state';
import { DEFAULT_THEME } from '../style/theme';
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

  return (
    <ModeContainer>
      <VeryLargeText>Game mode</VeryLargeText>

      <Spacer vertical={30} />

      <ModeButton name={ModeName.TIME_LIMIT} />
      <ModeButton name={ModeName.UNLIMITED} />
      <ModeButton name={ModeName.SINGLE_LINE} />

      <LargeButton bg={DEFAULT_THEME.highlightColor.primary} onClick={() => navigate(RouteName.SETUP)}>
        Done
      </LargeButton>
    </ModeContainer>
  );
};

const ModeButton = ({ name, disabled = false }: { name: ModeName; disabled?: boolean }): ReactElement => {
  const [selectedMode, setSelectedMode] = useRecoilState(SelectedModeState);

  const background = selectedMode === name ? DEFAULT_THEME.color.faint : undefined;

  return (
    <LargeButton disabled={disabled} bg={background} onClick={() => setSelectedMode(name)}>
      {name}
      {disabled ? ' (coming soon)' : ''}
    </LargeButton>
  );
};
