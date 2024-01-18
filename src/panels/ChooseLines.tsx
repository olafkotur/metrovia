import React, { ReactElement } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: red;
  padding-bottom: ${(props) => props.theme.spacing.veryLarge};
`;

export const ChooseLines = (): ReactElement => {
  return <Container>Choose lines</Container>;
};
