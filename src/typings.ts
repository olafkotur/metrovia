export type Lines = Record<string, boolean>;
export type Stations = Record<string, boolean>;
export type Theme = 'light' | 'dark';

export enum Environment {
  LOCAL = 'local',
  DEVELOPMENT = 'development',
  PRODUCTION = 'production',
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
  LINES = 'lines',
}

export enum MapName {
  LONDON = 'London',
  PARIS = 'Paris',
  OSLO = 'Oslo',
}

export enum ModeName {
  TIME_LIMIT = 'Time limit',
  UNLIMITED = 'Unlimited',
  CUSTOM_LINES = 'Custom lines',
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
  color: string;
  visible: boolean;
}

export interface Station {
  id: string;
  name: string;
  visible: boolean;
  lines: string[];
}

export interface ViewBox {
  x: number;
  y: number;
  width: number;
  height: number;
}
