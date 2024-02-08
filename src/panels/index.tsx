import React, { ReactElement, useCallback, useMemo } from 'react';
import { Icon, IconButton, IconName, Spacer, useOnKeyPress } from 'react-otio';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import styled from 'styled-components';
import { ModalState, PanelState } from '../state';
import { PanelName } from '../typings';
import { Lines } from './Lines';

const PanelContainer = styled.div`
  position: absolute;
  overflow: hidden;
  height: calc(100vh - 10px);
  right: 0;
  width: calc(20vw - 5px);
  margin: ${(props) => props.theme.spacing.small};
  border-radius: ${(props) => props.theme.borderRadius.medium};
  filter: drop-shadow(${(props) => props.theme.dropShadow.strong});
  background: ${(props) => props.theme.backgroundColor.secondary};
  z-index: ${(props) => props.theme.zIndex.panel};
`;

const PanelBackdrop = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  cursor: pointer;
  background: ${(props) => props.theme.backgroundColor.backdrop};
  z-index: ${(props) => props.theme.zIndex.backdrop};
`;

const PanelHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const PanelContent = styled.div`
  overflow-y: scroll;
  height: 100%;
  padding: ${(props) => props.theme.spacing.large};
`;

const CloseButton = styled(IconButton)`
  top: ${(props) => props.theme.spacing.large};
  left: ${(props) => props.theme.spacing.large};
  z-index: ${(props) => props.theme.zIndex.modal};
`;

export const Panels = (): ReactElement => {
  const panel = useRecoilValue(PanelState);
  const modal = useRecoilValue(ModalState);
  const resetPanel = useResetRecoilState(PanelState);

  const disableBackdrop = useMemo(() => {
    if (panel === PanelName.LINES) {
      return true;
    }

    return false;
  }, [panel]);

  const handleClose = useCallback(() => {
    if (panel == null || modal != null) return;
    resetPanel();
  }, [panel, modal, resetPanel]);

  useOnKeyPress({ key: 'Escape', onPress: handleClose });

  if (panel == null) {
    return <></>;
  }

  return (
    <>
      {disableBackdrop === false && <PanelBackdrop onClick={resetPanel} />}
      <PanelContainer>
        <PanelContent>
          <PanelHeader>
            <CloseButton onClick={resetPanel}>
              <Icon name={IconName.XMARK} />
            </CloseButton>
          </PanelHeader>
          <Spacer vertical={5} />
          {panel === PanelName.LINES && <Lines />}
        </PanelContent>
      </PanelContainer>
    </>
  );
};
