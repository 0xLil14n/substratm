// import { Button } from '@mui/material';
import { useEffect } from 'react';
// import { useAppDispatch } from '../../slices/hooks';
// import {
//   login,
//   logout as logoutAction,
//   toggleLogin,
// } from '../../slices/login.slice';
import { useMoralis } from 'react-moralis';
import styled from 'styled-components';
import { Button } from '../components/Button';
import { TABLET } from '../utils/breakpoints';
const MetamaskLogin = () => {
  // let dispatch = useAppDispatch();
  const {
    isWeb3Enabled,
    isAuthenticated,
    enableWeb3,
    authenticate,
    logout,
    isAuthenticating,
    isWeb3EnableLoading,
  } = useMoralis();
  const isLoading = isAuthenticating || isWeb3EnableLoading;
  const isLoggedIn = isAuthenticated;
  const enableAndAuthenticate = async () => {
    await enableWeb3();
    await authenticate();
  };
  const signInOrSignOut = () => {
    if (!isWeb3Enabled || !isAuthenticated) {
      enableAndAuthenticate();
    } else {
      logout();
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      enableWeb3();
    }
  }, [isAuthenticated]);

  // useEffect(() => {
  //   dispatch(toggleLogin());
  //   if (isLoggedIn) {
  //     dispatch(login());
  //   } else {
  //     dispatch(logoutAction());
  //   }
  // }, [isLoggedIn]);

  return (
    <>
      <StyledButton
        variant="contained"
        color="primary"
        disabled={isAuthenticating}
        onClick={signInOrSignOut}
      >
        {isLoading
          ? 'Loading...'
          : isLoggedIn
          ? 'Disconnect'
          : `Connect${'\u00A0'}Wallet`}
      </StyledButton>
    </>
  );
};

const StyledButton = styled(Button)`
  height: 40px;
  width: 120px;
  @media (min-width: ${TABLET}) {
    height: 65px;
    width: 170px;
  }
`;
export default MetamaskLogin;
