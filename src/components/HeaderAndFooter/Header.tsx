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

const Header = () => {
  return (
    <HeaderWrapper>
      <Container style={{ display: "flex", flexDirection: "row" }}>
        <LogoContainer>
          <ImgLogo src="../../../public/logo.png" alt="Logo" />
          <TextLogoContainer>
          
            <NameLogo>A-dent</NameLogo>
            <DescrLogo>Dental Shop</DescrLogo>
          </TextLogoContainer>
        </LogoContainer>
        <Address>
          <AddressLink href="tel:+380931234567">
            +38 (093) 123-45-67
          </AddressLink>
          <AddressLink href="mailto:info@example.com">
            info@example.com
          </AddressLink>
        </Address>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
