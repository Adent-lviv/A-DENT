import AddProduct from "../../components/AddProduct/AddProduct";
import { Container, Title, WrapperBase } from "../../components/globalStyles";
import LogoutButton from "../../components/LogoutButton";

const HomePage = () => {
  return (
    <Container>
      <WrapperBase> <Title>Адмін-панель</Title>
      <LogoutButton /></WrapperBase>
     
      <AddProduct />
    </Container>
  );
};

export default HomePage;
