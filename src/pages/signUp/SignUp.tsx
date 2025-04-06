import { FC } from 'react';
import CustomButton from '@/components/customButton/CustomButton';
import { FormCard } from '@/components/customCard';
import CustomInput from '@/components/customInput';

const SignUp: FC = () => {
  return (
    <div className="">
      <FormCard>
        <CustomInput label="Name" type="text" placeholder="Enter your name" name="name" />
        <CustomInput label="Email" type="email" placeholder="Enter your email" name="email" />
        <CustomInput label="Mobile" type="Number" placeholder="Enter your mobile" name="mobile" />
        <CustomInput label="Password" type="password" placeholder="Enter your name" name="name" />
        <CustomInput
          label="Confirm Password"
          type="password"
          placeholder="Enter your name"
          name="name"
        />
        <CustomButton variant="primary"> Sign Up </CustomButton>
      </FormCard>
    </div>
  );
};

export default SignUp;
