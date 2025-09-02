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
export const ToggleWrapper = styled.label`
  position: relative;
  display: flex;
  width: 50px;
  height: 24px;

  p{margin:0;margin-left:50px;    font-size: 16px;
    color: var(--main-text);}
`;

export const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: var(--accent);
  }

  &:checked + span::before {
    transform: translateX(26px);
  }
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--line);
  border-radius: 25px;
  transition: 0.4s;

  &::before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    border-radius: 50%;
    transition: 0.4s;
  }
`;