// ConfirmModal.jsx

import { useEffect } from "react";
import { ModalOverlay } from "../EditProductModal/styles";
import { Button, ModalContent } from "./styles";
import { CardBtnEdit, CardBtnTrash } from "../ProductCard/styles";
import { WrapperBase } from "../globalStyles";

export default function ConfirmModal({ visible, onConfirm, onCancel }) {
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [visible]); 

  
  
  if (!visible) return null;
 
  return (
    <ModalOverlay>
      <ModalContent>
        <h4>Видалити цей товар?</h4>
        <WrapperBase style={{ gap:"20px",justifyContent: "center"}}>
          <CardBtnEdit onClick={onConfirm}>
            Так
          </CardBtnEdit>
          <CardBtnTrash  onClick={onCancel}>
            Ні
          </CardBtnTrash>
        </WrapperBase>
      </ModalContent>
    </ModalOverlay>
  );
}