import { FC } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signUpSchema } from './signUpValidation';
import { useSignUp } from './useSignUp';
import CustomInput from '@/components/customInput';
import CustomButton from '@/components/customButton/CustomButton';
import { FormContainer } from './SignUp.styles';

const initialValues = {
  name: '',
  email: '',
  mobile: '',
  password: '',
  confirmPassword: '',
};

const SignUp: FC = () => {
  const { handleSignUp, loading } = useSignUp();
  const { control, handleSubmit } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(signUpSchema),
    mode: 'onBlur',
  });

  return (
    <>
      <FormContainer onSubmit={handleSubmit(handleSignUp)}>
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState }) => (
            <CustomInput
              label="Name"
              type="text"
              placeholder="Enter your name"
              htmlFor={field.name}
              {...field}
              error={fieldState.isTouched && fieldState.error?.message}
            />
          )}
        />

        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <CustomInput
              label="Email"
              type="email"
              placeholder="Enter your email"
              htmlFor={field.name}
              {...field}
              error={fieldState.isTouched && fieldState.error?.message}
            />
          )}
        />

        <Controller
          name="mobile"
          control={control}
          render={({ field, fieldState }) => (
            <CustomInput
              label="Mobile"
              type="text"
              placeholder="Enter your mobile"
              htmlFor={field.name}
              {...field}
              error={fieldState.isTouched && fieldState.error?.message}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field, fieldState }) => (
            <CustomInput
              label="Password"
              type="password"
              placeholder="Enter your password"
              htmlFor={field.name}
              {...field}
              error={fieldState.isTouched && fieldState.error?.message}
            />
          )}
        />

        <Controller
          name="confirmPassword"
          control={control}
          render={({ field, fieldState }) => (
            <CustomInput
              label="Confirm Password"
              type="password"
              placeholder="Confirm password"
              htmlFor={field.name}
              {...field}
              error={fieldState.isTouched && fieldState.error?.message}
            />
          )}
        />

        <CustomButton type="submit" variant="primary" loading={loading}>
          Sign Up
        </CustomButton>
      </FormContainer>
    </>
  );
};

export default SignUp;
