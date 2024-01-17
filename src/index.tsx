import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import styled from 'styled-components';
import { Game } from './pages/Game';
import { Map } from './pages/Map';
import { Setup } from './pages/Setup';
import { ThemeProvider } from './style/Provider';
import { RouteName } from './typings';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: true,
    },
  },
});

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  position: relative;
`;

const PageContainer = styled.div`
  display: flex;
  height: calc(100% - 30px);
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
      <PageContainer>
        <BrowserRouter>
          <Routes>
            <Route path={RouteName.SETUP} element={<Setup />} />
            <Route path={RouteName.GAME} element={<Game />} />
            <Route path={RouteName.MAP} element={<Map />} />
          </Routes>
        </BrowserRouter>
      </PageContainer>
    </AppContainer>
  );
};

const App = (): ReactElement => {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProvider>
          <AppInternal />
        </ThemeProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
