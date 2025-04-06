import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import CustomButton from './CustomButton';

const meta: Meta<typeof CustomButton> = {
  component: CustomButton,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof CustomButton>;

export const FirstStory: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
    size: 'large',
    disabled: false,
    onClick: fn(),
  },
};
