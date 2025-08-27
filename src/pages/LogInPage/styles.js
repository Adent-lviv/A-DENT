import { Field } from "formik";
import styled from "styled-components";


export const StyledForm = styled.form`
  display: flex;
  margin-top: 30px;

  flex-direction: column;
  justify-content: center;

  align-items: center;

  `;
export const InputText = styled(Field)`
width: 100%; margin-bottom: 10px; padding: 8px;
max-width: 100%; 
color:var(--main-text)
border:2px solid var(--line);
border-radius:10px;background-color:transparent
`;
