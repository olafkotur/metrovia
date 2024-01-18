import React, { ReactElement, useCallback } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { Button, SmallText } from '../components';
import { LinesState, SelectedModeState } from '../state';
import { DEFAULT_THEME } from '../style/theme';
import { Line as LineType, ModeName } from '../typings';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: ${(props) => props.theme.spacing.veryLarge};
`;

export const Lines = (): ReactElement => {
  const [lines, setLines] = useRecoilState(LinesState);

  const handleOnClick = useCallback(
    (line: LineType) => {
      const updatedLine = { ...line, visible: !line.visible };
      const updatedLines = lines.map((v) => {
        if (v.id === line.id) {
          return updatedLine;
        }
        return v;
      });
      setLines(updatedLines);
    },
    [lines, setLines],
  );

  return (
    <Container>
      {lines.map((line) => (
        <Line key={line.id} {...line} onClick={handleOnClick} />
      ))}
    </Container>
  );
};

const LineContainer = styled(Button)<{ bg: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 30px;
  background: ${(props) => props.bg};
  margin: ${(props) => props.theme.spacing.verySmall} 0;
  padding: ${(props) => props.theme.spacing.medium};
  border-radius: ${(props) => props.theme.borderRadius.medium};
`;

const Line = (data: LineType & { onClick: (value: LineType) => void }): ReactElement => {
  const { name, color, visible, onClick } = data;
  const background = visible ? color : DEFAULT_THEME.backgroundColor.faint;

  const selectedMode = useRecoilValue(SelectedModeState);

  return (
    <LineContainer bg={background} onClick={() => onClick(data)} disabled={selectedMode !== ModeName.CUSTOM_LINES}>
      <SmallText color={DEFAULT_THEME.color.white}>{name}</SmallText>
    </LineContainer>
  );
};
