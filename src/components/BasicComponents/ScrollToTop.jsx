import { useEffect, useState } from "react";
import { FaArrowUp, FaShoppingCart } from "react-icons/fa";
import { ButtonToCartBottom, ButtonToTop } from "./styles";
import { Counter } from "../HeaderAndFooter/styles";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function ScrollButtons() {
  const [visible, setVisible] = useState(false);

  const navigate = useNavigate();
  const managerId = useSelector((state) => state.cart.managerId);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);


  const showCartButton = location.pathname !== `/m/${managerId}/cart` && location.pathname !== `/login`;

  const itemsCount = useSelector((state) =>
    state.cart.items.reduce((acc, item) => acc + item.quantity, 0)
  );
  return (
    <>
      {showCartButton && (
        <ButtonToCartBottom
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            navigate(`m/${managerId}/cart`);
          }}
          $visible={visible}
        >
          <FaShoppingCart size={16} />
          {itemsCount > 0 && <Counter>{itemsCount}</Counter>}
        </ButtonToCartBottom>
      )}
      <ButtonToTop
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        $visible={visible}
      >
        <FaArrowUp size={16} />
      </ButtonToTop>
    </>
  );
}
