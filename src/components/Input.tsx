import React, { HTMLInputTypeAttribute, ReactElement } from 'react';
import styled from 'styled-components';
import { ColumnContainer, Spacer } from './Common';
import { MediumText } from './Text';

export type SelectOption = { label: string; value: string };

interface InputProps {
  id?: string;
  placeholder?: string;
  value?: string;
  label?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  options?: SelectOption[];
  bg?: string;
  icon?: ReactElement;
  type?: HTMLInputTypeAttribute;
  onChange?: (value: string) => void;
  onBlur?: (value: string) => void;
}

const InputContainer = styled.div<{ disabled?: boolean; bg?: string; margin?: boolean }>`
  display: flex;
  position: relative;
  align-items: center;
  padding: ${(props) => props.theme.spacing.medium};
  background: ${(props) => props.bg ?? props.theme.backgroundColor.primary};
  filter: drop-shadow(${(props) => props.theme.dropShadow.medium});
  border-radius: ${(props) => props.theme.borderRadius.medium};
  opacity: ${(props) => (props.disabled ? 0.4 : 1)};
`;

const InputLabelText = styled(MediumText)`
  margin-left: ${(props) => props.theme.spacing.small};
  margin-bottom: ${(props) => props.theme.spacing.small};
`;

const Input = styled.input`
  border: none;
  background: none;
  color: ${(props) => props.theme.color.normal};
  font-size: ${(props) => props.theme.fontSize.medium};
  width: 100%;
  &:focus {
    outline: none;
  }
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const TextInputContainer = styled(ColumnContainer)`
  width: 100%;
`;

export const TextInput = ({
  id,
  value,
  label,
  placeholder,
  disabled,
  autoFocus,
  bg,
  icon,
  type = 'text',
  onChange,
  onBlur,
}: InputProps): ReactElement => {
  return (
    <TextInputContainer>
      {label && <InputLabelText faint>{label}</InputLabelText>}
      <InputContainer disabled={disabled} bg={bg}>
        {icon}
        {icon && <Spacer horizontal={5} />}
        <Input
          id={id}
          type={type}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          autoFocus={autoFocus}
          onChange={(event) => onChange?.(event.target.value)}
          onBlur={(event) => onBlur?.(event.target.value)}
        />
      </InputContainer>
    </TextInputContainer>
  );
};

export const NumberInput = ({
  id,
  value,
  label,
  placeholder,
  disabled,
  bg,
  icon,
  onChange,
  onBlur,
}: InputProps): ReactElement => {
  return (
    <ColumnContainer>
      {label && <InputLabelText faint>{label}</InputLabelText>}
      <InputContainer disabled={disabled} bg={bg}>
        {icon}
        {icon && <Spacer horizontal={5} />}
        <Input
          id={id}
          type="number"
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          onChange={(event) => onChange?.(event.target.value)}
          onBlur={(event) => onBlur?.(event.target.value)}
        />
      </InputContainer>
    </ColumnContainer>
  );
};
