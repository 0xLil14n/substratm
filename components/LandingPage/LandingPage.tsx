import React from 'react';
import styled from 'styled-components';
import Footer from '../footer/Footer';
import NetworksSection from './NetworksSection';

import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';

const LandingPage = () => {
  return (
    <>
      <StyledLandingPage>
        <SectionOne />
        <SectionTwo />
        <NetworksSection />
        {/* <Footer /> */}
      </StyledLandingPage>
    </>
  );
};

const StyledLandingPage = styled.div`
  display: flex;
  flex-direction: column;
`;

export default LandingPage;
