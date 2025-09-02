import { useRef, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { Container, Divider } from "../globalStyles";
import { CategoryNav, CategoryNavItem, ProductListEL } from "./styles";
import ConfirmModal from "../BasicComponents/ConfirmModal";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../api/firebase";

export default function ProductList({ products, onDelete, onEdit }) {
  const categories = [...new Set(products.map((p) => p.category))];
  const [user] = useAuthState(auth);
  const [confirmId, setConfirmId] = useState(null);

  const handleDeleteConfirmed = async (id) => {
    try {
      await onDelete(id); // твоя функція, яка видаляє з Firebase
      toast.success(" Товар видалено!");
    } catch (err) {
      console.error("Помилка видалення товару:", err);
      toast.error(" Не вдалося видалити товар");
    } finally {
      setConfirmId(null);
    }
  };
  const categoryRefs = useRef([]);
  const handleScroll = (index) => {
    const el = categoryRefs.current[index];
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Container>
      <CategoryNav>
        {categories.map((category, i) => (
          <CategoryNavItem key={category} onClick={() => handleScroll(i)}>
            {category}
          </CategoryNavItem>
        ))}
      </CategoryNav>

      {categories.map((category, i) => (
        <div
          key={category}
          ref={(el) => (categoryRefs.current[i] = el)}
          style={{ marginBottom: 20 }}
        >
          <Divider>{category}</Divider>

          <ProductListEL>
            {products
              .filter((product) => product.category === category)
              .map(
                ({
                  id,
                  name,
                  description,
                  price,
                  oldPrice,
                  imageUrl,
                  article,
                  inStock
                }) => (
                  <ProductCard
                    key={id}
                    category={category}
                    id={id}
                    name={name}
                    description={description}
                    price={price}
                    oldPrice={oldPrice}
                    article={article}
                    inStock={inStock}
                    imageUrl={imageUrl}
                    onDelete={user ? () => setConfirmId(id) : null}
                    onEdit={user ? onEdit : null}
                  />
                )
              )}
          </ProductListEL>
        </div>
      ))}
      <ConfirmModal
        visible={!!confirmId}
        onConfirm={() => handleDeleteConfirmed(confirmId)}
        onCancel={() => setConfirmId(null)}
      />
    </Container>
  );
}
