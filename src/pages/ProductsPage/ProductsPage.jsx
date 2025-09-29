import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../api/firebase";
import ProductList from "../../components/ProductList/ProductList";
import { Container, LoaderWrapper, Title } from "../../components/globalStyles";
import { RiseLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setManagerId } from "../../redux/cartSlice";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { managerId } = useParams();
const dispatch = useDispatch();
  useEffect(() => {
    async function fetchProducts() {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        setProducts(
          querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      } catch (err) {
        console.error("Помилка отримання товарів:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);
 useEffect(() => {
    if (managerId) {
      dispatch(setManagerId(managerId));
    }
  }, [managerId, dispatch]);
  


  return (
    <Container style={{ paddingTop: "50px" }}>

      <Title> Менеджер: <b>{managerId}</b></Title>
      {loading ? (
        <LoaderWrapper>
         
          <RiseLoader color="#ee1c27" size={30} />
        </LoaderWrapper>
      ) : (
        <ProductList products={products}  managerId={managerId} />
      )}
    </Container>
  );
}
