import { TaskCardProps } from '../../components/TaskCard';

export interface IGoal extends TaskCardProps {
  id: number;
  taskValue?: number;
  openDependency?: number[];
  pointDependency?: number[];
}

export const tasks: IGoal[] = [
  {
    id: 1,
    taskValue: 1,
    title: 'Refer a friend',
    content:
      'Completion status will update when your friend creates their account.',
    isDone: true,
  },
  {
    id: 2,
    taskValue: 1,
    title: 'Check in at the Encore NYC meetup',
    content: 'Tap to scan the QR code at the event.',
    isNew: true,
  },
  {
    id: 3,
    taskValue: 1,
    pointDependency: [3, 4, 5, 6],
    title: 'Connect Instagram',
    adornment: 'instagram',
  },
  {
    id: 4,
    openDependency: [3],
    title: 'Follow Encore',
    content: 'Connect Instagram to unlock',
    adornment: 'instagram',
    available: false,
  },
  {
    id: 5,
    openDependency: [3, 4],
    title: 'Like Encore’s posts',
    content: 'Connect Instagram to unlock',
    adornment: 'instagram',
    available: false,
  },
  {
    id: 6,
    openDependency: [3, 4],
    title: 'Mention #encorefans in a post',
    content: 'Connect Instagram to unlock',
    adornment: 'instagram',
    available: false,
  },
  {
    id: 7,
    taskValue: 1,
    pointDependency: [7, 8],
    title: 'Connect Twitter',
    adornment: 'x',
  },
  {
    id: 8,
    openDependency: [7],
    title: 'Follow Encore',
    content: 'Connect Twitter to unlock',
    adornment: 'x',
    available: false,
  },
  {
    id: 9,
    taskValue: 1,
    pointDependency: [9, 10, 11],
    title: 'Connect TikTok',
    adornment: 'tiktok',
  },
  {
    id: 10,
    openDependency: [9],
    title: 'Follow Encore',
    content: 'Connect TikTok to unlock',
    adornment: 'tiktok',
    available: false,
  },
  {
    id: 11,
    openDependency: [9],
    title: 'Like Encore’s videos',
    content: 'Connect TikTok to unlock',
    adornment: 'tiktok',
    available: false,
  },
];
