import { useLocation } from "react-router-dom";
import {
  ArticleText,
  CardBtnEdit,
  CardBtns,
  CardBtnTrash,
  CardContent,
  CardDescr,
  CardImage,
  CardImageWrapper,
  CardName,
  CardPrice,
  HeaderCard,
  NewPrice,
  OldPrice,
  ProductCardEl,
  StockOverlay,
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
  inStock,
}) {


    const location = useLocation();
  return (
    <ProductCardEl>
      {imageUrl && (
        <CardImageWrapper>
          <CardImage  $imageUrl={imageUrl}  $inStock={inStock} />
          <StockOverlay  $inStock={inStock}>Немає в наявності</StockOverlay>
        </CardImageWrapper>
      )}

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
        <CardDescr  $page={location.pathname}>{description}</CardDescr>

     {location.pathname === "/home" && (  
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
                    inStock,
                  })
                }
              >
                <FaEdit />
              </CardBtnEdit>
            )}
          </CardBtns>
        )}
      </CardContent>
    </ProductCardEl>
  );
}
