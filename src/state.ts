import { atom } from 'recoil';
import { MapName } from './typings';

export const SelectedMapState = atom({
  key: 'selectedMap',
  default: MapName.LONDON,
});
