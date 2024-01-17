import styled from 'styled-components';
import { EncoreLogo as LogoComp } from './encoreLogo';

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
  title: 'EncoreLogo',
  component: LogoComp,
  parameters: {
    docs: {
      page: () => ({}),
    },
  },
};

export const EncoreLogo = Template.bind({});
