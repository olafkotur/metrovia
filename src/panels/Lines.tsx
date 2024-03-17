import React, { ReactElement, useCallback, useMemo } from 'react';
import { Button, Icon, IconName, SmallText, VerySmallText } from 'react-otio';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { useTheme } from '../hooks/use-theme';
import { LinesState, SelectedModeState, StationsState } from '../state';
import { Line as LineType, ModeName } from '../typings';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: ${(props) => props.theme.spacing.veryLarge};
`;

export const Lines = (): ReactElement => {
  const [lines, setLines] = useRecoilState(LinesState);
  const [stations, setStations] = useRecoilState(StationsState);

  const theme = useTheme();

  const handleOnClick = useCallback(
    (line: LineType) => {
      const updatedLine = { ...line, visible: !line.visible };
      const updatedLines = lines.map((v) => {
        if (v.id === line.id) {
          return updatedLine;
        }
        return v;
      });

      const updatedStations = stations.map((station) => {
        if (updatedLine.visible === false && station.lines.includes(line.id)) {
          return { ...station, visible: false };
        }
        return station;
      });

      setLines(updatedLines);
      setStations(updatedStations);
    },
    [lines, stations, setLines],
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
  justify-content: space-between;
  background: ${(props) => props.bg};
  margin: ${(props) => props.theme.spacing.verySmall} 0;
  padding: ${(props) => props.theme.spacing.medium};
  border-radius: ${(props) => props.theme.borderRadius.medium};
`;

const Line = ({ onClick, ...data }: LineType & { onClick: (value: LineType) => void }): ReactElement => {
  const stations = useRecoilValue(StationsState);
  const selectedMode = useRecoilValue(SelectedModeState);

  const theme = useTheme();

  const background = data.visible ? data.color : theme.backgroundColor.faint;

  const lineStations = useMemo(() => {
    return stations.filter((station) => station.lines.includes(data.id));
  }, [stations]);

  const visibleStationCount = useMemo(() => {
    return lineStations.filter((station) => station.visible).length;
  }, [lineStations]);

  const isComplete = lineStations.length === visibleStationCount;

  return (
    <LineContainer bg={background} onClick={() => onClick(data)} disabled={selectedMode !== ModeName.CUSTOM_LINES}>
      <SmallText color={theme.color.white}>{data.name}</SmallText>
      {data.visible && isComplete === false && (
        <VerySmallText color={theme.color.white}>
          {visibleStationCount}/{lineStations.length}
        </VerySmallText>
      )}
      {isComplete && <Icon name={IconName.CIRCLE_CHECK} color={theme.color.white} opacity={1} />}
    </LineContainer>
  );
};
