import styled from 'styled-components';
import { CommonLayout as CommonLayoutComp } from './commonLayout';
import { Header } from '../Typography';

const Content = styled.div`
  border: 1px solid red;
  height: 500px;
  width: 800px;
`;

const RootContainer = styled.div`
  border: 1px solid blue;
`;

const Template = () => {
  return (
    <RootContainer>
      <CommonLayoutComp>
        <Content>
          <Header>This is a Header</Header>
        </Content>
      </CommonLayoutComp>
    </RootContainer>
  );
};

export default {
  title: 'CommonLayout',
  component: CommonLayoutComp,
  parameters: {
    docs: {
      page: () => ({}),
    },
  },
};

export const CommonLayout = Template.bind({});
