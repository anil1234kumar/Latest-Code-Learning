import type { Meta, StoryObj } from '@storybook/react';
import CustomInput from './CustomInput';

const meta: Meta<typeof CustomInput> = {
  title: 'Components/CustomInput',
  component: CustomInput,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof CustomInput>;

export const DefaultInput: Story = {
  args: {
    type: 'text',
    placeholder: 'Enter your name',
    value: '',
    onChange: (e) => console.log('Changed:', e.target.value),
  },
};

export const DisabledInput: Story = {
  args: {
    type: 'text',
    placeholder: 'Disabled input',
    disabled: true,
    value: 'Not editable',
  },
};

export const RequiredInput: Story = {
  args: {
    type: 'email',
    placeholder: 'Enter your email',
    required: true,
  },
};
