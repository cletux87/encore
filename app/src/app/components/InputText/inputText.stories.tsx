import styled from 'styled-components';
import { InputText as StyledInputText } from './inputText';
import { useState } from 'react';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  width: 400px;
  gap: 20px;
  padding: 5px;
`;

const Template = () => {
  const [newVal, setNewVal] = useState('');
  const [newPass, setNewPass] = useState('');

  const handleChange = (newVal: string) => {
    setNewVal(newVal);
  };

  const handleChangePass = (newVal: string) => {
    setNewPass(newVal);
  };

  return (
    <Div>
      <StyledInputText
        placeholder="hello"
        onChange={handleChange}
        value={newVal}
      />
      <StyledInputText
        placeholder="XXXXX"
        onChange={handleChangePass}
        value={newPass}
        type="password"
      />
    </Div>
  );
};

export default {
  title: 'InputText',
  component: StyledInputText,
  parameters: {
    docs: {
      page: () => ({}),
    },
  },
};

export const InputText = Template.bind({});
