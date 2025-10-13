import { Form } from "formik";
import styled from "styled-components";

export const CartProductItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  border: 1px solid #ccc;
  padding: 10px;

  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  border-radius: 12px;
`;
export const CartImageWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  max-width: 160px;
`;

export const NameItemsCart = styled.h3`
  margin: 0px;
  font-size: 1rem;
  display: -webkit-box;

  /* fallback: обрізає в один рядок */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  /* багаторядковий clamp */
  -webkit-line-clamp: 2; /* максимум 2 рядки */
  -webkit-box-orient: vertical;
  white-space: normal;
`;



export const WrapperInput = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const StyledLabel = styled.label`
  font-weight: 600;
`;

export const StyledFormOrder = styled(Form)`
  max-width: 700px;
  margin: 0 auto 20px auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin-bottom: 50px;
  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }


  input,
  textArea {
    width: 100%;
  }
  button {
    margin-top: 10px;
    padding: 15px 20px;
    background: #222;

width: 100%;
    border-radius: 8px;
grid-column: 1 / -1;
}
   


  }
`;

export const TotalSum = styled.h3`
  text-align: center;
`;
