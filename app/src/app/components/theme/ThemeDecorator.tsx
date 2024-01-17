import { ThemeProvider } from './ThemeProvider';
import type { Story as StoryType } from '@storybook/react';

export const ThemeDecorator = (Story: StoryType) => {
  return (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  );
};
