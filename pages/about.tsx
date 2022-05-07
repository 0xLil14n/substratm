import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import { desktopAboutUsCopy } from '../components/LandingPage/SectionTwo';

const AboutPage = () => (
  <StyledAbout>
    <Header />
    <h1>about substratm</h1>
    <p>{desktopAboutUsCopy}</p>
  </StyledAbout>
);

const StyledAbout = styled.div`
  text-align: center;
  margin: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    text-align: left;
    padding: 20px;
    max-width: 35rem;
    white-space: pre-line;
  }
`;

export default AboutPage;
