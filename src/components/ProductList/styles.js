import styled from "styled-components";
import { fadeIn } from "../globalStyles";

export const ProductListEL = styled.ul`
  display: flex;

  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  align-items: flex-start;
  list-style: none;
  padding: 0;
`;
export const CategoryNav = styled.div`
  display: flex;
  gap: 10px;
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

  transition: transform 0.2s ease, background 0.2s ease;
  animation: ${fadeIn} 0.3s ease forwards;

  &:hover {
    transform: scale(1.2);
    color: var(--main-bg);
    background: var(--accent); /* змінюємо колір при наведенні */
  }

  &:active {
    transform: scale(0.9);
  }

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;
