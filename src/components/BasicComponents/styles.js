import styled, { keyframes } from "styled-components";

export const ModalContent = styled.div`
  background: white;
  padding: 30px 20px;
  border-radius: 12px;
  text-align: center;
  width: 80%;
  max-width: 350px;
`;

export const Button = styled.button`
  background-color: var(--accent);
  color: white;
  margin: 0 8px;
  padding: 8px 16px;
  border-radius: 8px; 
  font-weight: bold;
  font-size: 14px'
`;
const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-4px);
  }
  60% {
    transform: translateY(-3px);
  }
`;
export const ButtonToTop = styled.button`
  position: fixed;
  bottom: 40px;
  right: 40px;
  background: var(--accent);
  border-radius: 50%;
  padding: 12px 12px 9px 12px;
  cursor: pointer;
  color: var(--main-bg);
  box-shadow: 0 0 15px rgb(82 82 82 / 75%);
  display: ${(props) => (props.$visible ? "block" : "none")};
  opacity: ${(props) => (props.$visible ? 1 : 0)};
  pointer-events: ${(props) => (props.$visible ? "auto" : "none")};

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
  }
  @media (min-width: 768px) {
    padding: 16px 16px 12px 16px;
    bottom: 55px;
    right: 55px;
  }
 svg {
    display: inline-block;
    animation: ${bounce} 1.5s infinite;
  }
`;
