import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ethers } from 'ethers';
import SubstratmNFT from './SubstratmNFT_metadata.json';
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
      console.log('contract name:', name);
      setContractName(name);
    });
  });

  console.log('contract name??', contractName);
  return <StyledForm>form contract name:{contractName}</StyledForm>;
};
const StyledForm = styled.div`
  margin: 50px;
`;
export default SetUpForm;
