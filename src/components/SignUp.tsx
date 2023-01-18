import { useRef, useState, useContext } from "react";
import styled from "styled-components";

import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../store/authContext";

export default function SignUp() {
  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const passwordInputRef = useRef<HTMLInputElement | null>(null);

  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const authModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const navigate = useNavigate();

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current?.value;
    const enteredPassword = passwordInputRef.current?.value;

    setIsLoading(true);

    let url;

    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBTrEbh-OXCGNe3biWW9PQJfHa6e0AdkkQ";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBTrEbh-OXCGNe3biWW9PQJfHa6e0AdkkQ";
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication Failed";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.idToken);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const logoutHandler = () => {
    authCtx.logout();
    navigate("/", { replace: true });
  };

  const toProfilePage = () => {
    navigate("/profile", { replace: true });
  };

  return (
    <SignUpContainer onSubmit={submitHandler}>
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>
      <label htmlFor="email">Your Email</label>
      <Input
        type="email"
        placeholder="email"
        id="email"
        ref={emailInputRef}
        required
      />
      <label htmlFor="password">Your Password</label>
      <Input
        type="password"
        placeholder="password"
        id="password"
        minLength={6}
        ref={passwordInputRef}
        required
      />
      {!isLoading && (
        <Submit type="submit" value={isLogin ? "Login" : "Create Account"} />
      )}
      {isLoading && <p>Sending request...</p>}
      <Link to="/">
        <Homepage>back to Homepage</Homepage>
      </Link>
      <SwitchCreateLogin type="button" onClick={authModeHandler}>
        {isLogin ? "Create new account" : "Login with existing account"}
      </SwitchCreateLogin>
      <NavLinks>
        {isLoggedIn && <Profile onClick={toProfilePage}>Profile</Profile>}
        {isLoggedIn && <LogOut onClick={logoutHandler}>Log Out</LogOut>}
      </NavLinks>
    </SignUpContainer>
  );
}

const SignUpContainer = styled.form`
  background: #5f0c78;
  color: white;
  width: 90vw;
  max-width: 450px;
  height: 520px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;

  h2 {
    margin-bottom: 30px;
  }
`;

const Input = styled.input`
  width: 250px;
  height: 40px;
  text-align: center;
  margin: 20px 0;
  border-radius: 10px;
  outline: none;
`;

const Submit = styled.input`
  background-color: #a112a6;
  color: white;
  font-weight: 600;
  width: 160px;
  height: 35px;
  border-radius: 15px;
  border: none;
  margin-bottom: 20px;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    background-color: #d518db;
    scale: 1.1;
  }
`;

const Homepage = styled.div`
  color: #c095c2;
  font-size: 14px;
  margin-top: 20px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: white;
    scale: 1.2;
  }
`;

const SwitchCreateLogin = styled.button`
  margin-top: 20px;
  background: #458230;
  color: white;
  border: none;
  font-size: 18px;
  padding: 5px 10px;
  border-radius: 15px;
  transition: 0.4s;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

const NavLinks = styled.div`
  width: 320px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
`;

const ButtonStyle = styled.div`
  width: 80px;
  height: 30px;
  text-align: center;
  border-radius: 15px;
  cursor: pointer;
  padding: 5px 0;
  transition: 0.4s;

  &:hover {
    transform: scale(1.1);
  }
`;

const Profile = styled(ButtonStyle)`
  background-color: #596be3;
  color: white;
`;

const LogOut = styled(ButtonStyle)`
  background-color: #f02e68;
`;
