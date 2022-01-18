import React from 'react';
import styled from 'styled-components';
import MetamaskLogin from './MetamaskLogin';
import Header from './Header';
const Hero = () => (
  <StyledLandingPage>
    <Header />
    <StyledHalf>
      <StyledImage src="/landingPageImg.svg" />
    </StyledHalf>
    <Styled2ndHalf>
      <TextContainer>
        <h1>SUBSTRATM</h1>
        <h2>You in Blockchain.</h2>
        <p>
          an open source, platform-agnostic social network protocol leveraging
          blockchain, RSS, ActivityPub enabling a decentralized, federated,
          permanent online presence with full control of your social feed a
          trusted raw data stream with self-curated views free of walled gardens
          and black box moderation
        </p>
        <MetamaskLogin />
      </TextContainer>
    </Styled2ndHalf>
  </StyledLandingPage>
);

const TextContainer = styled.div`
  margin: 0px 40px 0px 70px;
  text-align: left;
  max-width: 720px;
  height: 50%;
`;
const StyledLandingPage = styled.div`
  width: 100%;
  height: 110vh;
  display: flex;
`;
const LEVEL_1 = '#181823';
const StyledImage = styled.img`
  min-height: 100%;
  min-width: 100%;
`;
const StyledHalf = styled.div`
  height: 100vh;
  flex-basis: 40%;
  max-width: 600px;
  display: flex;
  flex-basis: auto;
  align-items: center;
  justify-content: flex-start;
`;
const LIGHT_GREY = '#DEECF9';
const DARK_GREY = '#C7E0F4';
const Styled2ndHalf = styled.div`
  width: 100%;
  display: flex;
  flex-basis: auto;
  align-items: center;
  justify-content: flex-start;
  background: ${LEVEL_1};
  h1,
  h2 {
    font-size: 76px;
    font-weight: 780;
    margin: 0;
  }
  h2 {
    color: ${DARK_GREY};
    opacity: 0.5;
  }
`;
export default Hero;
