import styled from "styled-components";

export const CartProductList = styled.ul`
  display: grid;
  grid-template-columns: 1fr; /* по замовчуванню 1 товар у ряд */
  gap: 20px;
  padding: 0;
  list-style: none;

  @media (min-width: 790px) {
    grid-template-columns: repeat(2, 1fr); /* планшет */
  }



  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr); /* великий екран */
  }
`;

