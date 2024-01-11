import { motion } from 'framer-motion';
import React, { HTMLInputTypeAttribute, ReactElement, useCallback, useRef, useState } from 'react';
import styled from 'styled-components';
import { useOnClickout } from '../hooks';
import { ScaleOnTap } from '../style/animations';
import { IconName } from '../typings';
import { IconButton } from './Button';
import { ColumnContainer, SpaceBetweenContainer, Spacer } from './Common';
import { Icon } from './Icon';
import { MediumText } from './Text';

export type SelectOption = { label: string; value: string };

interface InputProps {
  id?: string;
  placeholder?: string;
  value?: string;
  label?: string;
  disabled?: boolean;
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
const InputLabelText = styled(MediumText)`
  margin-left: ${(props) => props.theme.spacing.small};
  margin-bottom: ${(props) => props.theme.spacing.small};
`;

export const TextInput = ({
  id,
  value,
  label,
  placeholder,
  disabled,
  bg,
  icon,
  type = 'text',
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
          type={type}
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

const SelectListContainer = styled.div`
  position: absolute;
  width: 100%;
  transform: translate(-10px, 95px);
  background: inherit;
  padding: ${(props) => props.theme.spacing.medium} 0;
  border-radius: ${(props) => props.theme.borderRadius.medium};
`;
const SelectListOption = styled(motion.div)`
  padding: ${(props) => props.theme.spacing.medium};
`;

export const SelectInput = ({ value, placeholder, disabled, options, bg, icon, onChange }: InputProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const hasOptions = (options && options.length > 0) ?? false;

  useOnClickout([ref], () => {
    setIsOpen(false);
  });

  const toggleOpen = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen, setIsOpen]);

  return (
    <InputContainer disabled={disabled} bg={bg} ref={ref}>
      {icon}
      {icon && <Spacer horizontal={5} />}
      <SpaceBetweenContainer>
        <MediumText>{value ?? placeholder}</MediumText>
        <IconButton onClick={toggleOpen} disabled={!hasOptions}>
          <Icon name={IconName.CHEVRON_DOWN} />
        </IconButton>
      </SpaceBetweenContainer>

      {isOpen && hasOptions && (
        <SelectListContainer>
          {options?.map((option) => (
            <SelectListOption
              key={`select-list-option-${option.value}`}
              onClick={() => onChange?.(option.value)}
              {...ScaleOnTap({})}
            >
              {option.label}
            </SelectListOption>
          ))}
        </SelectListContainer>
      )}
    </InputContainer>
  );
};
