import React from 'react';
import styled from 'styled-components';
import { Button } from '../Button';

const SignUpStep = (props: { children: any; className?: string }) => {
  return (
    <Container className={props.className}>
      {props.children}
      <NavButtonContainer>
        <Button variant="outlined" color="primary">
          Skip
        </Button>
        <Button variant="contained" color="primary">
          Next
        </Button>
      </NavButtonContainer>
    </Container>
  );
};
const StyledStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 100px 0px;
`;
const NavButtonContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;

  button {
    margin: 5px;
    height: 30px;
    width: 80px;
    border-radius: 2px;
  }
`;
const Title = styled.h2`
  font-size: 14px;
  margin-bottom: 80px;
`;

const Container = styled.div`
  padding: 40px;
  width: 100%;
  background: ${(props) => props.theme.colors.levelOne};
  h2 {
    text-align: center;
  }
`;

export default SignUpStep;
