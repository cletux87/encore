import styled from 'styled-components';
import { CheckBox as StyledCheckBox } from './checkbox';
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
  const [newPass, setNewPass] = useState(false);

  const handleChangeVal = (newVal: boolean) => {
    setNewPass(newVal);
  };

  return (
    <Div>
      <StyledCheckBox checked={newPass} onChange={handleChangeVal} />
    </Div>
  );
};

export default {
  title: 'CheckBox',
  component: StyledCheckBox,
  parameters: {
    docs: {
      page: () => ({}),
    },
  },
};

export const CheckBox = Template.bind({});
