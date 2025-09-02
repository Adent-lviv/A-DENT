// ConfirmModal.jsx

import { useEffect } from "react";
import { ModalOverlay } from "../EditProductModal/styles";
import { Button, ModalContent } from "./styles";

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
        <div style={{ marginTop: 20 }}>
          <Button onClick={onConfirm}>
            Так
          </Button>
          <Button style={{ background: "#1c1c1c" }} onClick={onCancel}>
            Ні
          </Button>
        </div>
      </ModalContent>
    </ModalOverlay>
  );
}