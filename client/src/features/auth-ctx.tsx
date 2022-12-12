import React, { createContext, useState } from "react";

interface AuthType {
  isLoggin: boolean;
  setIsLoggin: React.Dispatch<React.SetStateAction<boolean>>;
  isAuth: boolean;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
  currentUser: {};
  setCurrentUser: React.Dispatch<React.SetStateAction<{}>>;
}

export const AuthCtx = createContext<AuthType>({
  isLoggin: false,
  setIsLoggin: () => {},
  isAuth: false,
  setIsAuth: () => {},
  currentUser: {},
  setCurrentUser: () => {},
});

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoggin, setIsLoggin] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  return (
    <AuthCtx.Provider
      value={{
        isLoggin,
        setIsLoggin,
        isAuth,
        setIsAuth,
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </AuthCtx.Provider>
  );
};

export default AuthProvider;
