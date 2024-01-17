import { TaskCard } from '../../../components/TaskCard';
import { IGoalDictionary, isTaskAvailable } from '../helper';
import { IGoal } from '../mockData';
import styled from 'styled-components';

const RootContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  gap: 10px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

interface GoalsListProps {
  goals: IGoal[];
  goalDictionary: IGoalDictionary;
  onActive: (id: number) => void;
}

export const GoalsList = ({
  goals,
  goalDictionary,
  onActive,
}: GoalsListProps) => {
  return (
    <RootContainer>
      {goals.map((goal) => {
        const isDone = goalDictionary[goal.id].isDone;
        const available = isTaskAvailable(goalDictionary, goal);
        return (
          <TaskCard
            onClick={() => onActive(goal.id)}
            title={goal.title}
            content={goal.content}
            adornment={goal.adornment}
            isNew={goal.isNew}
            isDone={isDone}
            available={available}
          />
        );
      })}
    </RootContainer>
  );
};
