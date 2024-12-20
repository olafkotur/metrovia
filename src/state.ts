import { AtomEffect, atom } from 'recoil';
import { GameStatusName, Line, MapName, ModalName, ModeName, PanelName, Station, Theme } from './typings';

const localStorageEffect =
  <T>(key: string): AtomEffect<T> =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }
    onSet((newValue, _, isReset) => {
      isReset ? localStorage.removeItem(key) : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

export const ThemeState = atom({
  key: 'theme',
  default: 'light' as Theme,
  effects: [localStorageEffect('theme')],
});

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

export const PanelState = atom({
  key: 'panel',
  default: null as PanelName | null,
});

export const MutedState = atom({
  key: 'muted',
  default: false,
});

export const GameStatusState = atom({
  key: 'status',
  default: null as GameStatusName | null,
});

export const LinesState = atom({
  key: 'lines',
  default: [] as Line[],
});

export const StationsState = atom({
  key: 'stations',
  default: [] as Station[],
});

export const SecondsRemainingState = atom({
  key: 'secondsRemaining',
  default: null as number | null,
});
