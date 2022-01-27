import React from 'react';
import styled from 'styled-components';
import { Button } from '../components/Button';
import Header from '../components/Header';
import { DESKTOP_BREAKPOINT, TABLET } from '../utils/breakpoints';

const signUp = () => {
  return (
    <>
      <Header />
      <Container>
        <div>
          <h1>Set up your profile</h1>
          <h2>Presence.</h2>
          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea{' '}
          </p>
          <h4>Steps to follow</h4>
          <li>Lorem ipsum dolor sit amet, consectetur</li>
          <li>Lorem ipsum dolor sit amet, consectetur</li>
          <li>Lorem ipsum dolor sit amet, consectetur</li>
          <StyledButton variant="contained" color="primary">
            Get Started
          </StyledButton>
        </div>

        <ImageContainer>
          <StyledImage src="/cube.svg" />
        </ImageContainer>
      </Container>
    </>
  );
};
const StyledButton = styled(Button)`
  height: 40px;
  width: 120px;
  @media (min-width: ${TABLET}) {
    height: 65px;
    width: 170px;
  }
`;
const IMG_WIDTH = 50;
const Container = styled.div`
  background: ${(props) => props.theme.colors.levelOne};
  height: 100%;
  width: 100%;
  padding: 50px;
  display: flex;

  & > * {
    flex: 1 1 auto;
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
    top: 4%;
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
export default signUp;
