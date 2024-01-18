import { atom } from 'recoil';
import { GameStatusName, MapName, ModalName, ModeName } from './typings';

export const SelectedMapState = atom({
  key: 'selectedMap',
  default: MapName.LONDON,
});

export const SelectedModeState = atom({
  key: 'selectedMode',
  default: ModeName.TIME_LIMIT,
});

export const ModalState = atom({
  key: 'modal',
  default: null as ModalName | null,
});

export const MutedState = atom({
  key: 'muted',
  default: false,
});

export const GameStatusState = atom({
  key: 'status',
  default: null as GameStatusName | null,
});
