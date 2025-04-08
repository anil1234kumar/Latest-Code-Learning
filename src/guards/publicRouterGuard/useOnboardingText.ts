import { useLocation } from 'react-router-dom';
import { onboardingMessages } from './onboardingMessages';

interface OnboardingText {
  heading: string;
  paragraph: string;
  images?: string;
}

export const useOnboardingText = (): OnboardingText => {
  const { pathname } = useLocation();
  return (
    onboardingMessages[pathname as keyof typeof onboardingMessages] || {
      heading: '',
      paragraph: '',
      images: '',
    }
  );
};
