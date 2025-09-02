import styled from "styled-components";
import { keyframes } from "styled-components";
export const HeaderWrapper = styled.div`
  display: flex;
  background-color:  var(--main-text);
  padding: 15px 0px ;
`;
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const TextLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
`;
export const NameLogo = styled.h1`
  text-transform: uppercase;
  color: var(--accent);
  margin: 0px;
  font-size: 1.4rem;
`;
export const DescrLogo = styled.p`
  text-transform: uppercase;
  margin: 0px;
  font-size: 0.7rem;
  color: var(--main-bg);
  text-align: center;
`;
export const ImgLogo = styled.img`
  max-width: 60px;
`;

export const Address = styled.address`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const AddressLink = styled.a`
  color: var(--main-bg);
  font-size: 0.7rem;
`;



const pulse = keyframes`
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.05); opacity: 0.8; }
  100% { transform: scale(1); opacity: 1; }
`;

export const FooterWrapper = styled.footer`
  background-color: #111;
  color: #fff;
  padding: 50px 20px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FreeDelivery = styled.div`
  background: var(--accent);
  max-width:80%;
  width:auto;
  color: var(--main-bg);
  padding: 8px 16px;
  border-radius: 12px;
  margin-bottom: 30px;
  font-weight: 600;
  font-size: 1.2rem;
  animation: ${pulse} 3s infinite;
  text-align: center;
`;
export const FooterWrapperLogo = styled.div`
  width: auto;
`;
export const FooterWrapperContact = styled.div`
  width: auto;
  display:flex;
      flex-direction: column;
      justify-content: space-around;
`;

export const FooterTop = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;

  margin-bottom: 30px;
`;

export const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 60px;
    margin-bottom: 10px;
  }
  h2 {
    font-size: 2rem;
    font-weight:700;
    text-transform: uppercase;
    margin:0
  } h5 {
   text-transform: uppercase;
    font-size: 1rem;
    font-weight: 300;margin:0
  }
`;

export const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  a {
    margin: 0;
    text-align:center;
    font-size: 0.95rem;
  }
`;

export const SocialSection = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  a {
    color: #fff;
    font-size: 1.3rem;
    transition: transform 0.3s, color 0.3s;
    &:hover {
      transform: rotate(15deg) scale(1.3);
      color: var(--accent);
    }
  }
`;

export const FooterBottom = styled.div`
  border-top: 1px solid #333;
  padding-top: 15px;
  text-align: center;
  font-size: 0.85rem;
  color: #aaa;
`;
