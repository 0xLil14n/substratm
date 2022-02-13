import React from 'react';
import styled from 'styled-components';

import MetamaskLogin from '../MetamaskLogin';

const ConnectWalletStep = () => (
  <StyledStep>
    <Title>Connect Wallet</Title>

    <MetamaskLogin />
  </StyledStep>
);

const StyledStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 100px 0px;
`;

const Title = styled.h2`
  font-size: 14px;
  margin-bottom: 80px;
`;

export default ConnectWalletStep;
