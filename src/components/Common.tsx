import styled from 'styled-components';

export const Spacer = styled.div<{ horizontal?: number; vertical?: number }>`
  padding: ${(props) =>
    `${props.vertical ?? 0}px ${props.horizontal ?? 0}px ${props.vertical ?? 0}px ${props.horizontal ?? 0}px`};
`;

export const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RowBetweenContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SpaceBetweenContainer = styled(RowContainer)`
  width: 100%;
  justify-content: space-between;
`;

export const RowEndContainer = styled(RowContainer)`
  justify-content: flex-end;
`;

export const RowScrollContainer = styled(RowContainer)`
  overflow-x: scroll;
`;

export const OverflowTextContainer = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Logo = styled.img`
  width: 20px;
  aspect-ratio: 1 / 1;
`;

export const Avatar = styled.img`
  width: 40px;
  aspect-ratio: 1 / 1;
  border-radius: 100%;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}px) {
    width: 30px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Badge = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.highlightColor.quaternary};
`;
