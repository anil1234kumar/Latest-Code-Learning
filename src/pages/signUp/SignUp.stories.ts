// SignUp.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import SignUp from './SignUp';

const meta: Meta<typeof SignUp> = {
  title: 'Pages/SignUp',
  component: SignUp,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof SignUp>;

export const Default: Story = {};
