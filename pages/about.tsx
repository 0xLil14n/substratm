import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

const AboutPage = () => (
  <StyledAbout>
    <Header />
    about substratm
  </StyledAbout>
);

const StyledAbout = styled.div`
  text-align: center;
`;

export default AboutPage;
