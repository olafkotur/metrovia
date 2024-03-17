import React, { ReactElement } from 'react';
import { Icon, IconButton, IconName } from 'react-otio';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useTheme } from '../hooks/use-theme';
import { LondonMap } from '../maps/London';
import { RouteName } from '../typings';

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
  left: ${(props) => props.theme.spacing.small};
`;

export const Preview = (): ReactElement => {
  const navigate = useNavigate();

  const theme = useTheme();

  return (
    <PreviewContainer>
      <CloseButton size={28} onClick={() => navigate(RouteName.SETUP)} bg={theme.color.danger}>
        <Icon name={IconName.XMARK} size={22} />
      </CloseButton>
      <LondonMap showControls />
    </PreviewContainer>
  );
};
