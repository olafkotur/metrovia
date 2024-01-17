import { useCallback, useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { LONDON_STATIONS } from '../maps/London/stations';
import { SelectedMapState } from '../state';
import { MapName, Station } from '../typings';

export const useMatchStation = () => {
  const selectedMap = useRecoilValue(SelectedMapState);

  const stations = useMemo(() => {
    if (selectedMap === MapName.LONDON) {
      return LONDON_STATIONS;
    }

    return [] as Station[];
  }, [selectedMap]);

  return useCallback(
    (value: string) => {
      const filtered = stations.filter((station) => station.visible === false);
      const station = filtered.find((station) => {
        const stationFormatted = station.name.toLowerCase().replace(/[^a-z0-9]/g, '');
        const valueFormatted = value.toLowerCase().replace(/[^a-z0-9]/g, '');
        return stationFormatted === valueFormatted;
      });

      return station ?? null;
    },
    [stations],
  );
};
