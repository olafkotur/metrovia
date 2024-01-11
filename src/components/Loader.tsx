import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Spinner } from './Spinner';

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const Loader = (): ReactElement => {
  return (
    <LoaderContainer>
      <Spinner />
    </LoaderContainer>
  );
};
