import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Button } from './Button';
import MetamaskLogin from './MetamaskLogin';
import SegmentIcon from '@mui/icons-material/Segment';
import { TABLET } from '../utils/breakpoints';
const Header = () => {
  return (
    <StyledHeader>
      <Link href="/">
        <Substratm>SUBSTRATM</Substratm>
      </Link>

      <div>
        <StyledSegmentIcon />
      </div>
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

const StyledButton = styled(Button)`
  background: none;
  color: ${(props) => props.theme.colors.text};
`;

const StyledSegmentIcon = styled(SegmentIcon)`
  font-size: 25px;
  cursor: pointer;

  @media (min-width: ${TABLET}) {
    display: none;
  }
`;

const Substratm = styled(StyledButton)`
  font-size: 20px;
  display: flex;
  width: 24vw;

  @media (min-width: ${TABLET}) {
    font-size: 25px;
    margin-left: 30px;
  }
`;

const StyledToolbar = styled.div`
  display: none;
  & > * {
    height: 65px;
    width: 16vw;
  }
  @media (min-width: ${TABLET}) {
    display: block;
    & > * {
      align-items: stretch;
      margin-right: 7px;
      max-width: 170px;
    }
  }
`;

const StyledHeader = styled.nav`
  padding: 14px 7px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (min-width: ${TABLET}) {
    padding: 7px;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    overflow: hidden;
  }
`;
export default Header;
