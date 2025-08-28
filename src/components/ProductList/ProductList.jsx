import { useRef, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { Container, Divider } from "../globalStyles";
import { CategoryNav, CategoryNavItem, ProductListEL } from "./styles";
import ConfirmModal from "../BasicComponents/ConfirmModal";
import { toast } from "react-toastify";

export default function ProductList({ products, onDelete, onEdit }) {
  const categories = [...new Set(products.map((p) => p.category))];
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
                    imageUrl={imageUrl}
                      onDelete={() => setConfirmId(id)} 
                    onEdit={onEdit}
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
