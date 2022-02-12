import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ethers } from 'ethers';
import SubstratmNFT from './SubstratmNFT_metadata.json';
import Form from './Form';
import SetUpSteps from './setUpSteps';
import { MOBILE, TABLET } from '../../utils/breakpoints';

const NODE_URL =
  'https://speedy-nodes-nyc.moralis.io/72216de496ff399faf1f925a/avalanche/testnet';

const provider = new ethers.providers.JsonRpcProvider(NODE_URL);

// provider is read-only get a signer for on-chain transactions
const signer = provider.getSigner();
const AVALANCHE_CONTRACT_ADDRESS = '0xb6221879ef1dc32eabd5986e534c46289149770b';
const ABI = SubstratmNFT.output.abi;

const SetUpForm = () => {
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
        <StyledSteps />
        <StyledForm />
      </Container>
    </Border>
  );
};
const Border = styled.div`
  border-radius: 10px;
  background: ${(props) => props.theme.colors.darkGrey};
  margin: 50px;
  max-width: 1200px;
`;
const StyledSteps = styled(SetUpSteps)`
  border-radius: 10px 10px 0px 0px;
  @media (min-width: ${TABLET}) {
    border-radius: 10px 0px 0px 10px;
  }
`;
const StyledForm = styled(Form)`
  border-radius: 0px 0px 10px 10px;
  @media (min-width: ${TABLET}) {
    border-radius: 0px 10px 10px 0px;
  }
`;

const Container = styled.div`
  padding: 1px;

  display: flex;
  flex-direction: column;

  justify-content: center;
  ${StyledForm},${StyledSteps} {
    width: 100%;
    min-width: 270px;
  }
  @media (min-width: ${TABLET}) {
    flex-direction: row;
    ${StyledForm} {
      // width: 45%;
    }
    ${StyledSteps} {
      // width: 45%;
      max-width: 400px;
    }
  }
`;

export default SetUpForm;
