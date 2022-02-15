import React from 'react';
import styled from 'styled-components';
import { Button } from '../Button';

type Props = {
  className?: string;
  currentStep: number;
  onNextStep: () => void;
  onBack: () => void;
};

const SignUpStep: React.FC<Props> = ({
  children,
  className,
  currentStep,
  onNextStep,
  onBack,
}) => {
  return (
    <Container className={className}>
      {children}
      <NavButtonContainer>
        {currentStep !== 0 && (
          <Button onClick={onBack} variant="outlined" color="primary">
            Back
          </Button>
        )}
        <Button onClick={onNextStep} variant="contained" color="primary">
          Next
        </Button>
      </NavButtonContainer>
    </Container>
  );
};

const NavButtonContainer = styled.div`
  // position: absolute;
  // bottom: 0;
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

  background: ${(props) => props.theme.colors.levelOne};
  h2 {
    text-align: center;
  }
`;

export default SignUpStep;
