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
import { toast } from "react-toastify";

import AddProductForm from "./AddProductForm/AddProductForm";
import ProductList from "../ProductList/ProductList";
import { SubTitle } from "../globalStyles";
import { AddWrapper } from "./styles";
import EditProductModal from "../EditProductModal/EditProductModal";

export default function AddProduct() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null); 
  const [isModalOpen, setIsModalOpen] = useState(false); 

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

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
    if (!values.file) return toast.warning("Оберіть зображення");

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
        oldPrice: values.oldPrice,
        price: values.price,
        category: values.category,
        imageUrl: data.secure_url,
        inStock: true,
      });

      await fetchProducts();
      toast.success(" Товар додано!");
      resetForm();
    } catch (err) {
      console.error(" Помилка додавання товару:", err);
      toast.error(" Не вдалося додати товар");
    } finally {
      setLoading(false);
    }
  }

  async function handleDeleteProduct(id) {
    try {
      await deleteDoc(doc(db, "products", id));
      fetchProducts();
    } catch (err) {
      console.error("Помилка видалення товару:", err);
    }
  }

  async function handleUpdateProduct(values) {
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
      }

      const updatedData = {
        name: values.name ?? "",
        article: values.article ?? "",
        description: values.description ?? "",
        price: values.price ? values.price : 0,
        oldPrice: values.oldPrice ? values.oldPrice : 0,
        category: values.category ?? "",
        imageUrl,
        inStock: values.inStock ?? true,
      };

      await updateDoc(productRef, updatedData);
      await fetchProducts();
      toast.success("Товар оновлено!");
      setEditingProduct(null);
      setIsModalOpen(false); // <- закриваємо модалку
    } catch (err) {
      console.error(err);
      toast.error("Не вдалося оновити товар");
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
          onSubmit={handleUpdateProduct}
          loading={loading}
        />
      )}
    </>
  );
}
