import { WrapperBase } from "../globalStyles";
import { CardBtns } from "../ProductCard/styles";
import { BtnCount } from "./styles";
import { BtnSendBasket } from "./styles";

export default function BtnToBasket({ count, setCount, handleAddBasket }) {
  return (
    <WrapperBase style={{ justifyContent: "space-between" }}>
      <CardBtns
        style={{
          justifyContent: "flex-start",
          alignItems: "center",
          width: "auto",
        }}
      >
        <BtnCount onClick={() => setCount(Math.max(count - 1, 1))}>-</BtnCount>
        <span>{count}</span>
       <BtnCount onClick={() => setCount(Math.min(count + 1, 100))}>+</BtnCount>
      </CardBtns>
      <BtnSendBasket onClick={() => handleAddBasket(count)}>
        Додати в корзину
      </BtnSendBasket>
    </WrapperBase>
  );
}
