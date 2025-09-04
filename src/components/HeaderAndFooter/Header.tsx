import { Container } from "../globalStyles";
import {
  Address,
  AddressLink,
  DescrLogo,
  HeaderWrapper,
  ImgLogo,
  LogoContainer,
  NameLogo,
  TextLogoContainer,
} from "./styles";
import logo from "../../../public/logo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
   const navigate = useNavigate();
  return (
    <HeaderWrapper>
      <Container style={{ display: "flex", flexDirection: "row" }}>
        <LogoContainer  onClick={() => navigate("/")}>
          <ImgLogo src={logo} alt="Logo" />
          <TextLogoContainer>
          
            <NameLogo>A-dent</NameLogo>
            <DescrLogo>Dental Shop</DescrLogo>
          </TextLogoContainer>
        </LogoContainer>
        
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
