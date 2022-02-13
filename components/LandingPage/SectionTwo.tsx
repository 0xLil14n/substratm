import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { DESKTOP_BREAKPOINT, TABLET_WIDTH } from '../../utils/breakpoints';
import { Button } from '../Button';

const desktopAboutUsCopy = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat. Duis aute irure dolor in
reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
culpa qui officia deserunt mollit anim id est laborum.`;

const mobileAboutUsCopy = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et doloredeserunt mollit anim id
est laborum.`;

const SectionTwo = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);

    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    });
  }, []);

  const aboutUsCopy =
    width < TABLET_WIDTH ? mobileAboutUsCopy : desktopAboutUsCopy;

  return (
    <Background>
      <AboutSubstratm>
        <TextContainer>
          <StyledTitle>Reason behind SUBSTRATM</StyledTitle>

          <Description>{aboutUsCopy}</Description>
          <Link href="/about">
            <StyledButton>More about us</StyledButton>
          </Link>
        </TextContainer>

        <img src="/unity.svg" />
      </AboutSubstratm>
    </Background>
  );
};

const StyledTitle = styled.h1`
  margin-bottom: 40px;
  font-size: 35px;
  @media (min-width: ${DESKTOP_BREAKPOINT}) {
    width: 56vw;
    font-size: 55px;
  }
`;

const StyledButton = styled(Button)`
  color: #000000;
  font-size: 18px;
  padding: 2px 0px;
  border-bottom: 1px solid;
  border-radius: 0;
`;
const Background = styled.div`
  background: #f2f2f2;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const AboutSubstratm = styled.div`
  width: 100%;
  max-width: 700px;
  padding: 40px;
  margin: 0;

  color: black;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    overflow: hidden;
  }

  @media (min-width: ${DESKTOP_BREAKPOINT}) {
    flex-direction: row;
    max-width: 1500px;

    & > * {
      width: 50%;
    }
    img {
      max-width: 700px;
    }
  }
`;

const Description = styled.p`
  margin-bottom: 25px;
  font-size: 18px;
  color: black;
  opacity: 0.6;

  @media (min-width: ${DESKTOP_BREAKPOINT}) {
    width: 43vw;
    max-width: 760px;
  }
`;

const TextContainer = styled.div`
  z-index: 10000;
  text-align: left;
  margin: 0px;

  p {
    line-height: 150%;
  }

  @media (min-width: ${DESKTOP_BREAKPOINT}) {
    line-height: normal;
  }
`;

export default SectionTwo;
