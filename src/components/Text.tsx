import styled from 'styled-components';

const Text = styled.span<{ faint?: boolean; bold?: boolean; italic?: boolean; cursor?: string }>`
  font-weight: ${(props) => (props.bold ? '600' : '400')};
  font-style: ${(props) => (props.italic ? 'italic' : 'normal')};
  color: ${(props) => {
    if (props.color) {
      return props.color;
    }
    return props.faint ? props.theme.color.faint : props.theme.color.normal;
  }};
  cursor: ${(props) => props.cursor ?? 'inherit'};
`;

export const VeryLargeText = styled(Text)`
  font-size: ${(props) => props.theme.fontSize.veryLarge};

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}px) {
    font-size: ${(props) => props.theme.fontSize.medium};
  }
`;

export const LargeText = styled(Text)`
  font-size: ${(props) => props.theme.fontSize.large};

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}px) {
    font-size: ${(props) => props.theme.fontSize.medium};
  }
`;

export const MediumText = styled(Text)`
  font-size: ${(props) => props.theme.fontSize.medium};

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}px) {
    font-size: ${(props) => props.theme.fontSize.small};
  }
`;

export const SmallText = styled(Text)`
  font-size: ${(props) => props.theme.fontSize.small};

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}px) {
    font-size: ${(props) => props.theme.fontSize.verySmall};
  }
`;

export const VerySmallText = styled(Text)`
  font-size: ${(props) => props.theme.fontSize.verySmall};
`;
