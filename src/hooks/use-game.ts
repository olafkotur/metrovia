import { useCallback } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { GAME_TIME_LIMIT } from '../const';
import { LONDON_STATIONS } from '../maps/London/stations';
import { SecondsRemainingState, SelectedMapState, SelectedModeState, StationsState } from '../state';
import { MapName, ModeName } from '../typings';

export const useStartGame = () => {
  const selectedMap = useRecoilValue(SelectedMapState);
  const selectedMode = useRecoilValue(SelectedModeState);

  const setStations = useSetRecoilState(StationsState);
  const setSecondsRemaining = useSetRecoilState(SecondsRemainingState);

  return useCallback(() => {
    // reset map logic
    if (selectedMap === MapName.LONDON) {
      setStations(LONDON_STATIONS);
    }

    // reset mode logic
    if (selectedMode === ModeName.TIME_LIMIT) {
      setSecondsRemaining(GAME_TIME_LIMIT);
    }
  }, []);
};
