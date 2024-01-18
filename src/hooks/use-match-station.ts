import { useCallback } from 'react';
import { Station } from '../typings';

export const useMatchStation = () => {
  return useCallback((value: string, stations: Station[]) => {
    const filtered = stations.filter((station) => station.visible === false);
    const station = filtered.find((station) => {
      const stationFormatted = station.name.toLowerCase().replace(/[^a-z0-9]/g, '');
      const valueFormatted = value.toLowerCase().replace(/[^a-z0-9]/g, '');
      return stationFormatted === valueFormatted;
    });

    return station ?? null;
  }, []);
};
