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
    faint: 'rgba(0, 0, 0, 0.4)',
    normal: 'rgba(0, 0, 0, 1)',
    danger: 'rgba(227, 66, 66, 0.8)',
    inverted: '#ecf0f1',
    white: '#ecf0f1',
    black: '#32323E',
  },
  backgroundColor: {
    primary: '#DFE6E9',
    secondary: '#F2F5F7',
    tertiary: 'rgba(0, 0, 0, 0.8)',
    faint: '#56504E',
    selected: '#2A2727',
    backdrop: 'rgba(0, 0, 0, 0.9)',
  },
  highlightColor: {
    primary: '#29804C', // green
    secondary: '#7C40C7', // purple
    tertiary: '#DBAD39', // yellow
    quaternary: '#E34242', // red
  },
  dropShadow: {
    medium: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    strong: '0px 12px 12px rgba(0, 0, 0, 0.4)',
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

type Theme = typeof Theme;
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
