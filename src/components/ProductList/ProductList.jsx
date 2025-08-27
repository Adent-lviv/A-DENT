import { useRef } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { Container, Divider } from "../globalStyles";
import { CategoryNav, CategoryNavItem, ProductListEL } from "./styles";

export default function ProductList({ products, onDelete, onEdit }) {
  const categories = [...new Set(products.map((p) => p.category))];


  const categoryRefs = useRef([]);
 const handleScroll = (index) => {
    const el = categoryRefs.current[index];
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Container >
      <CategoryNav>
        {categories.map((category, i) => (
          <CategoryNavItem key={category} onClick={() => handleScroll(i)}>
            {category}
          </CategoryNavItem>
        ))}
      </CategoryNav>

      {categories.map((category, i) => (
        <div key={category}  ref={(el) => (categoryRefs.current[i] = el)} style={{ marginBottom: 20 }}>
          <Divider>{category}</Divider>

          <ProductListEL>
            {products
              .filter((product) => product.category === category)
              .map(({ id, name, description, price, imageUrl, article }) => (
                <ProductCard
                  key={id}
                  category={category}
                  id={id}
                  name={name}
                  description={description}
                  price={price}
                  article={article}
                  imageUrl={imageUrl}
                  onDelete={onDelete}
                  onEdit={onEdit}
                />
              ))}
          </ProductListEL>
        </div>
      ))}
    </Container>
  );
}
