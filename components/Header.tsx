import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Button } from './Button';
// import { useAppSelector } from '../../slices/hooks';
// import { SubstramLogo } from '../../content/logo';
import MetamaskLogin from './MetamaskLogin';

const Header = () => {
  //   const isLoggedIn = useAppSelector((x) => x.loginSlice.loggedIn);
  const isLoggedIn = false;
  return (
    <StyledHeader>
      <Substratm>SUBSTRATM</Substratm>
      <StyledToolbar>
        <Link href="/about">
          <StyledButton color="secondary">About</StyledButton>
        </Link>
        <Link href="projects">
          <StyledButton color="secondary">Projects</StyledButton>
        </Link>
        <Link href="/socialwall">
          <StyledButton color="secondary">Social&nbsp;Wall</StyledButton>
        </Link>
        <MetamaskLogin />
      </StyledToolbar>
    </StyledHeader>
  );
};
const Substratm = styled.div`
  display: flex;
  width: 24vw;
  padding 0 30px;
`;
const StyledButton = styled(Button)`
  background: none;
  color: ${(props) => props.theme.colors.text};
`;
const StyledToolbar = styled.div`
  & > * {
    align-items: center;
    margin-right: 10px;
    height: 65px;
    width: 170px;
  }
`;

const StyledHeader = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  overflow: hidden;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;
export default Header;
