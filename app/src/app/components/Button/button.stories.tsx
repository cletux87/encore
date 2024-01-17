import styled from 'styled-components';
import { Button as StyledButton } from './button';

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const Template = () => {
  return (
    <Div>
      <StyledButton>continue</StyledButton>
    </Div>
  );
};

export default {
  title: 'Button',
  component: StyledButton,
  parameters: {
    docs: {
      page: () => ({}),
    },
  },
};

export const Button = Template.bind({});
