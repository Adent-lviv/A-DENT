import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  z-index:1000;
  justify-content: center;
  align-items: center;

`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 12px;
  max-width: 500px;
  position:relative;
  width: 80%;
`;
