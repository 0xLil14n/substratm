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

const StyledImage = styled.img`
  height: 90vh;
  width: 55vw;
`;
const StyledHalf = styled.div`
  flex-basis: 40%;
  width: 40vw;
  max-width: 600px;
  display: flex;
  flex-basis: auto;
  align-items: center;
  justify-content: flex-start;
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
    font-size: 76px;
    font-weight: 780;
    margin: 0;
  }
  h2 {
    color: ${(props) => props.theme.colors.darkGrey};
    opacity: 0.5;
  }
`;
export default Hero;
