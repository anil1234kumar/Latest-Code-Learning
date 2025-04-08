// SignUp.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import SignUp from './SignUp';
import { userEvent, within } from '@storybook/test';
import { expect } from '@storybook/jest';

const meta: Meta<typeof SignUp> = {
  title: 'Components/SignUp',
  component: SignUp,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export default meta;

type Story = StoryObj<typeof SignUp>;

const mockUseSignUp =
  (loading = false) =>
  () => ({
    handleSignUp: async (values: unknown) => {
      console.log('Form submitted with values:', values);
      await new Promise((resolve) => setTimeout(resolve, 1000));
    },
    loading,
  });

export const Default: Story = {
  args: {
    useSignUp: mockUseSignUp(false),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByLabelText('Name'), 'John Doe');
    await userEvent.type(canvas.getByLabelText('Email'), 'john@example.com');
    await userEvent.type(canvas.getByLabelText('Mobile'), '1234567890');
    await userEvent.type(canvas.getByLabelText('Password'), 'Password123!');
    await userEvent.type(canvas.getByLabelText('Confirm Password'), 'Password123!');

    await expect(canvas.queryByText('Name is required')).toBeNull();
    await expect(canvas.queryByText('Invalid email format')).toBeNull();
  },
};

export const Loading: Story = {
  args: {
    useSignUp: mockUseSignUp(true),
  },
};

// export const WithValidationErrors: Story = {
//   args: {
//     useSignUp: mockUseSignUp(false),
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     await userEvent.click(canvas.getByRole('button', { name: /sign up/i }));

//     await expect(canvas.getByText('Name is required')).toBeInTheDocument();
//     await expect(canvas.getByText('Email is required')).toBeInTheDocument();
//     await expect(canvas.getByText('Mobile is required')).toBeInTheDocument();
//     await expect(canvas.getByText('Password is required')).toBeInTheDocument();
//   },
// };
