import React from 'react';

import SetUpForm from '../components/signup/setUpForm';
import SetUpYourProfile from '../components/signup/setUpYourProfile';

const signUp = () => {
  return (
    <>
      <SetUpYourProfile />
      <SetUpForm />
    </>
  );
};

export default signUp;
