import styled from "styled-components";


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
 
export const ButtonToTop = styled.button`
 position: fixed;
  bottom: 20px;
  right: 20px;
  background: var(--accent);
  border-radius: 50%;
  padding: 12px 12px 9px 12px;
  cursor: pointer;
  color:var(--main-bg);
  box-shadow: 0 0 15px rgb(82 82 82 / 75%);
  display : ${(props) => (props.$visible ? "block" : "none")};
  opacity: ${(props) => (props.$visible ? 1 : 0)};
  pointer-events: ${(props) => (props.$visible ? "auto" : "none")};
  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
  }
`;