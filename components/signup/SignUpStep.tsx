import React from 'react';
import styled from 'styled-components';
import { Button } from '../Button';

type Props = {
  className?: string;
  onNextStep: () => void;
  onBack: () => void;
};

const SignUpStep: React.FC<Props> = ({
  children,
  className,
  onNextStep,
  onBack,
}) => {
  return (
    <Container className={className}>
      {children}
      <NavButtonContainer>
        <Button onClick={onBack} variant="outlined" color="primary">
          Back
        </Button>
        <Button onClick={onNextStep} variant="contained" color="primary">
          Next
        </Button>
      </NavButtonContainer>
    </Container>
  );
};

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

const Container = styled.div`
  padding: 40px;
  width: 100%;
  background: ${(props) => props.theme.colors.levelOne};
  h2 {
    text-align: center;
  }
`;

export default SignUpStep;
