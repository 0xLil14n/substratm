import React from 'react';
import styled from 'styled-components';
type Props = { title: string; description: string };
const SocialCard = ({ title, description }: Props) => (
  <Card>
    <h3>{title}</h3>
    <p>{description}</p>
  </Card>
);
const Card = styled.div`
  padding: 10px 20px;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.levelOne};

  p {
    opacity: 0.7;
    line-height: 150%;
    font-size: 16px;
    text-overflow: ellipsis;
  }
`;
export default SocialCard;
