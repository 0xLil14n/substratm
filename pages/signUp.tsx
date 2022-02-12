import React from 'react';
import styled from 'styled-components';
import SetUpForm from '../components/signup/setUpForm';
import SetUpYourProfile from '../components/signup/setUpYourProfile';

const signUp = () => {
  return (
    <>
      <SetUpYourProfile />
      <Container>
        <SetUpForm />
      </Container>
    </>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: center;
`;
export default signUp;
