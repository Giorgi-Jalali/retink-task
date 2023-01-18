import { createGlobalStyle } from "styled-components";
import SignUp from "../components/SignUp";

export default function SignUpPage() {
  return (
    <div>
      <GlobalStyle />

      <SignUp />
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
    height: 100vh;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
  }
`;
