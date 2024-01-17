import styled from 'styled-components';
import { Logo as LogoComp } from './logo';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  width: 400px;
  gap: 20px;
  padding: 5px;
`;

const Template = () => {
  return (
    <Div>
      <LogoComp />
    </Div>
  );
};

export default {
  title: 'Logo',
  component: LogoComp,
  parameters: {
    docs: {
      page: () => ({}),
    },
  },
};

export const Logo = Template.bind({});
