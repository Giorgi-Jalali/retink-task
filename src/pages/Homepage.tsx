import { createGlobalStyle } from "styled-components";
import MainContainer from "../components/MainContainer";

export default function Homepage() {
  return (
    <div>
      <GlobalStyle />
      <MainContainer />
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    background-color: #F5F5F5;
    width: 100vw;
    font-weight: 400;
    display: flex;
    justify-content: center;
    overflow-x: hidden;
  }
`;
