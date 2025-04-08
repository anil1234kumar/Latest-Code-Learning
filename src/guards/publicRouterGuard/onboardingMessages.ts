import Path from '../RoutePaths.tsx';
import StoreImages from '@/asset/imageStore/AllImages.tsx';

const { SIGNUP, LOGIN, FORGETPASSWORD, VERIFYOTP, RESETPASSWORD } = StoreImages;
export const onboardingMessages = {
  // [Path.HOME]: {
  //   heading: 'Welcome back!',
  //   paragraph: 'Please enter your login details below.',
  // },
  [Path.LOGIN]: {
    images: LOGIN,
    heading: 'Login your account',
    paragraph: 'Please enter your details to Login.',
  },
  [Path.SIGNUP]: {
    images: SIGNUP,
    heading: 'Create your account',
    paragraph: 'Please enter your details to sign up.',
  },
  [Path.FORGOTPASSWORD]: {
    images: FORGETPASSWORD,
    heading: 'Forgot Password',
    paragraph: 'Enter the email address associated with your account.',
  },
  [Path.RESETPASSWORD]: {
    images: RESETPASSWORD,
    heading: 'Reset Password',
    paragraph: 'Please choose a new and strong password.',
  },
  [Path.OTP]: {
    images: VERIFYOTP,
    heading: 'OTP',
    paragraph: 'Enter the verification code we sent to your email.',
  },
};
