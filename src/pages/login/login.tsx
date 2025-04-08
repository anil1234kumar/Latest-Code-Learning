import { FC } from 'react';
import { FormContainer, LinkWrapper } from './login.styles';
import CustomInput from '../../components/customInput/CustomInput.tsx';
import CustomButton from '@/components/customButton/CustomButton.tsx';

const Login: FC = () => {
  return (
    <FormContainer>
      <CustomInput type="email" label="Email" htmlFor="email" />
      <CustomInput type="password" label="password" htmlFor="password" />
      <LinkWrapper>Forget Password</LinkWrapper>
      <CustomButton type="submit" variant="primary">
        LogIn
      </CustomButton>
    </FormContainer>
  );
};

export default Login;
