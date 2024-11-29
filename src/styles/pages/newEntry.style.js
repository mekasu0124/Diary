import styled from "styled-components";

export const NewEntryContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-shrink: 0;
  width: 50%;
  height: 50px;
  border: 2px solid var(--bdr);
  border-radius: 10px;
  box-shadow: 5px 5px var(--shadow);
  margin-top: 1rem;
`;

export const FormContainer = styled.form``;

export const FormEntryContainer = styled.div``;

export const FormButtonContainer = styled.div``;

export const FormRow = styled.div``;

export const Title = styled.h1`
  font-family: var(--txtFont);
  font-weight: bold;
  font-style: italic;
  font-size: 1.5rem;
  color: var(--fg);
  letter-spacing: 0.1em;
  word-spacing: 0.1em;
`;

export const FormLabel = styled.label`
  font-family: var(--txtFont);
  font-weight: normal;
  font-style: italic;
  font-size: 1rem;
  color: var(--fg);
  letter-spacing: 0.1em;
  word-spacing: 0.1em;
`;

export const FormInput = styled.input`
  font-family: var(--txtFont);
  font-weight: normal;
  font-style: italic;
  font-size: 1rem;
  color: var(--fg);
  letter-spacing: 0.1em;
  word-spacing: 0.1em;
`;

export const FormTextArea = styled.textarea`
  font-family: var(--txtFont);
  font-weight: normal;
  font-style: italic;
  font-size: 1rem;
  color: var(--fg);
  letter-spacing: 0.1em;
  word-spacing: 0.1em;
`;

export const FormButton = styled.button`
  font-family: var(--txtFont);
  font-weight: normal;
  font-style: italic;
  font-size: 1rem;
  color: var(--fg);
  letter-spacing: 0.1em;
  word-spacing: 0.1em;
`;
