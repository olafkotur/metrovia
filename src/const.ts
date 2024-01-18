import { Environment } from './typings';

export const ENVIRONMENT = (process.env.REACT_APP_NODE_ENV ?? Environment.LOCAL) as Environment;
export const DEFAULT_ICON_SIZE = 16;
export const DEFAULT_ICON_OPACITY = 0.6;

export const MATCH_DELAY_MS = 100;
export const TIME_LIMIT = 30 * 60; // 30 minutes
export const MIN_MAP_ZOOM = 100;
export const MAX_MAP_ZOOM = 1250;
