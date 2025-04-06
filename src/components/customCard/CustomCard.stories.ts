// CustomCard.stories.ts
import { Meta, StoryObj } from '@storybook/react';
import CustomCard from './CustomCard';

const meta: Meta<typeof CustomCard> = {
  title: 'Components/CustomCard',
  component: CustomCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'This is a custom card',
  },
};

export default meta;

type Story = StoryObj<typeof CustomCard>;

export const Default: Story = {
  args: {
    children: 'This is the default CustomCard with some content inside.',
  },
};
