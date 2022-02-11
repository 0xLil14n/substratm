import React from 'react';
import styled from 'styled-components';

const SetUpSteps = (props: { className?: string }) => {
  return (
    <Container className={props.className}>
      <h2>SetUp Profile Page</h2>
    </Container>
  );
};
const Container = styled.div`
  background: ${(props) => props.theme.colors.primary};
`;
export default SetUpSteps;
