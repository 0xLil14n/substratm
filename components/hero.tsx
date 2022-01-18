import React from 'react';
import styled from 'styled-components';
import MetamaskLogin from './MetamaskLogin';
import Header from './Header';
import { TABLET } from '../utils/breakpoints';
const Hero = () => (
  <>
    <Header />
    <StyledLandingPage>
      <HeroSection>
        <StyledHalf>
          <StyledImage src="/landingPageImg.svg" />
        </StyledHalf>
        <Styled2ndHalf>
          <TextContainer>
            <h1>SUBSTRATM</h1>
            <h2>You in Blockchain.</h2>
            <Description>
              an open source, platform-agnostic social network protocol
              leveraging blockchain, RSS, ActivityPub enabling a decentralized,
              federated, permanent online presence with full control of your
              social feed a trusted raw data stream with self-curated views free
              of walled gardens and black box moderation
            </Description>
            <MetamaskLogin />
          </TextContainer>
        </Styled2ndHalf>
      </HeroSection>
      <AboutSubstratm>
        <TextContainer>
          <h1>Reason behind SUBSTRATM</h1>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Description>
        </TextContainer>
        <StyledImage src="/unity.svg" />
      </AboutSubstratm>
    </StyledLandingPage>
  </>
);
const AboutSubstratm = styled.div`
  background: #f2f2f2;
  width: 100%;
  height: 110vh;
  color: black;
  display: flex;
  flex-direction: row;
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
    max-width: 720px;
    height: 50%;
    line-height: normal;
  }
`;

const StyledImage = styled.img``;
const StyledLandingPage = styled.div`
  display: flex;
  flex-direction: column;
`;
const HeroSection = styled.div`
  width: 100%;
  height: 110vh;
  display: flex;
  flex-direction: column;
  ${StyledImage} {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (min-width: ${TABLET}) {
    flex-direction: row;
    ${StyledImage} {
      height: 90vh;
      width: 55vw;
      object-fit: revert;
    }
  }
`;

const StyledHalf = styled.div`
  width: 100vw;
  height: 45vh;
  @media (min-width: ${TABLET}) {
    justify-content: flex-start;
    width: 40vw;
    height: 100%;
    max-width: 600px;
    display: flex;
    flex-basis: auto;
    align-items: center;
  }
`;

const Styled2ndHalf = styled.div`
  width: 100%;
  display: flex;
  flex-basis: auto;
  align-items: center;
  justify-content: flex-start;
  background: ${(props) => props.theme.colors.levelOne};
  h1,
  h2 {
    font-size: 36px;
    font-weight: 780;
    margin: 0;
  }
  h2 {
    color: ${(props) => props.theme.colors.darkGrey};
    opacity: 0.5;
  }
  @media (min-width: ${TABLET}) {
    h1,
    h2 {
      font-size: 5vw;
    }
  }
`;
export default Hero;
