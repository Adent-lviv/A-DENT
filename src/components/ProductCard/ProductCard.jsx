import {
  ArticleText,
  CardBtnEdit,
  CardBtns,
  CardBtnTrash,
  CardContent,
  CardDescr,
  CardImage,
  CardName,
  CardPrice,
  HeaderCard,
  ProductCardEl,
} from "./styles";
import { FaTrash, FaEdit } from "react-icons/fa";

export default function ProductCard({
  id,
  name,
  description,
  price,
  imageUrl,
  onDelete,
  article, onEdit, category
}) {
  return (
    <ProductCardEl>
      {imageUrl && <CardImage imageUrl={imageUrl} />}
      <CardContent>
        <HeaderCard>  <CardName>{name}</CardName>
         <ArticleText >{article}</ArticleText></HeaderCard>
      
        <CardDescr>{description}</CardDescr>
        <CardPrice>
          <b>Ціна:</b> {price}
        </CardPrice>

        <CardBtns>
          {onDelete && (
            <CardBtnTrash onClick={() => onDelete(id)}>
              <FaTrash />
            </CardBtnTrash>
          )}
           {onEdit && (
            <CardBtnEdit onClick={() => onEdit({ id, name, description, price, article, imageUrl,category })}>
              <FaEdit />
            </CardBtnEdit>
          )}
        </CardBtns>
      </CardContent>
    </ProductCardEl>
  );
}
