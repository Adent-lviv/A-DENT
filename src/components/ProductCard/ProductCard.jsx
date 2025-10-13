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
import { toast } from "react-toastify";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import BtnToBasket from "../BasicComponents/BtnToBasket";
import { useState } from "react";
import ThicknessModal from "../BasicComponents/ThicknessModal";

export default function ProductCard({
  id,
  name,
  description,
  price,
  oldPrice,
  imageUrl,
  currency,
  onDelete,
  article,
  onEdit,
  category,
  inStock,
}) {
  const dispatch = useDispatch();
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);
  const [count, setCount] = useState(1);

  const optimizeImage = (url, width = 600) => {
    if (!url) return url;
    return url.replace("/upload/", `/upload/f_auto,q_auto,w_${width}/`);
  };

  const handleAddBasket = (count) => {
    if (category === "Шовний матеріал") {
      setShowModal(true);
      return;
    }

    dispatch(addToCart({ id, name,oldPrice, price, imageUrl, quantity: count,currency }));
    setCount(1);

    toast.success("Товар додано до корзини!");
  };

const handleConfirmThickness = (thickness) => {
  const cartId = `${id}_${thickness}`; 

  dispatch(
    addToCart({
      id: cartId, 
      originalId: id, 
      oldPrice,
      name,
      currency,
      price,
      quantity: count,
      imageUrl,
      thickness,
    })
  );

  setShowModal(false);
  setCount(1);
  toast.success("Товар додано до корзини!");
};

  console.log(currency);
  return (
    <ProductCardEl>
      {imageUrl && (
        <CardImageWrapper>
          <CardImage
            $imageUrl={optimizeImage(imageUrl, 600)}
            $inStock={inStock}
          />
          <StockOverlay $inStock={inStock}>Немає в наявності</StockOverlay>
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
              <NewPrice>
                {price}
                {currency}
              </NewPrice>
            </>
          ) : (
            <NewPrice>{price}    {currency} </NewPrice>
          )}
        </CardPrice>

        <CardDescr $page={location.pathname}>{description}</CardDescr>

        {location.pathname !== "/home" && (
          <BtnToBasket
            count={count}
            setCount={setCount}
            handleAddBasket={handleAddBasket}
          />
        )}

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
                    currency,
                    article,
                    imageUrl,
                    category,
                    inStock,
                    oldPrice,
                  })
                }
              >
                <FaEdit />
              </CardBtnEdit>
            )}
          </CardBtns>
        )}
      </CardContent>
      {showModal && (
        <ThicknessModal
          onClose={() => setShowModal(false)}
          onConfirm={handleConfirmThickness}
        />
      )}
    </ProductCardEl>
  );
}
