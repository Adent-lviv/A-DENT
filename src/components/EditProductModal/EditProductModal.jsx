import { useMemo } from "react";
import EditProductForm from "./EditForm";

import { CloseButton} from "../globalStyles.js";
import { ModalOverlay, ModalContent } from "./styles";

export default function EditProductModal({ product, onClose, onSubmit, loading  }) {
  
  
  const initialValues = useMemo(
    () => ({
      category: product.category || "",
      name: product.name || "",
      article: product.article || "",
      description: product.description || "",
    price: product.price ? String(product.price).trim() : "",
      oldPrice: product.oldPrice ? String(product.oldPrice).trim() : "",
      imageUrl: product.imageUrl || "",
      file: null,
    }),
    [product] 
  );



  if (!product) return null;
  console.log('initialValues', initialValues)


  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose} size={32} />
        <h3>Редагувати товар</h3>
        <EditProductForm
          initialValues={initialValues}
          onSubmit={onSubmit}
        loading={loading}
        />
      </ModalContent>
    </ModalOverlay>
  );
}
