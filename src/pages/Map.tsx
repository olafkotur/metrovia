import React, { ReactElement } from 'react';
import { LargeButton, Spacer, VeryLargeText } from 'react-otio';
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
        <VeryLargeText>Choose map</VeryLargeText>

        <Spacer vertical={30} />

        <MapButton name={MapName.LONDON} />
        <MapButton disabled name={MapName.PARIS} />
        <MapButton disabled name={MapName.OSLO} />

        <LargeButton bg={Theme.highlightColor.primary} onClick={() => navigate(RouteName.SETUP)}>
          Done
        </LargeButton>
      </MapContainer>

      <MapBackground />
    </>
  );
};

const MapButton = ({ name, disabled = false }: { name: MapName; disabled?: boolean }): ReactElement => {
  const [selectedMap, setSelectedMap] = useRecoilState(SelectedMapState);

  const background = selectedMap === name ? Theme.backgroundColor.selected : undefined;

  return (
    <LargeButton disabled={disabled} bg={background} onClick={() => setSelectedMap(name)}>
      {name}
      {disabled ? ' (coming soon)' : ''}
    </LargeButton>
  );
};
