import { FiX } from "react-icons/fi";
import styled, { keyframes } from "styled-components";
export const fadeIn = keyframes`
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;
export const Container = styled.div`
  max-width: 320px;
  margin: auto;
  padding: 20px @media (min-width: 481px) {
    max-width: 95%;
  
  }

  @media (min-width: 768px) {
    max-width: 90%;
  
  }
  @media (min-width: 1200px) {
    max-width: 1200px;
  
  }
  @media (min-width: 1440px) {
    max-width: 1400px;
  }
`;

export const ColorButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: var(--accent);
    transition: transform 0.2s ease, background 0.2s ease;
  animation: ${fadeIn} 0.3s ease forwards;
  &:hover {
    transform: scale(1.2);
    background: var(--main-text); /* змінюємо колір при наведенні */
  }

  &:active {
    transform: scale(0.9);
  }
`;
export const CloseButton = styled(FiX)`
  position: absolute;
  top: -10px;
  right: -10px;
  background: var(--main-text);
  color: white;
  border-radius: 50%;
  padding: 4px;
  cursor: pointer;
  transition: transform 0.2s ease, background 0.2s ease;
  animation: ${fadeIn} 0.3s ease forwards;

  &:hover {
    transform: scale(1.2);
    background: var(--accent); /* змінюємо колір при наведенні */
  }

  &:active {
    transform: scale(0.9);
  }
`;
export const MainTitle = styled.h1`
  font-size: 20px;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 30px;
  }
  @media (min-width: 1200px) {
    font-size: 40px;
  }
`;
export const Divider = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 20px 0;
  font-size: 2rem;
  &::before,
  &::after {
    content: "";
    flex: 1;
    border-bottom: 2px solid var(--line);
  }

  &:not(:empty)::before {
    margin-right: 0.75em;
  }
  &:not(:empty)::after {
    margin-left: 0.75em;
  }
`;
export const Title = styled.h1`
  text-align: center;
  color: var(--main-text);
  font-size: 2rem;
`;
export const SubTitle = styled.h3`
  color: var(--accent);
  font-size: 2rem;
`;
export const Error = styled.h3`
  color: #b02323;
  font-size: 10px;
  font-weight: 600;
  margin-bottom: 8px;
`;
export const WrapperBase = styled.div`
  display: flex;
  margin-top: 10px;
  align-items: center;
  justify-content: space-around;
`;
export const LogoutBtn = styled.button`
  color: var(--main-text);
  max-height: fit-content;
  padding: 10px 16px;
  background-color: var(--main-bg);
  border: 2px solid var(--main-text);
`;
