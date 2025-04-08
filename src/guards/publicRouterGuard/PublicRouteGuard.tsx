import WrapperOnBoarding from '@/components/wrapperOnBoarding/WrapperOnBoarding';
import { Outlet, useLocation } from 'react-router-dom';
import { useOnboardingText } from './useOnboardingText';
import { CommanTitleWraper, HeadingText, SubHeadingText } from './publicRouterGuard.styles';
// import Path from './RoutePaths';
// import LogoDark from '../assets/LogoDark.svg'
// import { useSelector } from 'react-redux';
// import { RootState } from '../redux/store';

function PublicRouteGuard() {
  const location = useLocation();
  const { heading, paragraph, images } = useOnboardingText();
  console.log('Current route:', location.pathname);
  console.log('Onboarding Text:', { heading, paragraph });

  return (
    <>
      <WrapperOnBoarding img={images}>
        <CommanTitleWraper>
          <HeadingText>{heading}</HeadingText>
          <SubHeadingText>{paragraph}</SubHeadingText>
        </CommanTitleWraper>
        <Outlet />
      </WrapperOnBoarding>
    </>
  );
}

export default PublicRouteGuard;
