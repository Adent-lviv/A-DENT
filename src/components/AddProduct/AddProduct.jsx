import { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../api/firebase";

import AddProductForm from "../AddProductForm/AddProductForm";
import ProductList from "../ProductList/ProductList";
import { SubTitle } from "../globalStyles";
import { AddWrapper } from "./styles";
import EditProductModal from "../EditProductModal/EditProductModal";

export default function AddProduct() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null); // товар для редагування
  const [isModalOpen, setIsModalOpen] = useState(false); // відкриття модалки

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      const querySnapshot = await getDocs(collection(db, "products"));
      setProducts(
        querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    } catch (err) {
      console.error("Помилка отримання товарів:", err);
    }
  }

  async function handleAddProduct(values, { resetForm }) {
    if (!values.file) return alert("Оберіть зображення");

    setLoading(true);
    try {
      // Завантаження файлу на Cloudinary
      const formData = new FormData();
      formData.append("file", values.file);
      formData.append("upload_preset", "Dent-ua");

      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dw8udv2vd/image/upload",
        { method: "POST", body: formData }
      );
      const data = await res.json();

      // Додавання товару у Firebase
      await addDoc(collection(db, "products"), {
        name: values.name,
        article: values.article,
        description: values.description,
        price: values.price,
        category: values.category,
        imageUrl: data.secure_url,
      });

      await fetchProducts();
      alert("Товар додано!");
      resetForm();
    } catch (err) {
      console.error("Помилка додавання товару:", err);
      alert("Не вдалось додати товар");
    } finally {
      setLoading(false);
    }
  }

  async function handleDeleteProduct(id) {
    if (!window.confirm("Видалити цей товар?")) return;
    try {
      await deleteDoc(doc(db, "products", id));
      fetchProducts();
    } catch (err) {
      console.error("Помилка видалення товару:", err);
      alert("Не вдалось видалити товар");
    }
  }

  async function handleUpdateProduct(values) {
    console.log("handleUpdateProduct values:", values);
    console.log("values.file present:", !!values.file, values.file);

    
    setLoading(true);
    try {
      const productRef = doc(db, "products", editingProduct.id);

    
  let imageUrl = values.imageUrl;
      if (values.file) {
        const formData = new FormData();
        formData.append("file", values.file);
        formData.append("upload_preset", "Dent-ua");

        const res = await fetch(
          "https://api.cloudinary.com/v1_1/dw8udv2vd/image/upload",
          { method: "POST", body: formData }
        );
        const data = await res.json();
        imageUrl = data.secure_url;
        console.log("Cloudinary response", data);
      }

 let updatedData = {
        name: values.name ?? "",
        article: values.article ?? "",
        description: values.description ?? "",
        price: values.price ? values.price : 0,
   category: values.category ?? "",
   imageUrl,
      };
  console.log("🚀 updatedProduct:", updatedData);
      await updateDoc(productRef, updatedData);
      await fetchProducts();
      alert("Товар оновлено!");
      setEditingProduct(null);
    } catch (err) {
      console.error(err);
      alert("Не вдалося оновити товар");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <AddWrapper>
        <SubTitle>Додати товар</SubTitle>

        <AddProductForm onSubmit={handleAddProduct} loading={loading} />

        <SubTitle>Список товарів</SubTitle>
        {loading && <p>Завантаження...</p>}
        {!loading && products.length === 0 && <p>Товарів поки немає.</p>}

        <ProductList
          onEdit={(product) => {
            setEditingProduct(product);
            setIsModalOpen(true);
          }}
          products={products}
          onDelete={handleDeleteProduct}
        />
      </AddWrapper>
      {isModalOpen && editingProduct && (
        <EditProductModal
          product={editingProduct}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleUpdateProduct} // твоя функція оновлення
        />
      )}
    </>
  );
}
