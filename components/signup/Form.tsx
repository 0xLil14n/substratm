import React from 'react';
import styled from 'styled-components';
import { Button } from '../Button';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { TABLET } from '../../utils/breakpoints';
import SignUpStep from './SignUpStep';
const formInputs = [
  'Email',
  'Name',
  'City',
  'Phone',
  'Facebook',
  'Fediverse',
  'Twitter',
];

const Form = (props: { className?: string }) => {
  return (
    <>
      <Title>Social Links</Title>
      <StyledForm>
        {formInputs.map((input) => (
          <FormInput key={input.toLowerCase()}>
            <label htmlFor={input.toLowerCase()}>{input}</label>
            <input
              type="text"
              id={input.toLowerCase()}
              name={input.toLowerCase()}
              required
            />
          </FormInput>
        ))}
        <FormInput>
          <label htmlFor={'verifyTwitter'}>&nbsp; </label>
          <ButtonContainer>
            <Button variant="contained" color="primary">
              Verify&nbsp;Twitter
            </Button>

            <CheckCircleIcon color="success" />
          </ButtonContainer>
        </FormInput>
      </StyledForm>
    </>
  );
};
const NavButtonContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;

  button {
    margin: 5px;
    height: 30px;
    width: 80px;
    border-radius: 2px;
  }
`;
const Title = styled.h2`
  font-size: 14px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const FormInput = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

  height: 80px;

  label {
    font-size: 12px;
    padding-bottom: 10px;
  }
  button {
    margin-right: 10px;
    padding: 12px;
  }

  input {
    height: 100%;
    border-radius: 4px;
    border: none;
  }
`;

const StyledForm = styled.form`
  max-width: 800px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 100px;

  & > * {
    width: 45%;
    min-width: 200px;
    margin: 5px;
    @media (min-width: ${TABLET}) {
      width: 45%;
      min-width: 120px;
    }
  }
`;
const Container = styled.div`
  padding: 40px;
  width: 65%;

  background: ${(props) => props.theme.colors.levelOne};
  h2 {
    text-align: center;
  }
`;

export default Form;
