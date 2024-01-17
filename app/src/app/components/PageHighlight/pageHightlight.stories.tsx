import styled from 'styled-components';
import { PageHighlight as PageHighlightComp } from './pageHighlight';

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
      <PageHighlightComp
        title="Enter to win"
        subtitle="2 Superbowl LVIII tickets"
        content={`Complete any five items for chance to win. One winner will be selected on December 30, 2023`}
      />
    </Div>
  );
};

export default {
  title: 'PageHighlight',
  component: PageHighlightComp,
  parameters: {
    docs: {
      page: () => ({}),
    },
  },
};

export const PageHighlight = Template.bind({});
