import React, { ReactElement } from 'react';
import { Card, LargeButton, MediumText, Spacer, VeryLargeText } from 'react-otio';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { MapBackground } from '../components/MapBackground';
import { SelectedMapState } from '../state';
import { Theme } from '../theme';
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
          <LargeButton width="200px" bg={Theme.highlightColor.primary} onClick={() => navigate(RouteName.SETUP)}>
            <MediumText color={Theme.color.white}>Done</MediumText>
          </LargeButton>
        </Card>
      </MapContainer>

      <MapBackground />
    </>
  );
};

const MapButton = ({ name, disabled = false }: { name: MapName; disabled?: boolean }): ReactElement => {
  const [selectedMap, setSelectedMap] = useRecoilState(SelectedMapState);

  return (
    <LargeButton
      width="200px"
      disabled={disabled}
      bg={selectedMap === name ? Theme.backgroundColor.selected : Theme.backgroundColor.primary}
      onClick={() => setSelectedMap(name)}
    >
      <MediumText>
        {name}
        {disabled ? ' (coming soon)' : ''}
      </MediumText>
    </LargeButton>
  );
};
