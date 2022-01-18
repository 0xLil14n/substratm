import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Button } from './Button';
import MetamaskLogin from './MetamaskLogin';
import SegmentIcon from '@mui/icons-material/Segment';
import { TABLET } from '../utils/breakpoints';
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <StyledHeader>
      <StyledMenu>
        <Link href="/">
          <Substratm>SUBSTRATM</Substratm>
        </Link>

        <StyledSegmentIcon
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        />
      </StyledMenu>
      <StyledToolbar showMenu={showMenu}>
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

const StyledSegmentIcon = styled(SegmentIcon)`
  font-size: 25px;
  cursor: pointer;

  @media (min-width: ${TABLET}) {
    display: none;
  }
`;
const StyledMenu = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const StyledButton = styled(Button)`
  background: none;
  color: ${(props) => props.theme.colors.text};
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

const StyledToolbar = styled.div<{ showMenu?: boolean }>`
  display: ${(props) => (props.showMenu ? 'flex' : 'none')};
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
  & > * {
    height: 65px;
    width: 16vw;
    min-width: 120px;
  }
  @media (min-width: ${TABLET}) {
    display: flex;
    flex-direction: row;
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
  flex-direction: column;
  align-items: center;
  @media (min-width: ${TABLET}) {
    flex-direction: row;
    padding: 7px;
    align-items: center;
    position: fixed;
    top: 0;
    overflow: hidden;
  }
`;
export default Header;
