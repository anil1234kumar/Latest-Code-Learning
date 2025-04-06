// import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
// import LogoDark from '../assets/LogoDark.svg'
// import { useSelector } from 'react-redux';
// import { RootState } from '../redux/store';

function PublicRouteGuard() {
  // const location = useLocation().pathname;
  // const isLoggedIn = useSelector((state:RootState) => state.auth.isLoggedIn)
  console.log({ location });
  // if (location === Path.HOME) {
  //     return isLoggedIn ? <Navigate to={Path.DASHBOARD} /> : <Navigate to={Path.LOGIN} />;
  // }

  // const renderContent = () => {
  //     if (location === Path.HOME) {
  //         return { heading: "Welcome back!", paragraph: "Please enter your login details below." };
  //     }
  //     if (location === Path.FORGOTPASSWORD) {
  //         return { heading: "Forgot Password", paragraph: "Enter the email address associated with your account." };
  //     }
  //     if (location === Path.RESETPASSWORD) {
  //         return { heading: "Reset Password", paragraph: "Please choose new and strong password." };
  //     }
  //     if (location === Path.OTP) {
  //         return { heading: "OTP", paragraph: "Enter verification code we sent you to your Email ID." };
  //     }
  //     return { heading: "", paragraph: "" }; // Default content if no match
  // };

  // const { heading, paragraph } = renderContent();
  return (
    <div className="onboardScreen">
      <div className="login-form">
        {/* <img src={LogoDark} alt='logo' />
                <h1 className='headingText'>{heading}</h1>
                <p className='subHeadingText'>{paragraph}</p> */}
        <Outlet />
      </div>
    </div>
  );
}

export default PublicRouteGuard;
