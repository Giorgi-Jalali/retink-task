import { useState, createContext } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";

import Homepage from "./pages/Homepage";
import SignUpPage from "./pages/SignUpPage";
import ProfilePage from "./pages/ProfilePage";
import { AuthContextProvider } from "./store/authContext";

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

export const MyContext = createContext<Context | null>(null);

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<Homepage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    )
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    alert(`Dear ${name}, we'll send invitation in this email ${email}!`);
    setName("");
    setEmail("");
  };

  const nameChangeHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setName(event.target.value);
  };

  const emailChangeHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setEmail(event.target.value);
  };
  return (
    <AuthContextProvider>
      <MyContext.Provider
        value={{
          name,
          setName,
          email,
          setEmail,
          submitHandler,
          nameChangeHandler,
          emailChangeHandler,
        }}
      >
        <RouterProvider router={router} />
      </MyContext.Provider>
    </AuthContextProvider>
  );
}

export default App;
