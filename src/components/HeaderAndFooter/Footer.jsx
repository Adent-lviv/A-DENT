
import {
  FooterWrapper,
  FooterTop,
  FooterBottom,
  LogoSection,
  ContactSection,
  SocialSection,
  FreeDelivery,
  FooterWrapperLogo,
  FooterWrapperContact,
  AddressLink,
} from "./styles";
import { FaFacebookF, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import logo from "../../../public/logo.png";

export default function Footer() {
  return (
    <FooterWrapper>
      <FreeDelivery>
        Безкоштовна доставка по Україні при замовленні від 3500 грн
      </FreeDelivery>

      <FooterTop>
        <FooterWrapperLogo>
          <LogoSection>
            <img src={logo} alt="Logo" />
            <h2>A-dent</h2>
            <h5>Dental Shop</h5>
          </LogoSection>
        </FooterWrapperLogo>
        <FooterWrapperContact>
          <ContactSection>
         <AddressLink href="tel:+380931234567">
                    +38 (093) 123-45-67
                  </AddressLink>
                  <AddressLink href="mailto:info@example.com">
                    info@example.com
                  </AddressLink>
          </ContactSection>

          <SocialSection>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a href="https://t.me/username" target="_blank" rel="noopener noreferrer"><FaTelegramPlane /></a>
          </SocialSection>
        </FooterWrapperContact>
      </FooterTop>

      <FooterBottom>© 2025 Adent.</FooterBottom>
    </FooterWrapper>
  );
}
