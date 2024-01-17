import { TaskCompletion as TaskCompletionComp } from './taskCompletion';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const Template = () => {
  return (
    <Div>
      <TaskCompletionComp amount={90} />
    </Div>
  );
};

export default {
  title: 'TaskCompletion',
  component: TaskCompletionComp,
  parameters: {
    docs: {
      page: () => ({}),
    },
  },
};

export const TaskCompletion = Template.bind({});
