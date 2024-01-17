import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  background-color: green;
  -webkit-appearance: none;
  width: 20px;
  height: 20px;

  &[type='checkbox'] {
    border: none;
    background-color: red;
  }

  &[type='checkbox']:checked {
    border: none;
    background-color: blue;
  }
`;

interface CheckBoxProps {
  checked?: boolean;
  onChange?: (newVal: boolean) => void;
}

export const CheckBox = ({ checked, onChange }: CheckBoxProps) => {
  return (
    <StyledInput
      type="checkbox"
      checked={checked}
      onChange={(e) => (onChange ? onChange(e.target.checked) : undefined)}
    />
  );
};
