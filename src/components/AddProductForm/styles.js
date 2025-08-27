import { ErrorMessage, Field, Form } from "formik";
import { FiX } from "react-icons/fi";
import styled from "styled-components";
import { fadeIn } from "../globalStyles";

export const StyledForm = styled(Form)`
  width: 100%;
  max-width: 500px;
  margin-bottom: 20px;
  gap: 8px;
  display: flex;
  flex-direction: column;
`;
export const StyledInput = styled(Field)`
  background-color: transparent;
  max-width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 2px solid var(--line);
  border-radius: 8px;
  font-size: 16px;
  color: var(--main-text);
  &::placeholder {
    color: var(--line);
    font-size: 16px;
  }

  &:focus {
    border-color: var(--accent);
    outline: none;
  }
`;

export const StyledSelect = styled.select`
  background-color: transparent;
  width: 100%;
  max-width: 100%;
  color: var(--main-text);
  padding: 10px;
  &::placeholder {
    color: var(--line);
    font-size: 16px;
  }
  font-size: 16px;
  border: 2px solid var(--line);
  border-radius: 8px;

  option {
    width: 100%;
  }
  &:focus {
    border-color: var(--accent);
    outline: none;
  }
`;
export const StyledTextarea = styled.textarea`
  padding: 10px;
  max-width: 100%;
  background-color: transparent;
  font-size: 16px;
  min-height: 80px;
  color: var(--main-text);
  border: 2px solid var(--line);
  &::placeholder {
    color: var(--line);
    font-size: 16px;
  }
  &:focus {
    border-color: var(--accent);
    outline: none;
  }
  resize: vertical;
  border-radius: 8px;
`;
export const StyledError = styled(ErrorMessage)`
  color: var(--red);
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 8px;
`;
export const SubmitButton = styled.button`
  padding: 12px;
  background: var(--main-text);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;

  
 
    transition: transform 0.2s ease, background 0.2s ease;
  animation: ${fadeIn} 0.3s ease forwards;
&:disabled {
    background: #aaa;
    cursor: not-allowed;
  }
  &:hover {
    transform: scale(1.2);
    color: var(--main-bg);
    background: var(--accent); /* змінюємо колір при наведенні */
  }

  &:active {
    transform: scale(0.9);
  }
`;

export const FileInputWrapper = styled.div``;

export const HiddenFileInput = styled.input`
  display: none;
`;

export const StyledLabel = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 5px;

  color: black;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
  padding: 5px 2px;
  &:hover {
    background-color: var(--accent);

    color: var(--main-bg);
  }
`;

export const PreviewWrapper = styled.div`
  position: relative;

  width: fit-content;
`;
export const PreviewImg = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
`;
export const RemoveFileButton = styled(FiX)`
  position: absolute;
  top: -5px;
  right: -5px;
  background: var(--red);
  color: white;
  border-radius: 50%;
  padding: 2px;
  cursor: pointer;
`;
