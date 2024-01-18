import React, { ReactElement, useEffect, useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { useShowStations } from '../hooks';
import { LondonMap } from '../maps/London';
import { SelectedMapState } from '../state';
import { MapName } from '../typings';

const MapBackgroundContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  z-index: -1;
  opacity: 0.2;
`;

export const MapBackground = (): ReactElement => {
  const selectedMap = useRecoilValue(SelectedMapState);

  const showStations = useShowStations();

  const MapComponent = useMemo(() => {
    if (selectedMap === MapName.LONDON) {
      return <LondonMap />;
    }
    return <></>;
  }, [selectedMap]);

  useEffect(() => {
    showStations();
  }, []);

  return <MapBackgroundContainer>{MapComponent}</MapBackgroundContainer>;
};
