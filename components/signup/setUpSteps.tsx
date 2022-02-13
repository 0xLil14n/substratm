import React, { useState } from 'react';
import styled from 'styled-components';
import AdjustIcon from '@mui/icons-material/Adjust';
import CircleIcon from '@mui/icons-material/Circle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { MOBILE } from '../../utils/breakpoints';

enum StepStatus {
  Completed,
  InProgress,
  Incomplete,
}
const setUpSteps = [
  {
    name: 'Connect Wallet',
    description: 'Connect your wallet to proceed',
    status: StepStatus.Completed,
  },
  {
    name: 'Personal Details',
    description: 'Please provide personal details',
    status: StepStatus.Completed,
  },
  {
    name: 'Social Links',
    description: 'Add your social presence',
    status: StepStatus.InProgress,
  },
  {
    name: 'Ens Registration',
    description: 'Register for .ENS domain name',
    status: StepStatus.Incomplete,
  },
  {
    name: 'Mint your Profile',
    description: 'Preview of NFT to be minted',
    status: StepStatus.Incomplete,
  },
];

type Props = {
  status: StepStatus;
};
const StatusIndicator = ({ status }: Props) => {
  switch (status) {
    case StepStatus.InProgress:
      return <AdjustIcon fontSize="small" />;
    case StepStatus.Completed:
      return <CheckCircleIcon fontSize="small" />;

    default:
      return <CircleIcon fontSize="small" />;
  }
};

const SetUpSteps = (props: { className?: string }) => {
  const [steps, updateSteps] = useState([]);
  return (
    <Container id="sign-up-form" className={props.className}>
      <SetUpTitle>
        <h2>Set up Profile Page</h2>
        <p>It’s quick and easy!</p>
      </SetUpTitle>

      <Steps>
        {setUpSteps.map(({ name, description, status }) => (
          <Step key={name}>
            <span>
              <StatusIndicator status={status} />
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
