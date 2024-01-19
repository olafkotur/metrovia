import { useCallback } from 'react';
import { Station } from '../typings';

const MATCH_REGEX = /[^a-z0-9]/g;
const BLACKLISTED_WORDS = ['and'];

export const useMatchStation = () => {
  return useCallback((value: string, stations: Station[]) => {
    const filtered = stations.filter((station) => station.visible === false);
    const station = filtered.find((station) => {
      let stationFormatted = station.name.toLowerCase().replace(MATCH_REGEX, '');
      let valueFormatted = value.toLowerCase().replace(MATCH_REGEX, '');

      // remove blacklisted words from matching
      for (const word of BLACKLISTED_WORDS) {
        const regex = new RegExp(word, 'g');
        stationFormatted = stationFormatted.replace(regex, '');
        valueFormatted = valueFormatted.replace(regex, '');
      }

      return stationFormatted === valueFormatted;
    });

    return station ?? null;
  }, []);
};
