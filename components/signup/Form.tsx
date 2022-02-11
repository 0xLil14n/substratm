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
const Form = (props: { className?: string }) => {
  return (
    <Container className={props.className}>
      <Title>Social Links</Title>
      <StyledForm>
        {formInputs.map((input) => (
          <FormInput>
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
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 100px;

  & > * {
    width: 45%;
    margin: 5px;
  }
`;
const Container = styled.div`
  border-radius: 0px 10px 10px 0px;
  border-left: 0;
  border-right-radius: 0;
  padding: 40px;
  width: 65%;

  background: ${(props) => props.theme.colors.levelOne};
  h2 {
    text-align: center;
  }
`;

export default Form;
