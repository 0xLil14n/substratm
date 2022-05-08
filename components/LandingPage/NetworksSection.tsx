import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { TABLET, TABLET_WIDTH } from '../../utils/breakpoints';
import SocialCard from '../SocialCard';

const desktopAboutUsCopy = `A user’s SUBSTRATM NFT contains their personal details, authenticated legacy web social media accounts, photo, and any other information and content they want to share.

The SUBSTRATM NFT also contains a database of every person, topic, and site the user subscribes to, or blocks.

Subscriptions are handled by RSS, aggregating an open source content feed of blogs, news, and social posts via the SUBSTRATM frontend, like a news reader with more functionality and views.`;

const mobileAboutUsCopy = `A user’s SUBSTRATM NFT contains their personal details, authenticated legacy web social media accounts, photo, and any other information and content they want to share.`;

const twitterDescription = `You can verify your legacy Twitter account with the security of Chainlink`;
const comingSoon = `Verification coming soon`;
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
        <SocialCard title="Twitter" description={twitterDescription} />
        <SocialCard title="Facebook" description={comingSoon} />
        <SocialCard title="Instagram" description={comingSoon} />
        <SocialCard title="TikTok" description={comingSoon} />
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
  white-space: pre-line;
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
