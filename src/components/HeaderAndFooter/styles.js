import styled from "styled-components";
import { keyframes } from "styled-components";
export const HeaderWrapper = styled.div`
  display: flex;
  background-color: var(--main-text);
  padding: 15px 0px;
`;
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
      justify-content: center;
      flex-direction: column;
`;
export const TextLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
`;
export const NameLogo = styled.h1`
  font-family: "Exo 2", sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--accent);
  margin: 0px;
  font-size: 2.5rem;
`;
export const DescrLogo = styled.p`
  text-transform: uppercase;
  margin: 0px;
  font-size: 0.7rem;
  color: var(--main-bg);
  text-align: center;
`;
const bounceRotate = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  40% {
    transform: translateY(-8px) rotate(-10deg);
  }
  60% {
    transform: translateY(-7px) rotate(5deg);
  }
`;

export const ImgLogo = styled.img`
  max-width: 40px;
   animation: ${bounceRotate} 2.5s ease infinite;
  transform-origin: center bottom; 
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
  transition: transform 0.3s, color 0.3s;
  &:hover {
    transform: scale(1.1);
    color: var(--accent);
  }
`;

export const pulse = keyframes`
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
  max-width: 80%;
  width: auto;
  color: var(--main-bg);
  padding: 8px 16px;
  border-radius: 12px;
  margin-bottom: 30px;
  font-weight: 600;
  font-size: 1.2rem;
  z-index: 500;
  animation: ${pulse} 3s infinite;
  text-align: center;
`;
export const FooterWrapperLogo = styled.div`
  width: auto;
`;
export const FooterWrapperContact = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const FooterTop = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  gap:50px;

  margin-bottom: 30px;
    @media (min-width: 480px) {
    gap:0px;
  }
`;

export const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  img {
    width: 60px;
    margin-bottom: 10px;
  }
  h2 {
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;
    margin: 0;
    font-family: "Exo 2", sans-serif;
    font-weight: 500;
  }
  h5 {
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 300;
    margin: 0;
  }
`;

export const FooterBottom = styled.div`
  border-top: 1px solid #333;
  padding-top: 15px;
  text-align: center;
  font-size: 0.85rem;
  color: #aaa;
`;
export const ImgPartners = styled.img`
  width: 100%;
  max-width: 250px;
  margin-bottom: 30px;
  @media (min-width: 460px) {
    max-width: 300px;
    margin-bottom: 0px;
  }
`;
