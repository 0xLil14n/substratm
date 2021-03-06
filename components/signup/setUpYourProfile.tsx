import React, { useState } from 'react';
import styled from 'styled-components';
import { TABLET, MOBILE } from '../../utils/breakpoints';
import { Button } from '../Button';
import Header from '../Header';
const description = `Your Substratm NFT is a platform-agnostic way for people to find and subscribe to you online. It contains an index of your existing social media profiles, accounts, blog, portfolio… any content you wish to include in your social stack.`;
const steps = [
  'Connect to the dapp with a compatible wallet',
  'Upload a picture and enter personal details—these can be pseudonymous',
  'Enter links to existing social profiles, and where compatible, confirm ownership',
  'Mint an NFT containing this information along with other configurable fields that interact with the SUBSTRATM protocol',
];
const SetUpYourProfile = () => {
  return (
    <>
      <Header />
      <Background>
        <Container>
          <TextContainer>
            <H1>Set up your&nbsp;profile</H1>
            <H1 color="grey">presence.</H1>
            <Description>{description}</Description>
            <H4>Steps to follow</H4>
            <List>
              {steps.map((description) => (
                <ListItem key={description}>{description}</ListItem>
              ))}
            </List>
            <h5>
              Remember: Your wallet key will now be the key to your social
              presence. If you lose access to the wallet you create this NFT
              with, you lose access to your profile too. Don’t lose your keys!
            </h5>
            <a href="#sign-up-form">
              <StyledButton variant="contained" color="primary">
                Get Started
              </StyledButton>
            </a>
          </TextContainer>
          <StyledImage src="/cube.svg" />
        </Container>
      </Background>
    </>
  );
};
const TextContainer = styled.div`
  width: 100%;
  max-width: 500px;
  @media (min-width: ${MOBILE}) {
    max-width: 700px;
    min-width: 500px;
  }
`;
const H1 = styled.h1`
  margin: 5px;

  ${(props) =>
    props.color == 'grey'
      ? `color: ${props.theme.colors.darkGrey}; opacity: 0.7;`
      : ``};

  font-size: 28px;

  @media (min-width: ${MOBILE}) {
    font-size: 55px;
  }
`;
const H4 = styled.h4`
  color: ${(props) => props.theme.colors.darkGrey};
  opacity: 0.9;
  margin-bottom: 10px;
  font-size: 16px;
  @media (min-width: ${MOBILE}) {
    font-size: 22px;
  }
`;
const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0px 0px 40px 0px;
`;
const ListItem = styled.li`
  display: flex;
  position: relative;
  margin: 10px 0;
  font-size: 12px;
  @media (min-width: ${MOBILE}) {
    font-size: 16px;
  }
  ::before {
    content: url('arrow-right.svg');
    transform: translatex(-50%);
  }
`;
const Description = styled.p`
  margin-bottom: 40px;
  font-size: 14px;
  @media (min-width: ${MOBILE}) {
    font-size: 18px;
  }
`;
const StyledButton = styled(Button)`
  height: 40px;
  width: 120px;
  @media (min-width: ${MOBILE}) {
    height: 65px;
    width: 170px;
  }
`;

const Background = styled.div`
  background: ${(props) => props.theme.colors.levelOne};
  height: 100%;
  width: 100%;
  display: flex;
`;
const Container = styled.div`
  width: 100%;

  // background: blue;

  height: 680px;

  padding: 80px 50px 180px 150px;
  padding-left: 50px;
  padding-top: 80px;
  display: flex;
  flex-direction: column;

  img {
    visibility: collapse;
  }
  & > * {
    justify-content: center;
  }
  @media (min-width: 650px) {
    height: 100%;
    flex-direction: row;
    overflow: hidden;
  }
  @media (min-width: ${TABLET}) {
    padding: 100px;
    margin: 0px 20px;

    ${TextContainer} {
      flex: 50%;
    }
    img {
      flex: 50%;
      max-height: 550px;
      max-width: 800px;

      visibility: visible;
    }
  }
`;

const StyledImage = styled.img``;
export default SetUpYourProfile;
