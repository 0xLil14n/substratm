import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MetamaskLogin from '../MetamaskLogin';
import Header from '../Header';
import { TABLET } from '../../utils/breakpoints';
import { Button } from '../Button';

const SectionOne = () => {
  return (
    <StyledContainer>
      <StyledHeader />
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
            <a href="/signUp">
              <SignUpButton variant="contained" color="primary">
                Sign Up
              </SignUpButton>
            </a>
          </TextContainer>
        </Styled2ndHalf>
      </HeroSection>
    </StyledContainer>
  );
};
const SignUpButton = styled(Button)`
  height: 40px;
  width: 120px;
  @media (min-width: ${TABLET}) {
    height: 65px;
    width: 170px;
  }
`;
const IMG_WIDTH = 35; // percentage

const StyledHeader = styled(Header)`
  @media (min-width: ${TABLET}) {
    z-index: 1000;
    position: sticky;
    top: 0;
    background: linear-gradient(
      90deg,
      black ${IMG_WIDTH}vw,
      ${(props) => props.theme.colors.levelOne} 0%
    );
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

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  @media (min-width: ${TABLET}) {
    height: 110vh;
  }
`;
const HeroSection = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;

  @media (min-width: ${TABLET}) {
    flex-direction: row;
  }
`;

const StyledHalf = styled.div`
  width: 100vw;
  height: 45vh;
  @media (min-width: ${TABLET}) {
    justify-content: flex-start;
    width: ${IMG_WIDTH}vw;
    height: 100%;
    // max-width: 600px;
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
export default SectionOne;
