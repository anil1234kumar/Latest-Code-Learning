import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const FirstStory: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
    size: 'large',
    disabled: false,
    onClick: fn(),
  },
};
