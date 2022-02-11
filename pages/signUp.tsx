import React from 'react';

import SetUpForm from '../components/signup/setUpForm';
import SignUpPage from '../components/signup/signUpPage';

const signUp = () => {
  return (
    <div>
      <SignUpPage />
      <SetUpForm />
    </div>
  );
};

export default signUp;
