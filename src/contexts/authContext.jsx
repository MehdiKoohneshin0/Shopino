import { createContext, useEffect, useState } from "react";

import * as authService from "./../services/auth.service";

export const AuthContext = createContext();

const authContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const initUser = async () => {
    try {
      const response = await authService.getMe();
      if (response.status === 200) {
        setUser(response.data.user);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    initUser();
  }, []);

  const refreshUser = async () => {
    initUser();
  };

  const value = { user, isLoading, refreshUser };

  return <AuthContext value={value}>{children}</AuthContext>;
};

export default authContextProvider;
