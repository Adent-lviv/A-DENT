import { useState, useEffect } from "react";
import AddProductForm from "./AddProductForm/AddProductForm";
import ProductList from "../ProductList/ProductList";
import EditProductModal from "../EditProductModal/EditProductModal";
import { SubTitle } from "../globalStyles";
import { AddWrapper } from "./styles";
import { useProducts } from "../../api/useProducts";

export default function AddProduct() {
  const { products, loading, addProduct, updateProduct, deleteProduct } =
    useProducts();
  const [editingProduct, setEditingProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isModalOpen]);

  return (
    <>
      <AddWrapper>
        <SubTitle>Додати товар</SubTitle>
        <AddProductForm onSubmit={addProduct} loading={loading} />

        <SubTitle>Список товарів</SubTitle>
        {loading && <p>Завантаження...</p>}
        {!loading && products.length === 0 && <p>Товарів поки немає.</p>}

        <ProductList
          onEdit={(product) => {
            setEditingProduct(product);
            setIsModalOpen(true);
          }}
          products={products}
          onDelete={deleteProduct}
        />
      </AddWrapper>

      {isModalOpen && editingProduct && (
        <EditProductModal
          product={editingProduct}
          onClose={() => setIsModalOpen(false)}
          onSubmit={async (values) => {
            await updateProduct(editingProduct.id, values);
            setIsModalOpen(false);
          }}
          loading={loading}
        />
      )}
    </>
  );
}
