import { useState } from 'react';
import { IGoal } from '../mockData';
import {
  IGoalDictionary,
  completeTask,
  getAchievedPoints,
  getAvailablePointsCount,
  getIdDictionary,
} from '../helper';

interface UseGoalsProps {
  goals: IGoal[];
}

export const useGoals = ({ goals }: UseGoalsProps) => {
  const [goalsDictionary, setGoalsDictionary] = useState<IGoalDictionary>(() =>
    getIdDictionary(goals),
  );
  const [localGoals, setLocalGoals] = useState<IGoal[]>(goals);
  const [pointsAmount] = useState(() => getAvailablePointsCount(goals));
  const [achievedPoints, setAchievedPoints] = useState(
    getAchievedPoints(goalsDictionary, goals),
  );

  const handleUpdateGoal = (goalId: number) => {
    const newGoals = completeTask(localGoals, goalId);
    const newDictionary = getIdDictionary(newGoals);
    const achievedPoints = getAchievedPoints(newDictionary, newGoals);
    setGoalsDictionary(newDictionary);
    setLocalGoals(newGoals);
    setAchievedPoints(achievedPoints);
  };

  return {
    totalPoints: pointsAmount,
    pointsCompleted: achievedPoints,
    handleUpdateGoal,
    goals: localGoals,
    goalsDictionary: goalsDictionary,
  };
};
