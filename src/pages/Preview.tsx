import React, { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Icon, IconButton } from '../components';
import { LondonMap } from '../maps/London';
import { DEFAULT_THEME } from '../style/theme';
import { IconName, RouteName } from '../typings';

const PreviewContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const CloseButton = styled(IconButton)`
  position: absolute;
  top: ${(props) => props.theme.spacing.small};
  right: ${(props) => props.theme.spacing.small};
`;

export const Preview = (): ReactElement => {
  const navigate = useNavigate();

  return (
    <PreviewContainer>
      <CloseButton size={28} onClick={() => navigate(RouteName.SETUP)} bg={DEFAULT_THEME.backgroundColor.primary}>
        <Icon name={IconName.CLOSE} size={22} />
      </CloseButton>
      <LondonMap />
    </PreviewContainer>
  );
};
