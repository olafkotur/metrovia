import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { LinesState, StationsState } from '../state';

export const useShowStations = () => {
  const [lines, setLines] = useRecoilState(LinesState);
  const [stations, setStations] = useRecoilState(StationsState);

  return useCallback(() => {
    const updatedLines = lines.map((line) => ({ ...line, visible: true }));
    const updatedStations = stations.map((station) => ({ ...station, visible: true }));
    setLines(updatedLines);
    setStations(updatedStations);
  }, [lines, stations, setLines, setStations]);
};
