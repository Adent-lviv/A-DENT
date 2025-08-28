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
  NewPrice,
  OldPrice,
  ProductCardEl,
} from "./styles";
import { FaTrash, FaEdit } from "react-icons/fa";

export default function ProductCard({
  id,
  name,
  description,
  price,
  oldPrice,
  imageUrl,
  onDelete,
  article,
  onEdit,
  category,
}) {
  return (
    <ProductCardEl>
      {imageUrl && <CardImage imageUrl={imageUrl} />}
      <CardContent>
        <HeaderCard>
          <CardName>{name}</CardName>
          <ArticleText>{article}</ArticleText>
        </HeaderCard>
        <CardPrice>
          <b>Ціна: </b>
          {oldPrice ? (
            <>
              <OldPrice>{oldPrice}</OldPrice>
              <NewPrice>{price}</NewPrice>
            </>
          ) : (
            <NewPrice>{price} </NewPrice>
          )}
        </CardPrice>
        <CardDescr>{description}</CardDescr>

        <CardBtns>
          {onDelete && (
            <CardBtnTrash onClick={() => onDelete(id)}>
              <FaTrash />
            </CardBtnTrash>
          )}
          {onEdit && (
            <CardBtnEdit
              onClick={() =>
                onEdit({
                  id,
                  name,
                  description,
                  price,
                  article,
                  imageUrl,
                  category,
                })
              }
            >
              <FaEdit />
            </CardBtnEdit>
          )}
        </CardBtns>
      </CardContent>
    </ProductCardEl>
  );
}
