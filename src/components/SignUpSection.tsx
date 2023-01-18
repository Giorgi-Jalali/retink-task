import { useContext } from "react";
import { MyContext } from "../App";
import styled from "styled-components";

import { SignUpButton } from "../styles/SignUpButton";
import { Link } from "react-router-dom";
import { NotifyMeButton } from "../styles/NotifyMeButton";

interface Context {
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
}

export default function SignUpSection() {
  const context = useContext(MyContext) as Context;

  return (
    <Container>
      <h3>Sign Up For The BETA to see more</h3>
      <Form onSubmit={context.submitHandler}>
        <InputDiv>
          <BusinessInput
            type="text"
            value={context.name}
            placeholder="Business Name"
            onChange={context.nameChangeHandler}
            required
          />
          <EmailInput
            type="email"
            value={context.email}
            placeholder="Email"
            onChange={context.emailChangeHandler}
            required
          />
        </InputDiv>
        <NotifyMeButton type="submit" value="Notify me" />
      </Form>

      <Link to="/signup">
        <SignUpButton>Sign up as a freelance partner</SignUpButton>
      </Link>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-weight: 600;
    font-size: 20px;
    line-height: 170%;
    color: #7e1cfe;
    margin-bottom: 15px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-around;
    gap: 6px;
  }
`;

const BusinessInput = styled.input`
  width: 288px;
  height: 58px;
  border: 1px solid #754de8;
  border-radius: 20px;
  padding: 12px 30px;
  font-weight: 500;
  line-height: 170%;
  text-align: center;
  color: rgba(117, 77, 232, 0.5);
  outline: none;
  margin: 15px 0;
  &::placeholder {
    color: rgba(117, 77, 232, 0.5);
  }
  @media (min-width: 1440px) {
    font-size: 20px;
  }
`;

const EmailInput = styled.input`
  width: 288px;
  height: 58px;
  border: 1px solid #754de8;
  border-radius: 20px;
  padding: 12px 30px;
  font-weight: 500;
  line-height: 170%;
  text-align: center;
  color: rgba(117, 77, 232, 0.5);
  outline: none;
  &::placeholder {
    color: rgba(117, 77, 232, 0.5);
  }
  @media (min-width: 1440px) {
    font-size: 20px;
  }
`;
