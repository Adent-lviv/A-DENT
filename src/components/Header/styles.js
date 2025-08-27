import styled from "styled-components";
export const HeaderWrapper = styled.div`
  display: flex;
  background-color: var(--accent);
  padding: 15px 0px;
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
  color: var(--main-bg);
  margin: 0px;
  font-size: 1.2rem;
`;
export const DescrLogo = styled.p`
  text-transform: uppercase;
  margin: 0px;
  font-size:0.7rem;
  color: var(--main-bg);    text-align: center;
`;
export const ImgLogo = styled.img`
  max-width: 60px;
`;

export const Address = styled.address`
  display: flex;
  flex-direction: column;    align-items: center;justify-content: center;`;
export const AddressLink = styled.a`
  color: var(--main-bg);
    font-size:0.7rem;
`;
