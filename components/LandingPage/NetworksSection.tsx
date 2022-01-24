import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { TABLET, TABLET_WIDTH } from '../../utils/breakpoints';
import SocialCard from '../SocialCard';

const desktopAboutUsCopy = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat. Duis aute irure dolor in
reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
culpa qui officia deserunt mollit anim id est laborum.`;

const mobileAboutUsCopy = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et doloredeserunt mollit anim id
est laborum.`;

const NetworksSection = () => {
  // TODO consolidate this logic into its own hook
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);

    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    });
  }, []);

  const aboutUsCopy =
    width < TABLET_WIDTH ? mobileAboutUsCopy : desktopAboutUsCopy;

  return (
    <StyledContainer>
      <StyledAbout>
        <StyledTitle>Networks</StyledTitle>
        <Description>{aboutUsCopy}</Description>
      </StyledAbout>
      <Cards>
        <SocialCard title="Twitter" description={mobileAboutUsCopy} />
        <SocialCard title="Facebook" description={mobileAboutUsCopy} />
        <SocialCard title="Instagram" description={mobileAboutUsCopy} />
        <SocialCard title="Twitter" description={mobileAboutUsCopy} />
      </Cards>
    </StyledContainer>
  );
};

const StyledAbout = styled.div`
  @media (min-width: ${TABLET}) {
    width: 30%;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  & > * {
    flex: 1 120px;
    margin: 15px 0;
    min-height: 200px;
    overflow: hidden;
  }

  @media (min-width: ${TABLET}) {
    flex-direction: row;
    flex: 1 240px;
    & > * {
      margin: 20px 15px;
      min-width: 332px;
    }
  }
`;

const StyledTitle = styled.h1`
  margin-bottom: 50px;
  font-size: 42px;
`;

const Description = styled.p`
  color: ${(props) => props.theme.colors.lightGrey};
  line-height: 1.5;
  opacity: 0.7;
  margin-bottom: 50px;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px;

  @media (min-width: ${TABLET}) {
    height: 80vh;
    flex-direction: row;
    & > * {
      flex: 1 100px;
      height: 70%;
    }
  }
`;

export default NetworksSection;
