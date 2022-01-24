import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

const AboutPage = () => (
  <StyledAbout>
    <Header />
    <h1>about substratm</h1>
    <p>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat. Duis aute irure dolor in
reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
culpa qui officia deserunt mollit anim id est laborum.`}</p>
  </StyledAbout>
);

const StyledAbout = styled.div`
  text-align: center;
  margin: 30px;
  p {
    text-align: left;
    padding: 30px;
  }
`;

export default AboutPage;
