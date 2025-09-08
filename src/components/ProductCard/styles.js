import styled from "styled-components";

export const ProductCardEl = styled.li`
  border: 1px solid #ccc;

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
  max-height: 150px;
  height: 100%;
  overflow-y: auto;
  margin: 0;



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

  ${(props) =>
    props.$page === "/home" &&
    `    max-height: 110px;
       margin-bottom: 15px;
    `}

`;
export const CardPrice = styled.p`
  margin-top: 0px;
  margin-bottom: 10px;
    max-height:24px;
  height:100%;
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
  justify-content: flex-start;
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
  color: var(--main-bg);
  &:hover {
    background-color: var(--accent);
    color: var(--main-text);
  }
`;
export const CardImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 45%;
  min-height: 45%;
  max-height: 45%;
  border-radius: 12px;
  overflow: hidden;
`;

export const CardImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.$imageUrl});
  background-size: cover;
  background-position: center;
  filter: ${(props) => (props.$inStock ? "none" : "blur(4px)")};
`;

export const StockOverlay = styled.div`
  display: ${(props) => (props.$inStock ? "none" : "flex")};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 18px;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const HeaderCard = styled.div`
  display: flex;
  align-items: center;
  align-items: flex-start;
  gap: 10px;
  max-height:52px;
  height:100%;
  margin-bottom:15px;
  justify-content: space-between;
`;
export const ArticleText = styled.p`
  font-size: 10px;
  font-weight: 500;
  margin:0;
  margin-top:3px;
  max-width:34px;
   word-wrap: break-word;
  color: gray;
    @media (min-width: 768px) {
    font-size: 12px;
      margin-top:5px;
  }
`;
