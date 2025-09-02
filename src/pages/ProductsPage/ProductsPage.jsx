import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../api/firebase";
import ProductList from "../../components/ProductList/ProductList";
import { Container, LoaderWrapper } from "../../components/globalStyles";
import { RiseLoader } from "react-spinners";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        setProducts(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      } catch (err) {
        console.error("Помилка отримання товарів:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  return (
    <Container style={{paddingTop:'50px'}}>

      {loading ? <LoaderWrapper> <RiseLoader color="#ee1c27" size={30}/></LoaderWrapper> : <ProductList products={products} />}
    </Container>
  );
}
