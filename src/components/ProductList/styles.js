import styled, { keyframes } from "styled-components";
import { FaHandPointer } from "react-icons/fa";


const pulseClick = keyframes`
  0% { transform: translateY(0); }
  25% { transform: translateY(-3px); }
  50% { transform: translateY(0); }
  75% { transform: translateY(-2px); }
  100% { transform: translateY(0); }
`;
const pdfPulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 var(--accent); /* колір можна замінити на var(--accent) */
   transform: scale(1); opacity: 1;
    }
  70% {
    box-shadow: 0 0 15px 5px rgba(255, 90, 95, 0); 
    transform: scale(1.05); opacity: 0.8; 
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 90, 95, 0);
    transform: scale(1); opacity: 1; 
  }
`;


export const ProductListEL = styled.ul`
  display: flex;

  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
  align-items: flex-start;
  list-style: none;
  padding: 0;
`;
export const CategoryNav = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CategoryNavItem = styled.button`
  padding: 6px 12px;
  background: var(--main-bg);
  color: var(--main-text);
  border: 1px solid var(--accent);
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    color: var(--main-bg);
    background: var(--accent);
  }

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
    animation: ${pdfPulse} 3s infinite;
`;

export const PdfBtn = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 auto 10px;
  padding: 6px 12px;
  width: fit-content;
  background-color: transparent;
  border: 2px solid var(--accent);
  border-radius: 12px;
  animation: ${pdfPulse} 3s infinite;
  position: relative;
  transition: transform 1s ease, background 0.2s ease;

  &:hover {
    transform: scale(1.1);
    color: var(--main-bg);
    background: var(--accent);
  }
`;
export const ClickIcon = styled(FaHandPointer)`
  animation: ${pulseClick} 1s infinite;

  position: absolute;
  right: 0px;
  bottom: -10px;
`;
