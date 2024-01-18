export type Lines = Record<string, boolean>;
export type Stations = Record<string, boolean>;

export enum Environment {
  LOCAL = 'local',
  DEVELOPMENT = 'development',
  PRODUCTION = 'production',
}

export enum IconName {
  CLOSE = 'fa-solid fa-xmark',
  ROTATE = 'fa-solid fa-rotate-right',
  VOLUME = 'fa-solid fa-volume-low',
  VOLUME_MUTE = 'fa-solid fa-volume-off',
  TRAIN = 'fa-solid fa-train-subway',
  CHEVRON_UP = 'fa-solid fa-chevron-up',
  CHEVRON_RIGHT = 'fa-solid fa-chevron-right',
  CHEVRON_DOWN = 'fa-solid fa-chevron-down',
  CHEVRON_LEFT = 'fa-solid fa-chevron-left',
}

export enum RouteName {
  SETUP = '/',
  GAME = '/game',
  PREVIEW = '/preview',
  MAP = '/map',
  MODE = '/mode',
}

export enum ModalName {
  GAME_STATUS = 'game-status',
}

export enum PanelName {
  CHOOSE_LINES = 'choose-lines',
}

export enum MapName {
  LONDON = 'London',
  PARIS = 'Paris',
  OSLO = 'Oslo',
}

export enum ModeName {
  TIME_LIMIT = 'Time limit',
  UNLIMITED = 'Unlimited',
  SINGLE_LINE = 'Single line',
}

export enum GameStatusName {
  FAILED = 'failed',
  SUCCESS = 'success',
  EXIT = 'exit',
  RESET = 'reset',
}

export interface Line {
  id: string;
  name: string;
  stop: string;
  visible: boolean;
}

export interface Station {
  id: string;
  name: string;
  visible: boolean;
}

export interface ViewBox {
  x: number;
  y: number;
  width: number;
  height: number;
}
