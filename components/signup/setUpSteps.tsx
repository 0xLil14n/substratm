import React from 'react';
import styled from 'styled-components';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
const setUpSteps = [
  { name: 'Connect Wallet', description: 'Connect your wallet to proceed' },
  { name: 'Personal Details', description: 'Please provide personal details' },
  { name: 'Social Links', description: 'Add your social presence' },
  { name: 'Ens Registration', description: 'Register for .ENS domain name' },
  { name: 'Mint your Profile', description: 'Preview of NFT to be minted' },
];
const SetUpSteps = (props: { className?: string }) => (
  <Container id="sign-up-form" className={props.className}>
    <SetUpTitle>
      <h2>Set up Profile Page</h2>
      <p>It’s quick and easy!</p>
    </SetUpTitle>

    <Steps>
      {setUpSteps.map(({ name, description }) => (
        <Step2>
          <span>
            <CheckCircleIcon fontSize="small" />
          </span>
          <StepTitle2>
            <h4>{name}</h4>
            <p>{description}</p>
          </StepTitle2>
        </Step2>
      ))}
    </Steps>
  </Container>
);
const SetUpTitle = styled.div`
  margin-bottom: 40px;
  h2 {
    font-size: 25px;
    margin: 0px;
    margin-bottom: 5px;
  }
  p {
    margin-top: 0px;
  }
`;
const StepTitle2 = styled.div`
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
const Step2 = styled.div`
  display: flex;
  margin-bottom: 72px;

  :not(:last-child) span:after {
      content: ' ';
      height: 70px;
      border-left: .5px solid white;
      margin-left: -12px;
      margin-top: 30px;
      margin-bottom: 20px;
      position: absolute;
      border-radius: 10px;
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
  border-radius: 10px 0px 0px 10px;
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-right: 0;
`;
export default SetUpSteps;
