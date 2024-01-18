import { atom } from 'recoil';
import { MapName, ModeName } from './typings';

export const SelectedMapState = atom({
  key: 'selectedMap',
  default: MapName.LONDON,
});

export const SelectedModeState = atom({
  key: 'selectedMode',
  default: ModeName.TIME_LIMIT,
});
