import styled from "styled-components";
import Header from "./Header";
import Video from "./Video";
import Cards from "./Cards";
import BusinessCards from "./BusinessCards";

import FooterContainer from "./FooterContainer";
import SignUpSection from "./SignUpSection";

export default function MainContainer() {
  return (
    <MainDiv>
      <Header />
      <Video />
      <Cards />
      <BusinessCards />
      <SignUpSection />
      <FooterContainer />
    </MainDiv>
  );
}

const MainDiv = styled.div`
  width: 375px;

  @media (min-width: 1440px) {
    width: 1440px;
  }
`;
