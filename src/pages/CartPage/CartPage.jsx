
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "../../redux/cartSlice";
import { Container } from "../../components/globalStyles";

export default function CartPage() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Container>
      <h1>Корзина</h1>
      {cartItems.length === 0 ? (
        <p>Корзина порожня</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                marginBottom: "15px",
              }}
            >
              <img
                src={item.imageUrl}
                alt={item.name}
                style={{ width: 80, height: 80, objectFit: "cover" }}
              />
              <div style={{ flex: 1 }}>
                <h3>{item.name}</h3>
                <p>Ціна: {item.price} грн</p>
              </div>
              <div>
                <button onClick={() => dispatch(decreaseQuantity(item.id))}>
                  -
                </button>
                <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                <button onClick={() => dispatch(addToCart(item))}>+</button>
              </div>
              <button onClick={() => dispatch(removeFromCart(item.id))}>
                Видалити
              </button>
            </div>
          ))}
          <h2>Загальна сума: {totalPrice} грн</h2>
          <button onClick={() => dispatch(clearCart())}>
            Очистити корзину
          </button>
        </>
      )}
    </Container>
  );
}
