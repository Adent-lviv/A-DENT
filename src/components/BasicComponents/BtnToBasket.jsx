import { useState } from "react";
import { WrapperBase } from "../globalStyles";
import { CardBtns } from "../ProductCard/styles";
import { BtnCount } from "./styles";
import { BtnSendBasket } from "./styles";

export default function BtnToBasket({ handleAddBasket }) {
  const [count, setCount] = useState(1);
  const handleAdd = () => {
    handleAddBasket(count);
    setCount(1);
  };

  return (
    <WrapperBase style={{ justifyContent: "space-between"}}>
      <CardBtns
        style={{
          justifyContent: "flex-start",
                  alignItems: "center",
          width:"auto"
        }}
      >
        <BtnCount onClick={() => setCount((prev) => Math.max(prev - 1, 1))}>
          -
        </BtnCount>
        <span>{count}</span>
        <BtnCount onClick={() => setCount((prev) => prev + 1)}>+</BtnCount>
      </CardBtns>
      <BtnSendBasket onClick={handleAdd}>Додати в корзину</BtnSendBasket>
    </WrapperBase>
  );
}
