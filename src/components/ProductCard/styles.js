import styled from "styled-components";

export const ProductCardEl = styled.li`
  border: 1px solid #ccc;
  margin-bottom: 10px;
  padding: 10px;
  max-width: 300px;
  height: 500px;
  border-radius: 12px;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;
export const CardName = styled.h5`
  font-size: 1.1rem;
  margin: 0px;
`;
export const CardDescr = styled.p`
  font-size: 0.8rem;
  max-height: 110px;
  height: 110px;
  overflow-y: auto;
  margin: 0;
  margin-bottom: 10px;

  /* стилізація скролу */
  &::-webkit-scrollbar {
    width: 6px; /* ширина скролу */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888; /* колір повзунка */
    border-radius: 3px; /* округлість */
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555; /* темніший при наведенні */
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1; /* фон доріжки */
    border-radius: 3px;
  }
  scrollbar-width: thin;
  scrollbar-color: #888 #f1f1f1;

  white-space: pre-wrap; /* зберігає перенос рядків */
  word-wrap: break-word; /* переносить довгі слова */
`;
export const CardPrice = styled.p`
  margin-top: 5px;
  margin-bottom: 5px;
`;
export const OldPrice = styled.span`
  text-decoration: line-through;
  color: #888;
  margin-right: 8px;
`;
export const NewPrice = styled.span`
  color: var(--accent);
  font-weight: 600;
`;

export const CardContent = styled.div`
  flex: 1;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const CardBtns = styled.div`
  display: flex;
  gap: 15px;

  justify-content: center;
`;
export const CardBtnTrash = styled.button`
  background-color: transparent;
  color: black;
  border: 1px solid var(--line);
  &:hover {
    background-color: var(--accent);
    color: var(--main-bg);
  }
`;
export const CardBtnEdit = styled.button`
  background-color: var(--main-text);
  &:hover {
    background-color: var(--accent);

    color: var(--main-text);
  }
`;
export const CardImage = styled.div`
  height: 45%;
  min-height: 45%;
  max-height: 45%;
  width: 100%;
  border-radius: 12px;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.imageUrl});
`;
export const HeaderCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;
export const ArticleText = styled.p`
  font-size: 10px;
  font-weight: 500;
  color: gray;
`;
