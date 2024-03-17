import React, { ReactElement } from 'react';
import { Card, LargeButton, MediumText, Spacer, VeryLargeText } from 'react-otio';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { MapBackground } from '../components/MapBackground';
import { useTheme } from '../hooks/use-theme';
import { SelectedMapState } from '../state';
import { MapName, RouteName } from '../typings';

const MapContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Map = (): ReactElement => {
  const navigate = useNavigate();

  const theme = useTheme();

  return (
    <>
      <MapContainer>
        <Card height="auto" width="200px" center>
          <VeryLargeText>Choose map</VeryLargeText>
        </Card>

        <Spacer vertical={10} />
        <Card height="auto">
          <MapButton name={MapName.LONDON} />

          <Spacer vertical={5} />
          <MapButton disabled name={MapName.PARIS} />

          <Spacer vertical={5} />
          <MapButton disabled name={MapName.OSLO} />

          <Spacer vertical={5} />
          <LargeButton width="200px" bg={theme.highlightColor.primary} onClick={() => navigate(RouteName.SETUP)}>
            <MediumText color={theme.color.white}>Done</MediumText>
          </LargeButton>
        </Card>
      </MapContainer>

      <MapBackground />
    </>
  );
};

const MapButton = ({ name, disabled = false }: { name: MapName; disabled?: boolean }): ReactElement => {
  const [selectedMap, setSelectedMap] = useRecoilState(SelectedMapState);

  const theme = useTheme();

  return (
    <LargeButton
      width="200px"
      disabled={disabled}
      bg={selectedMap === name ? theme.backgroundColor.selected : theme.backgroundColor.primary}
      onClick={() => setSelectedMap(name)}
    >
      <MediumText>
        {name}
        {disabled ? ' (coming soon)' : ''}
      </MediumText>
    </LargeButton>
  );
};
