import React from 'react';
import styled from 'styled-components';
import { Button } from '../Button';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
const formInputs = [
  'Email',
  'Name',
  'City',
  'Phone',
  'Facebook',
  'Fediverse',
  'Twitter',
];
const Form = () => {
  return (
    <Container>
      <Title>Social Links</Title>
      <StyledForm>
        {formInputs.map((input) => (
          <FormInput2>
            <label htmlFor={input.toLowerCase()}>{input}</label>
            <input
              type="text"
              id={input.toLowerCase()}
              name={input.toLowerCase()}
              required
            />
          </FormInput2>
        ))}
        <FormInput2>
          <label htmlFor={'verifyTwitter'}>&nbsp; </label>
          <ButtonContainer>
            <Button variant="contained" color="primary">
              Verify&nbsp;Twitter
            </Button>
            <CheckCircleIcon color="success" />
          </ButtonContainer>
        </FormInput2>
      </StyledForm>
      <NavButtonContainer>
        <Button variant="outlined" color="primary">
          Skip
        </Button>
        <Button variant="contained" color="primary">
          Next
        </Button>
      </NavButtonContainer>
    </Container>
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

const TestContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  & > * {
    width: 50%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 80px;
`;

const FormInput2 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

  height: 80px;

  label {
    font-size: 12px;
    padding-bottom: 10px;
  }
  button {
    height: 100%;
    margin-right: 5px;
    padding: 8px;
  }

  input {
    height: 100%;
    border-radius: 4px;
    border: none;
  }
`;

const FormInput = styled.div`
  margin: 15px;
  display: flex;
  flex-direction: column;

  width: 40%;

  label {
    font-size: 12px;
  }
  input {
    height: 100%;
    width: 100%;
    border: none;
    border-radius: 6px;
  }
  button {
    height: 100%;
    margin-right: 10px;
    width: 147px;
  }
`;
const StyledForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 100px;

  & > * {
    width: 50%;
  }
`;
const Container = styled.div`
  border: 1px solid ${(props) => props.theme.colors.darkGrey};
  border-radius: 0px 10px 10px 0px;
  border-left: 0;
  border-right-radius: 0;
  padding: 30px;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.colors.levelOne};
  h2 {
    text-align: center;
  }
`;

export default Form;
