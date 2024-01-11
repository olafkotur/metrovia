import { Environment } from './typings';

export const ENVIRONMENT = (process.env.REACT_APP_NODE_ENV ?? Environment.LOCAL) as Environment;
export const DEFAULT_ICON_SIZE = 16;
export const DEFAULT_ICON_OPACITY = 0.6;
