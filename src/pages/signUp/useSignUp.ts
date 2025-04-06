import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../reduxStore/store';
import { signupUser } from './signUpAction';
import { SignUpPayload } from './SignUp.type';
import { toast } from 'react-toastify';

export const useSignUp = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, user, error } = useSelector((state: RootState) => state.signUp);

  const handleSignUp = async (values: SignUpPayload) => {
    try {
      const res = await dispatch(signupUser(values));
      if (signupUser.fulfilled.match(res)) {
        toast.success('Signup successful!');
      } else {
        toast.error(res.payload as string);
      }
    } catch {
      toast.error('Something went wrong.');
    }
  };

  return {
    loading,
    user,
    error,
    handleSignUp,
  };
};
