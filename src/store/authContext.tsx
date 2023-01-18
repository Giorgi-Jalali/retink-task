import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token: any) => {},
  logout: () => {},
});

export function AuthContextProvider(props: any) {
  const [token, setToken] = useState(null);

  const userIsLoggedIn = !!token;

  const logoutHandler = () => {
    setToken(null);
  };

  const loginHandler = (token: any) => {
    setToken(token);
  };

  const contextValue: any = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
