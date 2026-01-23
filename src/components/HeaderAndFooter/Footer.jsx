import {
  FooterWrapper,
  FooterTop,
  FooterBottom,
  LogoSection,
  FreeDelivery,
  FooterWrapperLogo,
  FooterWrapperContact,
  ImgPartners,
} from "./styles";
import logo from "../../../public/logo.png";
import { useNavigate } from "react-router-dom";
import partners from "../../../public/partners.png";
import { useSelector } from "react-redux";

export default function Footer() {
  const navigate = useNavigate();
    const managerId = useSelector((state) => state.cart.managerId);

  return (
    <FooterWrapper>
      <FreeDelivery>
        Безкоштовна доставка по Україні при замовленні від 5000 грн
      </FreeDelivery>

      <FooterTop>
        <FooterWrapperLogo>
          <LogoSection onClick={() => navigate(`m/${managerId}`)}>
            <img src={logo} alt="Logo" />
            <h2>A-dent</h2>
            <h5>Dental Shop</h5>
          </LogoSection>
        </FooterWrapperLogo>
        <FooterWrapperContact>
          <ImgPartners src={partners} alt="Logo" />
        </FooterWrapperContact>
      </FooterTop>

      <FooterBottom>© 2025 A-dent.</FooterBottom>
    </FooterWrapper>
  );
}
