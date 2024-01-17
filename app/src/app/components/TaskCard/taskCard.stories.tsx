import styled from 'styled-components';
import { TaskCard as TaskCardComp } from './taskCard';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  gap: 20px;
`;

const Template = () => {
  return (
    <Div>
      <TaskCardComp
        title="Refer a friend"
        content="Tap to scan the QR code at the event."
        isDone
        adornment="tiktok"
      />
      <TaskCardComp
        title="Refer a friend"
        content="Tap to scan the QR code at the event."
        isNew
        adornment="instagram"
      />
      <TaskCardComp
        title="Refer a friend"
        content="Tap to scan the QR code at the event."
      />
      <TaskCardComp
        title="Refer a friend"
        content="Tap to scan the QR code at the event."
        adornment="x"
        available={false}
      />
    </Div>
  );
};

export default {
  title: 'TaskCard',
  component: TaskCardComp,
  parameters: {
    docs: {
      page: () => ({}),
    },
  },
};

export const TaskCard = Template.bind({});
