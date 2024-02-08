import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import styled from 'styled-components';
import { ThemeProvider } from './components/Provider';
import { Modals } from './modals';
import { Game } from './pages/Game';
import { Map } from './pages/Map';
import { Mode } from './pages/Mode';
import { Preview } from './pages/Preview';
import { Setup } from './pages/Setup';
import { Panels } from './panels';
import { RouteName } from './typings';

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  position: relative;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}px) {
    height: calc(100vh - 80px);
  }
`;

const PageContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  position: relative;
  margin: ${(props) => props.theme.spacing.small};

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}px) {
    flex-direction: column;
  }
`;

const AppInternal = (): ReactElement => {
  return (
    <AppContainer>
      <BrowserRouter>
        <Modals />
        <Panels />
        <PageContainer>
          <Routes>
            <Route path={RouteName.SETUP} element={<Setup />} />
            <Route path={RouteName.GAME} element={<Game />} />
            <Route path={RouteName.MAP} element={<Map />} />
            <Route path={RouteName.PREVIEW} element={<Preview />} />
            <Route path={RouteName.MODE} element={<Mode />} />
          </Routes>
        </PageContainer>
      </BrowserRouter>
    </AppContainer>
  );
};

const App = (): ReactElement => {
  return (
    <RecoilRoot>
      <ThemeProvider>
        <AppInternal />
      </ThemeProvider>
    </RecoilRoot>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
