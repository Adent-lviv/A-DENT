import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { ButtonToTop } from "./styles";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <ButtonToTop
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      $visible={visible}
    >
      <FaArrowUp size={16} />
    </ButtonToTop>
  );
}
