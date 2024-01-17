import { Header } from './Header';
import { Text } from './Text';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const Template = () => {
  return (
    <Div>
      <Header>Header</Header>
      <Text>Text Example 1</Text>
      <Text>Text Example 2</Text>
    </Div>
  );
};

export default {
  title: 'Typography',
  component: Header,
  parameters: {
    docs: {
      page: () => ({}),
    },
  },
};

export const Typography = Template.bind({});
