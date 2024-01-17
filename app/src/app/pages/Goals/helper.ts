import { IGoal } from './mockData';

export interface IGoalDictionary {
  [key: string]: {
    id: number;
    isDone: boolean;
  };
}

/**
 * This dictionary is intended to easily search if the task as
 * done or if it still pending
 * @param goals - the goals -> this should be a value from the backend
 * @returns - new dictionary
 */
export const getIdDictionary = (goals: IGoal[]) => {
  const newDictionary: IGoalDictionary = {};
  goals.forEach((goal) => {
    newDictionary[goal.id] = {
      id: goal.id,
      isDone: goal.isDone || false,
    };
  });
  return newDictionary;
};

/**
 * This function will return a new map of tasks and mark
 * the desired task as completed
 * @param goals
 * @param completedId - id of the task that is needed to update
 * @returns
 */
export const completeTask = (goals: IGoal[], completedId: number) => {
  return goals.map((goal) => {
    if (goal.id === completedId) {
      return {
        ...goal,
        isDone: true,
      };
    }
    return goal;
  });
};

/**
 * This function will check if the user can proceed to do this task
 * Chances are that the task has a dependency and it can not be started
 * on this code a single click on the task will mark the task as completed
 * @param goalsDictionary
 * @param goal
 * @returns
 */
export const isTaskAvailable = (
  goalsDictionary: IGoalDictionary,
  goal: IGoal,
) => {
  if (!goal.openDependency) {
    return true;
  }
  return goal.openDependency.every(
    (dependency) => goalsDictionary[dependency].isDone,
  );
};

/**
 * if the task is completed with all its dependencies then
 * we could said that the point can be granted. Some tasks has
 * dependencies and the completion of all tasks is mandatory
 * @param goalsDictionary
 * @param goal
 * @returns
 */
export const isPointAvailable = (
  goalsDictionary: IGoalDictionary,
  goal: IGoal,
) => {
  if (goal.taskValue === undefined) {
    return false;
  }

  if (!goal.pointDependency) {
    return true;
  }

  return goal.pointDependency.every(
    (dependency) => goalsDictionary[dependency].isDone,
  );
};

/**
 * This function get the count of points that the user
 * currently have
 * @param goalsDictionary
 * @param goals
 * @returns
 */
export const getAchievedPoints = (
  goalsDictionary: IGoalDictionary,
  goals: IGoal[],
) => {
  return goals.reduce((acc, goal) => {
    if (goal.taskValue === undefined) {
      return acc;
    }
    if (
      isPointAvailable(goalsDictionary, goal) &&
      goalsDictionary[goal.id].isDone
    ) {
      return acc + (goal.taskValue || 0);
    }
    return acc;
  }, 0);
};

export const getAvailablePointsCount = (goals: IGoal[]) => {
  return goals.reduce((acc, act) => {
    return acc + (act.taskValue || 0);
  }, 0);
};
