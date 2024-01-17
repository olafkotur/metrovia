export type Lines = Record<string, boolean>;
export type Stations = Record<string, boolean>;

export enum Environment {
  LOCAL = 'local',
  DEVELOPMENT = 'development',
  PRODUCTION = 'production',
}

export enum RouteName {
  SETUP = '/',
  GAME = '/game',
  MAP = '/map',
}

export enum IconName {
  CHEVRON_UP = 'fa-solid fa-chevron-up',
  CHEVRON_RIGHT = 'fa-solid fa-chevron-right',
  CHEVRON_DOWN = 'fa-solid fa-chevron-down',
  CHEVRON_LEFT = 'fa-solid fa-chevron-left',
}

export enum MapName {
  LONDON = 'London',
  PARIS = 'Paris',
  OSLO = 'Oslo',
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
