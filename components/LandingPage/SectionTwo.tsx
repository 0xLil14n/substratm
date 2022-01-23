import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { TABLET, TABLET_WIDTH } from '../../utils/breakpoints';

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
      </TextContainer>
      <StyledImage src="/unity.svg" />
    </AboutSubstratm>
  );
};
const IMG_WIDTH = 35; // percentage
const StyledTitle = styled.h1`
  width: 400px;
`;

const AboutSubstratm = styled.div`
  background: #f2f2f2;
  width: 100%;
  height: 110vh;
  color: black;
  display: flex;
  flex-direction: column;
  @media (min-width: ${TABLET}) {
    flex-direction: row;
  }
`;
const Description = styled.p`
  margin-bottom: 25px;
`;

const TextContainer = styled.div`
  margin: 20px;
  text-align: left;
  height: 100vh;
  p {
    line-height: 150%;
  }
  @media (min-width: ${TABLET}) {
    margin: 0px 40px 0px 70px;
    max-width: 730px;
    height: 50%;
    line-height: normal;
  }
`;

const StyledImage = styled.img`
  flex-basis: ${IMG_WIDTH}%;

  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (min-width: ${TABLET}) {
    width: ${IMG_WIDTH}vw;
    object-fit: revert;
  }
`;
export default SectionTwo;
