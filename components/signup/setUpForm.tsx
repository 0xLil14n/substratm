import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ethers } from 'ethers';
import SubstratmNFT from './SubstratmNFT_metadata.json';
import Form from './Form';
import SetUpSteps from './setUpSteps';
import { TABLET } from '../../utils/breakpoints';
import ConnectWalletStep from './ConnectWalletStep';
import SignUpStep from './SignUpStep';

const NODE_URL =
  'https://speedy-nodes-nyc.moralis.io/72216de496ff399faf1f925a/avalanche/testnet';

const provider = new ethers.providers.JsonRpcProvider(NODE_URL);

// provider is read-only get a signer for on-chain transactions
const signer = provider.getSigner();
const AVALANCHE_CONTRACT_ADDRESS = '0xb6221879ef1dc32eabd5986e534c46289149770b';
const ABI = SubstratmNFT.output.abi;

const setUpSteps = [
  {
    name: 'Connect Wallet',
    description: 'Connect your wallet to proceed',
    component: <ConnectWalletStep />,
  },
  {
    name: 'Personal Details',
    description: 'Please provide personal details',
    component: <Form />,
  },
  {
    name: 'Social Links',
    description: 'Add your social presence',
    component: <ConnectWalletStep />,
  },
  {
    name: 'Ens Registration',
    description: 'Register for .ENS domain name',
    component: <ConnectWalletStep />,
  },
  {
    name: 'Mint your Profile',
    description: 'Preview of NFT to be minted',
    component: <ConnectWalletStep />,
  },
];

const SetUpForm = () => {
  const [currentStep, updateCurrentStep] = useState(0);
  const [contractName, setContractName] = useState('nothing');

  useEffect(() => {
    const substratmContract = new ethers.Contract(
      AVALANCHE_CONTRACT_ADDRESS,
      ABI,
      provider
    );

    substratmContract.name().then((name: any) => {
      setContractName(name);
    });
  });

  return (
    <Border>
      <Container>
        <StyledSteps setUpSteps={setUpSteps} currentStep={currentStep} />
        <StyledStep
          currentStep={currentStep}
          onBack={() => updateCurrentStep((x) => (x > 0 ? x - 1 : x))}
          onNextStep={() =>
            updateCurrentStep((x) => (x < setUpSteps.length ? x + 1 : x))
          }
        >
          {setUpSteps[currentStep].component}
        </StyledStep>
      </Container>
    </Border>
  );
};

const Border = styled.div`
  border-radius: 10px;
  background: ${(props) => props.theme.colors.darkGrey};
  margin: 40px;
`;
const StyledSteps = styled(SetUpSteps)`
  width: 100%;
  border-radius: 10px 10px 0px 0px;
  @media (min-width: ${TABLET}) {
    width: 40%;
    border-radius: 10px 0px 0px 10px;
  }
`;

const StyledStep = styled(SignUpStep)`
  width: 100%;
  border-radius: 0px 0px 10px 10px;
  @media (min-width: ${TABLET}) {
    width: 500px;
    border-radius: 0px 10px 10px 0px;
  }
`;

const Container = styled.div`
  padding: 1px;

  display: flex;
  flex-direction: column;

  justify-content: center;
  ${StyledSteps}, ${StyledStep} {
    min-width: 300px;
  }
  @media (min-width: ${TABLET}) {
    flex-direction: row;

    ${StyledSteps} {
      max-width: 400px;
    }
  }
`;

export default SetUpForm;
