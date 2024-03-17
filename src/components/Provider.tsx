import React, { ReactElement } from 'react';
import { createGlobalStyle, ThemeProvider as DefaultThemeProvider } from 'styled-components';
import { useTheme } from '../hooks/use-theme';

const GlobalStyle = createGlobalStyle`
  body {
    -webkit-user-select: none;
    user-select: none;

    margin: 0;
    overflow: hidden;
    font-family: ${(props) => props.theme.font};
    font-size: ${(props) => props.theme.fontSize.medium};
    color: ${(props) => props.theme.color.normal};
    background: ${(props) => props.theme.backgroundColor.primary};
  }

  ::-webkit-scrollbar {
    display: none;
    width: 0px;
    height: 0px;
    background: transparent;
  }
`;

interface Props {
  children: ReactElement | ReactElement[];
}

export const ThemeProvider = ({ children }: Props): ReactElement => {
  const theme = useTheme();

  return (
    <DefaultThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </DefaultThemeProvider>
  );
};
