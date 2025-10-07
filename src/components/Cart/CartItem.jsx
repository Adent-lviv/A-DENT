import {
  addToCart,
  decreaseQuantity,
  removeFromCart,
} from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import { CartImageWrap, CartProductItem, NameItemsCart } from "./styles";
import { BtnCount } from "../BasicComponents/styles";
import {
  CardBtns,
  CardBtnTrash,
  NewPrice,
  OldPrice,
} from "../ProductCard/styles";
import { FaTrash } from "react-icons/fa";
import { WrapperBase } from "../globalStyles";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  const optimizeImage = (url, width = 600) => {
    if (!url) return url;
    return url.replace("/upload/", `/upload/f_auto,q_auto,w_${width}/`);
  };

  return (
    <CartProductItem key={item.id}>
      <CartImageWrap>
        <img
          src={optimizeImage(item.imageUrl, 250)}
          alt={item.name}
          style={{ width: 150, height: 150, objectFit: "cover" }}
        />
        <NameItemsCart style={{ textAlign: "center" }}>
          {item.name}
        </NameItemsCart>
      </CartImageWrap>

      <CartImageWrap>
        {item.thickness && (
          <p
            style={{
              margin: "0px",
              fontSize: "0.9rem",
              textAlign: "center",

              color: "#555",
            }}
          >
            Товщина: {item.thickness}
          </p>
        )}
        {item.oldPrice ? (
          <WrapperBase>
            <OldPrice style={{ fontSize: "0.8rem" }}>{item.oldPrice}</OldPrice>
            <NewPrice>
              {item.price}
              {item.currency}
            </NewPrice>
          </WrapperBase>
        ) : (
          <NewPrice>
            {item.price} {item.currency}{" "}
          </NewPrice>
        )}
    

        <CardBtns style={{ alignItems: "center", gap: "20px" }}>
          <BtnCount onClick={() => dispatch(decreaseQuantity(item.id))}>
            -
          </BtnCount>
          <span>{item.quantity}</span>
          <BtnCount
            onClick={() => {
              if (item.quantity < 100) {
                dispatch(addToCart({ id: item.id, quantity: 1 }));
              }
            }}
          >
            +
          </BtnCount>
        </CardBtns>
        <CardBtnTrash
          style={{ padding: "0.4em 1em", border: "1.5px solid  var(--accent)" }}
          onClick={() => dispatch(removeFromCart(item.id))}
        >
          <FaTrash size={12} />
        </CardBtnTrash>
      </CartImageWrap>
    </CartProductItem>
  );
}
