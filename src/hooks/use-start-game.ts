import { useCallback } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { GAME_TIME_LIMIT } from '../const';
import { LONDON_LINES } from '../maps/London/lines';
import { LONDON_STATIONS } from '../maps/London/stations';
import {
  LinesState,
  PanelState,
  SecondsRemainingState,
  SelectedMapState,
  SelectedModeState,
  StationsState,
} from '../state';
import { MapName, ModeName, PanelName } from '../typings';

export const useStartGame = () => {
  const selectedMap = useRecoilValue(SelectedMapState);
  const selectedMode = useRecoilValue(SelectedModeState);

  const setPanel = useSetRecoilState(PanelState);
  const setLines = useSetRecoilState(LinesState);
  const setStations = useSetRecoilState(StationsState);
  const setSecondsRemaining = useSetRecoilState(SecondsRemainingState);

  const startLondonMap = () => {
    setLines(LONDON_LINES);
    setStations(LONDON_STATIONS);

    if (selectedMode === ModeName.TIME_LIMIT) {
      setSecondsRemaining(GAME_TIME_LIMIT);
    }
    if (selectedMode === ModeName.CUSTOM_LINES) {
      const updatedLines = LONDON_LINES.map((line) => ({ ...line, visible: false }));
      setLines(updatedLines);
      setPanel(PanelName.LINES);
    }
  };

  return useCallback(() => {
    if (selectedMap === MapName.LONDON) {
      startLondonMap();
    }
  }, [selectedMap, startLondonMap]);
};
