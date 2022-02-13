import React from 'react';
import { useMoralis } from 'react-moralis';
import styled from 'styled-components';

import { MOBILE } from '../../utils/breakpoints';
import StatusIndicator from './sign-up-steps/StatusIndicator';
import StepStatus from './sign-up-steps/StepStatus';

type SetUpStep = { name: string; description: string };

type Props = {
  className?: string;
  setUpSteps: SetUpStep[];
  currentStep: number;
};

const getStepStatus = (
  step: number,
  currentStep: number,
  isAuthenticated: boolean
) => {
  if (step === 0) {
    return isAuthenticated ? StepStatus.Completed : StepStatus.InProgress;
  }
  if (step === currentStep) {
    return StepStatus.InProgress;
  } else if (step < currentStep) {
    return StepStatus.Completed;
  }
  return StepStatus.Incomplete;
};

const SetUpSteps: React.FC<Props> = ({
  className,
  setUpSteps,
  currentStep,
}) => {
  const { isAuthenticated } = useMoralis();
  return (
    <Container id="sign-up-form" className={className}>
      <SetUpTitle>
        <h2>Set up Profile Page</h2>
        <p>It's quick and easy!</p>
      </SetUpTitle>

      <Steps>
        {setUpSteps.map(({ name, description }, index) => (
          <Step key={name}>
            <span>
              <StatusIndicator
                status={getStepStatus(index, currentStep, isAuthenticated)}
              />
            </span>
            <StepTitle>
              <h4>{name}</h4>
              <p>{description}</p>
            </StepTitle>
          </Step>
        ))}
      </Steps>
    </Container>
  );
};

const SetUpTitle = styled.div`
  margin-bottom: 40px;
  h2 {
    font-size: 20px;
    margin: 0px;
    margin-bottom: 5px;
  }
  p {
    font-size: 14px;
    margin-top: 0px;
  }
  @media (min-width: ${MOBILE}) {
    h2 {
      font-size: 25px;
    }
    p {
      font-size: 16px;
    }
  }
`;
const StepTitle = styled.div`
  & > * {
    margin: 0px;
    margin-left: 10px;
    padding-bottom: 5px;
  }
  p {
    font-size: 12px;
    color: #d9d9d9;
  }
`;
const Step = styled.div`
  display: flex;
  margin-bottom: 42px;

  :not(:last-child) span:after {
    content: ' ';
    margin-bottom: 42px;
    border-left: 0.5px solid white;
    margin-left: -12px;
    margin-top: 30px;
    margin-bottom: 20px;
    position: absolute;
    border-radius: 10px;
    height: 40px;
  }

  @media (min-width: ${MOBILE}) {
    margin-bottom: 72px;
    :not(:last-child) span:after {
      height: 70px;
    }
  }
`;

const Steps = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;
const Container = styled.div`
  background: ${(props) => props.theme.colors.primary};
  text-align: center;
  padding: 20px 40px;
`;
export default SetUpSteps;
