import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { TABLET_WIDTH } from '../../utils/breakpoints';
import { Button } from '../Button';

const DESKTOP_BREAKPOINT = '800px';

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
    <AboutSubstratm>
      <TextContainer>
        <StyledTitle>Reason behind SUBSTRATM</StyledTitle>

        <Description>{aboutUsCopy}</Description>
        <StyledButton>More about us</StyledButton>
      </TextContainer>
      <ImageContainer>
        <StyledImage src="/unity.svg" />
      </ImageContainer>
    </AboutSubstratm>
  );
};

const IMG_WIDTH = 50; // percentage

const StyledTitle = styled.h1`
  width: 400px;
  margin-bottom: 40px;
  @media (min-width: ${DESKTOP_BREAKPOINT}) {
    width: 56vw;
    font-size: 55px;
  }
`;

const StyledButton = styled(Button)`
  color: #000000;
  padding: 2px 0px;
  border-bottom: 1px solid;
  border-radius: 0;
`;

const AboutSubstratm = styled.div`
  position: relative;

  padding: 20px;
  margin: 0;
  background: #f2f2f2;
  width: 100%;
  height: 160vw;

  color: black;
  display: flex;
  flex-direction: column;
  & > * {
    flex-basis: 25%;
  }
  @media (min-width: ${DESKTOP_BREAKPOINT}) {
    flex-direction: row;
    max-height: 648px;
  }
`;

const Description = styled.p`
  margin-bottom: 25px;

  color: black;
  opacity: 0.6;
  @media (min-width: ${DESKTOP_BREAKPOINT}) {
    // max-width: 576px;
    width: 43vw;
  }
`;

const TextContainer = styled.div`
  z-index: 10000;
  text-align: left;

  p {
    line-height: 150%;
  }

  @media (min-width: ${DESKTOP_BREAKPOINT}) {
    margin: 0px 40px 0px 70px;
    line-height: normal;
  }
`;

const ImageContainer = styled.div`
  position: relative;

  @media (min-width: ${DESKTOP_BREAKPOINT}) {
    position: absolute;
    top: 16%;
    right: 0;
  }
  @media (min-width: 1000px) {
    top: 6%;
  }
`;

const StyledImage = styled.img`
  width: 90vw;
  height: 100%;
  object-fit: cover;

  @media (min-width: ${DESKTOP_BREAKPOINT}) {
    width: ${IMG_WIDTH}vw;
    height: 100%;
  }
`;

export default SectionTwo;
