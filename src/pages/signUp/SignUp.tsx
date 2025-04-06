import { FC } from 'react';
import { Formik, Form } from 'formik';
import { signUpSchema } from './signUpValidation';
import { useSignUp } from './useSignUp';
import CustomInput from '@/components/customInput';
import CustomButton from '@/components/customButton/CustomButton';
import { FormCard } from '@/components/customCard';

const initialValues = {
  name: '',
  email: '',
  mobile: '',
  password: '',
  confirmPassword: '',
};

const SignUp: FC = () => {
  const { handleSignUp, loading } = useSignUp();

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={signUpSchema}
        onSubmit={(values) => handleSignUp(values)}
      >
        {({ errors, touched, handleChange, handleBlur, values }) => (
          <Form>
            <FormCard>
              <CustomInput
                label="Name"
                name="name"
                type="text"
                placeholder="Enter your name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                error={touched.name && errors.name}
              />
              <CustomInput
                label="Email"
                name="email"
                type="email"
                placeholder="Enter your email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                error={touched.email && errors.email}
              />
              <CustomInput
                label="Mobile"
                name="mobile"
                type="text"
                placeholder="Enter your mobile"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.mobile}
                error={touched.mobile && errors.mobile}
              />
              <CustomInput
                label="Password"
                name="password"
                type="password"
                placeholder="Enter your password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                error={touched.password && errors.password}
              />
              <CustomInput
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                placeholder="Confirm password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
                error={touched.confirmPassword && errors.confirmPassword}
              />
              <CustomButton type="submit" variant="primary" loading={loading}>
                Sign Up
              </CustomButton>
            </FormCard>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
