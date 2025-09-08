import { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  query,
  orderBy,
} from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "./firebase";

const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "A-dent");

  const res = await fetch(
    "https://api.cloudinary.com/v1_1/dqeroxhuh/image/upload",
    { method: "POST", body: formData }
  );
  const data = await res.json();
  return data.secure_url;
};

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const q = query(collection(db, "products"), orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      const productsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productsData);
    } catch (err) {
      console.error("Помилка отримання товарів:", err);
      toast.error("Не вдалося завантажити товари");
    } finally {
      setLoading(false);
    }
  };

  console.log("products", products);
  const addProduct = async (values, { resetForm }) => {
    if (!values.file) return toast.warning("Оберіть зображення");
    setLoading(true);
    try {
      const imageUrl = await uploadFile(values.file);
      const { file, ...rest } = values;
      await addDoc(collection(db, "products"), {
        ...rest,
        imageUrl,
        inStock: true,
        createdAt: new Date(),
      });
      toast.success("Товар додано!");
      resetForm();
      fetchProducts();
    } catch (err) {
      console.error("Помилка додавання товару:", err);
      toast.error("Не вдалося додати товар");
    } finally {
      setLoading(false);
    }
  };

  const updateProduct = async (id, values) => {
    setLoading(true);
    try {
      let imageUrl = values.imageUrl;
      if (values.file) imageUrl = await uploadFile(values.file);
      const { file, ...rest } = values;
      await updateDoc(doc(db, "products", id), {
        ...rest,
        imageUrl,
        inStock: values.inStock ?? true,
      });
      toast.success("Товар оновлено!");
      fetchProducts();
    } catch (err) {
      console.error("Помилка оновлення товару:", err);
      toast.error("Не вдалося оновити товар");
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await deleteDoc(doc(db, "products", id));
      fetchProducts();
    } catch (err) {
      console.error("Помилка видалення товару:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return {
    products,
    loading,
    fetchProducts,
    addProduct,
    updateProduct,
    deleteProduct,
  };
};
