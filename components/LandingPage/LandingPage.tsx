import React from 'react';
import styled from 'styled-components';

import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';

const LandingPage = () => {
  return (
    <StyledLandingPage>
      <SectionOne />
      <SectionTwo />
    </StyledLandingPage>
  );
};

const StyledLandingPage = styled.div`
  display: flex;
  flex-direction: column;
`;

export default LandingPage;
