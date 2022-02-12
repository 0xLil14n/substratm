import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ethers } from 'ethers';
import SubstratmNFT from './SubstratmNFT_metadata.json';
import Form from './Form';
import SetUpSteps from './setUpSteps';
import SetUpYourProfile from './setUpYourProfile';
const NODE_URL =
  'https://speedy-nodes-nyc.moralis.io/72216de496ff399faf1f925a/avalanche/testnet';
const provider = new ethers.providers.JsonRpcProvider(NODE_URL);

// provider is read-only get a signer for on-chain transactions
const signer = provider.getSigner();
const CONTRACT_ADDRESS = '0xb6221879ef1dc32eabd5986e534c46289149770b';
const ABI = SubstratmNFT.output.abi;

const SetUpForm = () => {
  const [contractName, setContractName] = useState('nothing');
  useEffect(() => {
    const substratmContract = new ethers.Contract(
      CONTRACT_ADDRESS,
      ABI,
      provider
    );

    substratmContract.name().then((name: any) => {
      setContractName(name);
    });
  });

  return (
    <Container>
      <StyledSteps />
      <StyledForm />
    </Container>
  );
};

const StyledSteps = styled(SetUpSteps)`
  width: 45%;
  width: 400px;
  height: 100vh;
`;
const StyledForm = styled(Form)`
  width: 55%;
  min-width: 400px;
`;

const Container = styled.div`
  // border: 1px solid ${(props) => props.theme.colors.levelOne};

  margin: 50px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
`;

export default SetUpForm;
