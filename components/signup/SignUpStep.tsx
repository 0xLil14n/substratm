import React from 'react';
import styled from 'styled-components';
import { TABLET } from '../../utils/breakpoints';
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
      <Step>{children}</Step>
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
  position: absolute;
  bottom: 15px;
  right: 0;
  left: 0;

  text-align: center;
  display: flex;
  justify-content: center;

  button {
    bottom: 20px;
    margin: 5px;
    height: 30px;
    width: 80px;
    border-radius: 2px;
  }
`;
const Step = styled.div`
  height: 100%;
  min-height: 500px;
  @media (min-width: ${TABLET}) {
    height: 100%;
  }
`;
const Container = styled.div`
  position: relative;
  padding: 40px;

  background: ${(props) => props.theme.colors.levelOne};
  h2 {
    text-align: center;
  }
`;

export default SignUpStep;
