
import { useSelector, useDispatch } from "react-redux";
import {
  clearCart,
} from "../../redux/cartSlice";
import { Container, MainTitle, WrapperBase } from "../../components/globalStyles";
import CartItem from "../../components/Cart/CartItem";
import { CartProductList, TotalSum } from "./style";
import { selectTotalPrice } from "../../redux/selectors";
import OrderForm from "../../components/Cart/OrderForm";

export default function CartPage() {

  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector(selectTotalPrice);

  const dispatch = useDispatch();

 

  return (
    <Container>
      <MainTitle style={{margin: "20px auto"}}>Корзина</MainTitle>
      {cartItems.length === 0 ? (
        <MainTitle style={{margin: "20px auto"}}>Корзина порожня</MainTitle>
      
      ) : (
        <WrapperBase style={{flexDirection:"column"}}>
        <CartProductList>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          
        </CartProductList>
        <TotalSum>Загальна сума: {totalPrice} грн</TotalSum>
          <button onClick={() => dispatch(clearCart())}>
            Очистити корзину
          </button>
          <OrderForm />
        </WrapperBase>
      )}
    </Container>
  );
}
