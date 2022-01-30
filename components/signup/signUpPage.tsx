import React from 'react';
import styled from 'styled-components';
import { DESKTOP_BREAKPOINT, TABLET } from '../../utils/breakpoints';
import { Button } from '../Button';
import Header from '../Header';

const SignUpPage = () => {
  return (
    <>
      <Header />
      <Container>
        <div>
          <H1>Set up your profile</H1>
          <H1 class="grey">Presence.</H1>
          <Description>
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea{' '}
          </Description>
          <H4>Steps to follow</H4>
          <List>
            <ListItem>Lorem ipsum dolor sit amet, consectetur</ListItem>
            <ListItem>Lorem ipsum dolor sit amet, consectetur</ListItem>
            <ListItem>Lorem ipsum dolor sit amet, consectetur</ListItem>
          </List>
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
const H1 = styled.h1`
  margin: 5px;
  font-size: 55px;
  ${(props) =>
    props.class == 'grey'
      ? `color: ${props.theme.colors.darkGrey}; opacity: 0.7;`
      : ``};
`;
const H4 = styled.h4`
  color: ${(props) => props.theme.colors.darkGrey};
  opacity: 0.7;
`;
const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin: 0;
  margin-bottom: 40px;
`;
const ListItem = styled.li`
  display: flex;
  position: relative;
  margin: 10px 0;
  ::before {
    content: url('arrow-right.svg');
    transform: translatex(-50%);
  }
`;
const Description = styled.p`
  margin-bottom: 25px;
  font-size: 18px;

  @media (min-width: ${DESKTOP_BREAKPOINT}) {
    width: 43vw;
  }
`;
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
  padding: 80px 50px;
  display: flex;
  flex-direction: column;
  & > * {
    flex: 1 1 auto;
  }
  @media (min-width: ${TABLET}) {
    flex-direction: row;
  }
`;

const ImageContainer = styled.div`
  position: relative;

  @media (min-width: ${DESKTOP_BREAKPOINT}) {
    position: absolute;
    top: 16%;
    right: 0;
  }
  @media (min-width: 1100px) {
    top: 4%;
  }
`;

const StyledImage = styled.img`
  width: 90vw;
  height: 90vw;
  object-fit: cover;

  @media (min-width: ${DESKTOP_BREAKPOINT}) {
    width: ${IMG_WIDTH}vw;
    height: ${IMG_WIDTH}vw;
  }
`;
export default SignUpPage;
