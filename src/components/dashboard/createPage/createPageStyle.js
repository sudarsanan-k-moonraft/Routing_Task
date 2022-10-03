import styled from 'styled-components';

export const CreateForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 30%;
  padding: 2rem;
  margin: 0 auto;
  box-shadow: 1px 1px 10px green;
  margin-bottom: 1rem;
  margin-top: 3rem;
  font-family: 'Dm-Serif';
`;

export const InputArea = styled.input`
  padding: 1rem;
  margin: 1rem;
  font-family: 'Lexend';
`;

export const BlogContent = styled.textarea`
  padding: 1rem;
`;
export const Heading = styled.h1`
  font-size: 1rem;
  margin: 0 auto;
`;
export const SubmitButton = styled.button`
  padding: 1rem;
`;

export const ErrorMessage = styled.p`
  color: red;
`;

export const InputAreaCheckBox = styled.input`
  display: flex;
  justify-content: flex-start;
  margin-left: 1rem;
`;

export const CheckBoxWrapper = styled.div`
  display: flex;
  margin: 0.5rem;
`;
