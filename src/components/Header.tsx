import { useContext, useEffect, useState } from "react";
import { MyContext } from "../App";
import styled from "styled-components";
import { motion } from "framer-motion";
import "../styles/animTextStyle.css";

import { SignUpButton } from "../styles/SignUpButton";
import { NotifyMeButton } from "../styles/NotifyMeButton";

import logo from "../assets/retink-logo.svg";
import avatar from "../assets/retink-avatar.svg";
import { Link } from "react-router-dom";

type Context = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  submitHandler: (event: React.FormEvent<HTMLFormElement>) => void;
  nameChangeHandler: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  emailChangeHandler: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
};

export default function Header() {
  const context = useContext(MyContext) as Context;

  const [x, setX] = useState(0);

  useEffect(() => {
    setX(100);
  }, []);

  return (
    <HeaderContainer>
      <div>
        <Logo />
        <H1>
          Get Advanced AI
          <br />+ Expert Created <span>Logos</span>
        </H1>
        <HeaderParagraph>
          Boost your sales <span>10x faster</span> with content customized by
          our unique partnership of{" "}
          <span>human creativity and AI optimization</span>
        </HeaderParagraph>

        <motion.div
          className="textAnimation"
          animate={{ x }}
          transition={{ type: "spring" }}
        >
          Sign Up For The BETA!
        </motion.div>
        <form onSubmit={context.submitHandler}>
          <SignUpPara>
            <NameEmailInput
              type="text"
              placeholder="Business Name"
              value={context.name}
              required
              onChange={context.nameChangeHandler}
            />
            would like a beta invite sent to{" "}
            <NameEmailInput
              type="email"
              placeholder="@email address"
              value={context.email}
              required
              onChange={context.emailChangeHandler}
            />{" "}
            when it’s ready!
          </SignUpPara>
          <ButtonsDiv>
            <NotifyMeButton type="submit" value="Notify me" />
            <Link to="/signup">
              <SignUpButton>Sign up as a freelance partner</SignUpButton>
            </Link>
          </ButtonsDiv>
        </form>
      </div>
      <Avatar />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  padding: 20px;
  @media (min-width: 1440px) {
    display: flex;
    padding: 70px 70px 70px 166px;
  }
`;

const Logo = styled.div`
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: cover;
  width: 160px;
  height: 33px;
  margin-top: 20px;
  @media (min-width: 1440px) {
    margin-top: 0;
  }
`;

const H1 = styled.h1`
  font-weight: 700;
  font-size: 26px;
  line-height: 150.4%;
  color: #323232;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 40px 0 25px 0;

  @media (min-width: 1440px) {
    font-size: 40px;
    margin: 84px 0 25px 0;
  }

  span {
    font-size: 32px;
    color: #7e1cfe;

    @media (min-width: 1440px) {
      font-size: 45px;
    }
  }
`;

const HeaderParagraph = styled.div`
  font-size: 16px;
  line-height: 24px;
  max-width: 580px;
  span {
    color: #7e1cfe;
    font-weight: 700;
  }
  @media (min-width: 1440px) {
    font-size: 20px;
    line-height: 34px;
  }
`;

const SignUpPara = styled.div`
  font-weight: 500;
  font-size: 15px;
  line-height: 170%;
  color: #323232;
`;

const NameEmailInput = styled.input`
  background: transparent;
  width: 140px;
  font-weight: 600;
  font-size: 15px;
  color: #7e1cfe;
  border: none;
  border-bottom: 1px solid #7e1cfe;
  text-align: center;
  outline: none;
  &::placeholder {
    font-weight: 300;
    font-style: italic;
    color: #7e1cfe;
  }
`;

const ButtonsDiv = styled.div`
  @media (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Avatar = styled.div`
  background-image: url(${avatar});
  background-repeat: no-repeat;
  background-size: contain;
  width: 300px;
  height: 350px;
  margin: 0 auto;
  @media (min-width: 1440px) {
    width: 610px;
    height: 783px;
  }
`;
