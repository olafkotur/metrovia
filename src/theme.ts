export const Theme = {
  font: 'Inter',
  fontSize: {
    verySmall: '12px',
    small: '16px',
    medium: '20px',
    large: '24px',
    veryLarge: '30px',
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
  color: {
    faint: 'rgba(255, 255, 255, 0.6)',
    normal: 'rgba(255, 255, 255, 1)',
    danger: 'rgba(227, 66, 66, 0.8)',
    inverted: '#32323E',
    white: '#ecf0f1',
    black: '#32323E',
  },
  backgroundColor: {
    primary: '#13121B',
    secondary: '#20202B',
    tertiary: '#ecf0f1',
    faint: 'rgba(255, 255, 255, 0.2)',
    selected: 'rgba(255, 255, 255, 0.2)',
    backdrop: 'rgba(0, 0, 0, 0.8)',
    transparent: 'transparent',
  },
  highlightColor: {
    primary: '#29804C', // green
    secondary: '#495FD1', // blue
    tertiary: '#DBAD39', // yellow
    quaternary: '#E34242', // red
  },
  dropShadow: {
    medium: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    strong: '0px 12px 12px rgba(0, 0, 0, 0.4)',
  },
  zIndex: {
    backdrop: 5000,
    panel: 7000,
    modal: 7500,
    tooltip: 10000,
  },
  breakpoints: {
    mobile: 480,
    tablet: 768,
    desktop: 1024,
  },
};

type Theme = typeof Theme;
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
