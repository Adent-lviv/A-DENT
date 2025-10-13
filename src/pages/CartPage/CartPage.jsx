import { useSelector } from "react-redux";

import {
  Container,
  MainTitle,
  SubTitle,
  WrapperBase,
} from "../../components/globalStyles";
import CartItem from "../../components/Cart/CartItem";
import { CartProductList } from "./style";
import OrderForm from "../../components/Cart/OrderForm";
import { AiOutlineFrown } from "react-icons/ai";

export default function CartPage() {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <Container>
      <MainTitle style={{ margin: "20px auto" }}>Кошик</MainTitle>
      {cartItems.length === 0 ? (
        <WrapperBase style={{ flexDirection: "column" }}>
          <AiOutlineFrown size={44} />
          <SubTitle style={{ textAlign: "center", fontSize: "16px" }}>
            Здається, ваш кошик поки порожній.
            <br />
            Поверніться на головну сторінку та додайте товари для замовлення.
          </SubTitle>
        </WrapperBase>
      ) : (
        <WrapperBase style={{ flexDirection: "column" }}>
          <CartProductList>
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </CartProductList>

          <OrderForm />
        </WrapperBase>
      )}
    </Container>
  );
}
