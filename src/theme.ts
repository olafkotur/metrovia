const BASE_THEME = {
  font: 'Roboto, sans-serif',
  fontSize: {
    verySmall: '10px',
    small: '14px',
    medium: '16px',
    large: '20px',
    veryLarge: '28px',
  },
  borderRadius: {
    small: '3px',
    medium: '5px',
    large: '8px',
    veryLarge: '12px',
  },
  border: {
    normal: '0.5px solid #ABABAE',
    strong: '1px solid #ABABAE',
  },
  spacing: {
    verySmall: '3px',
    small: '5px',
    medium: '10px',
    large: '15px',
    veryLarge: '20px',
  },
  dropShadow: {
    medium: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    strong: '0px 12px 12px rgba(0, 0, 0, 0.4)',
  },
  color: {
    faint: '',
    normal: '',
    danger: '',
    inverted: '',
    white: '',
    black: '',
  },
  backgroundColor: {
    primary: '',
    secondary: '',
    tertiary: '',
    faint: '',
    selected: '',
    backdrop: '',
  },
  highlightColor: {
    primary: '#29804C', // green
    secondary: '#495FD1', // blue
    tertiary: '#DBAD39', // yellow
    quaternary: '#E34242', // red
  },
  zIndex: {
    sidebar: 1000,
    notifications: 2000,
    backdrop: 5000,
    panel: 7000,
    modal: 7500,
    alert: 7500,
    actions: 7500,
    tooltip: 10000,
  },
  breakpoints: {
    mobile: 480,
    tablet: 768,
    desktop: 1024,
  },
};

export const LIGHT_THEME = {
  ...BASE_THEME,
  color: {
    faint: '#7A7A7A',
    normal: '#333333',
    danger: '#FF4D4F',
    inverted: '#FFFFFF',
    white: '#FFFFFF',
    black: '#000000',
  },
  backgroundColor: {
    primary: '#F5F5F5',
    secondary: '#E8E8E8',
    tertiary: '#D9D9D9',
    faint: '#F0F0F0',
    selected: '#C8C8C8',
    backdrop: '#B0B0B0',
  },
};

export const DARK_THEME = {
  ...BASE_THEME,
  color: {
    faint: 'rgba(255, 255, 255, 0.6)',
    normal: 'rgba(255, 255, 255, 1)',
    danger: 'rgba(227, 66, 66, 0.8)',
    inverted: '#32323E',
    white: '#ecf0f1',
    black: '#32323E',
  },
  backgroundColor: {
    primary: '#0E0E10',
    secondary: '#202123',
    tertiary: 'rgba(0, 0, 0, 0.8)',
    faint: 'rgba(255, 255, 255, 0.2)',
    selected: 'rgba(255, 255, 255, 0.2)',
    backdrop: 'rgba(0, 0, 0, 0.6)',
  },
};

type Theme = typeof BASE_THEME;
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
