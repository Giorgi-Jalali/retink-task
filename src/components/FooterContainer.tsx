import footerLogo from "../assets/retink-logo.svg";

import facebook from "../assets/IconsSocial/facebook.svg";
import twitter from "../assets/IconsSocial/twitter.svg";
import instagram from "../assets/IconsSocial/instagram.svg";
import linkedin from "../assets/IconsSocial/linkedin.svg";
import youtube from "../assets/IconsSocial/youtube.svg";
import pinterest from "../assets/IconsSocial/pinterest.svg";
import styled from "styled-components";

export default function FooterContainer() {
  return (
    <Footer>
      <GrayFooter>
        <LogoContainer>
          <div>
            <FooterLogo />
            <Company>Product by Retink Media UG</Company>
            <Location>Bonn, Germany</Location>
          </div>
          <AccessFeedback>
            <p>Get Early Access</p>
            <p>Provide Feedback</p>
          </AccessFeedback>
        </LogoContainer>
        <IconsContainer>
          <IconsTitle>Connect with Us</IconsTitle>
          <Icons>
            <Facebook />
            <Twitter />
            <Instagram />
            <LinkedIn />
            <YouTube />
            <Pinterest />
          </Icons>
        </IconsContainer>
      </GrayFooter>
      <BlackFooter>
        <PrivacyTerms>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </PrivacyTerms>
        <CopyRight>Copyright © 2021 Retink</CopyRight>
      </BlackFooter>
    </Footer>
  );
}

const Footer = styled.footer`
  margin-top: 116px;
`;

const GrayFooter = styled.div`
  background-color: #d0d0d0;
  color: #131313;
  display: flex;
  flex-direction: column;
  padding: 30px;
  @media (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 73px 143px 87px 63px;
  }
`;

const LogoContainer = styled.div`
  margin-bottom: 15px;

  @media (min-width: 1440px) {
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
`;

const FooterLogo = styled.div`
  background-image: url(${footerLogo});
  background-repeat: no-repeat;
  background-size: cover;
  width: 130px;
  height: 26px;
  margin-bottom: 25px;
  @media (min-width: 1440px) {
    width: 186px;
    height: 38px;
  }
`;

const Company = styled.p`
  @media (min-width: 1440px) {
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    color: #131313;
    margin-top: 56px;
  }
`;

const Location = styled.p`
  @media (min-width: 1440px) {
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    color: #131313;
    margin-top: 6px;
  }
`;

const AccessFeedback = styled.div`
  margin-top: 20px;

  p {
    margin-bottom: 5px;
    cursor: pointer;
  }

  @media (min-width: 1440px) {
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    color: #131313;
    margin-bottom: -7px;
    p {
      margin-bottom: 6px;
      margin-left: 86px;
    }
  }
`;

const IconsContainer = styled.div`
  margin-top: 15px;
`;

const IconsTitle = styled.div`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.0046em;
  margin-bottom: 16px;
  @media (min-width: 1440px) {
    font-size: 24px;
    line-height: 26px;
  }
`;

const Icons = styled.div`
  display: flex;
`;
const IconStyle = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  width: 24px;
  height: 24px;
  margin-right: 12px;
  cursor: pointer;
`;

const Facebook = styled(IconStyle)`
  background-image: url(${facebook});
`;

const Twitter = styled(IconStyle)`
  background-image: url(${twitter});
`;

const Instagram = styled(IconStyle)`
  background-image: url(${instagram});
`;

const LinkedIn = styled(IconStyle)`
  background-image: url(${linkedin});
`;

const YouTube = styled(IconStyle)`
  background-image: url(${youtube});
`;

const Pinterest = styled(IconStyle)`
  background-image: url(${pinterest});
`;

const BlackFooter = styled.div`
  background-color: black;
  color: white;
  padding: 30px;
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
  }
`;

const PrivacyTerms = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  p {
    cursor: pointer;
  }
  @media (min-width: 1440px) {
    gap: 32px;
  }
`;

const CopyRight = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin-top: 20px;
  @media (min-width: 1440px) {
    margin-top: 0;
  }
`;
