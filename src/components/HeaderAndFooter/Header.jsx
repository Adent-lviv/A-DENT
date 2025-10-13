import { Container, WrapperBase } from "../globalStyles";
import {
  Address,
  AddressLink,
  CartButton,
  Counter,
  DescrLogo,
  HeaderWrapper,
  ImgLogo,
  LogoContainer,
  NameLogo,
  TextLogoContainer,
} from "./styles";
import logo from "../../../public/logo.png";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const itemsCount = useSelector((state) =>
    state.cart.items.reduce((acc, item) => acc + item.quantity, 0)
  );
  const managerId = useSelector((state) => state.cart.managerId);


  return (
    <HeaderWrapper>
      <Container style={{ display: "flex", flexDirection: "row" }}>
        <LogoContainer>
          <WrapperBase style={{width:"auto", gap:"15px"}}>
            <ImgLogo onClick={() => navigate(`m/${managerId}`)} src={logo} alt="Logo" />

            <TextLogoContainer onClick={() => navigate(`m/${managerId}`)}>
              <NameLogo>A-dent</NameLogo>
              <DescrLogo>Dental Shop</DescrLogo>
            </TextLogoContainer>
          </WrapperBase>
          <CartButton onClick={() => navigate(`m/${managerId}/cart`)}>
            <FaShoppingCart style={{color:"white"}} size={30} />
            {itemsCount > 0 && <Counter>{itemsCount}</Counter>}
          </CartButton>
        </LogoContainer>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
