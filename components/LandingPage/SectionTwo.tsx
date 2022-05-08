import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { DESKTOP_BREAKPOINT, TABLET_WIDTH } from '../../utils/breakpoints';
import { Button } from '../Button';

export const desktopAboutUsCopy = `SUBSTRATM is an open source platform-agnostic social media network and protocol that allows its users to maintain a permanent and continuous social presence online across long timeframes.

SUBSTRATM enables each user to maintain an on-chain list of subscribed and blocked people, topics, and sites that is maintained independent of and upstream from the content delivery networks it aggregates.

The SUBSTRATM social networking protocol ensures continuity and longevity of user content, and maintains a permanent set of user preferences for outgoing and incoming content to create a precisely curated feed across decades, designed and optimised by each user and built to help online social connections outlast their proprietary social platforms. 
`;

const mobileAboutUsCopy = `SUBSTRATM is an open source platform-agnostic social media network and protocol that allows its users to maintain a permanent and continuous social presence online across long timeframes.`;

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

        <Image src="/unity.svg" alt="unity" width="1000px" height="1000px" />
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
  white-space: pre-line;
  @media (min-width: ${DESKTOP_BREAKPOINT}) {
    width: 43vw;
    max-width: 760px;
  }
`;

const TextContainer = styled.div`
  padding: 25px;
  z-index: 10000;
  text-align: left;
  margin: 0px;

  p {
    line-height: 150%;
  }

  @media (min-width: ${DESKTOP_BREAKPOINT}) {
    line-height: normal;
    padding: 50px;
  }
`;

export default SectionTwo;
