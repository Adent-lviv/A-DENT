import { useEffect, useMemo, useRef, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { Container, Divider } from "../globalStyles";
import {
  PdfBtn,
  CategoryNav,
  CategoryNavItem,
  ClickIcon,
  ProductListEL,
  LoadMoreBtn,
} from "./styles";
import ConfirmModal from "../BasicComponents/ConfirmModal";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../api/firebase";

export default function ProductList({ products, onDelete, onEdit }) {
  const [user] = useAuthState(auth);
  const [confirmId, setConfirmId] = useState(null);
const [loading, setLoading] = useState(false);
  const [visibleCount, setVisibleCount] = useState({});
  const categories = useMemo(
    () => [...new Set(products.map((p) => p.category))],
    [products]
  );
  useEffect(() => {
    setVisibleCount(Object.fromEntries(categories.map((cat) => [cat, 8])));
  }, [categories]);

  const handleDeleteConfirmed = async (id) => {
    try {
      await onDelete(id);
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

  const order = ["Шовний матеріал", "Інструменти", "Бори", "Імпланти"];
  const sortedCategories = [...categories].sort(
    (a, b) => order.indexOf(a) - order.indexOf(b)
  );

  // 🔹 один раз формуємо словник товарів по категоріях
  const productsByCategory = sortedCategories.reduce((acc, category) => {
    acc[category] = products.filter((p) => p.category === category);
    return acc;
  }, {});

  return (
    <Container>
      <CategoryNav>
        {sortedCategories.map((category, i) => (
          <CategoryNavItem key={category} onClick={() => handleScroll(i)}>
            {category}
          </CategoryNavItem>
        ))}
      </CategoryNav>

      {sortedCategories.map((category, i) => {
        const filtered = productsByCategory[category];
        const visible = visibleCount[category] ?? 8;

        return (
          <div
            key={category}
            ref={(el) => (categoryRefs.current[i] = el)}
            style={{ marginBottom: 20 }}
          >
            <Divider>{category}</Divider>

            {category === "Бори" && (
              <PdfBtn
                href="https://drive.google.com/file/d/1siwWTWjtmLYP_wa6NXL1FF2ASISbbYlN/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Завантажити повний каталог
                <ClickIcon size={20} />
              </PdfBtn>
            )}

            {category === "Імпланти" && (
              <PdfBtn
                href="https://drive.google.com/file/d/1zCU60ta4Ww55v13IxCzzr9QxEWb75COT/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Завантажити повний каталог
                <ClickIcon size={20} />
              </PdfBtn>
            )}

            <ProductListEL>
              {filtered
                .slice(0, visible)
                .map(
                  ({
                    id,
                    name,
                    description,
                    price,
                    oldPrice,
                    imageUrl,
                    article,
                    inStock,
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

           {visible < filtered.length && (
  <LoadMoreBtn
    onClick={() => {
      setLoading(true);
 
        setVisibleCount((prev) => ({
          ...prev,
          [category]: prev[category] + 8,
        }));
        setLoading(false);
      
    }}
    disabled={loading}
  >
    {loading ? "Завантаження..." : "Показати більше товарів"}
  </LoadMoreBtn>
)}
          </div>
        );
      })}

      <ConfirmModal
        visible={!!confirmId}
        onConfirm={() => handleDeleteConfirmed(confirmId)}
        onCancel={() => setConfirmId(null)}
      />
    </Container>
  );
}
