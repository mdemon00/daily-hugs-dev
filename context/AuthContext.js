import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [signupSuccess, setSignupSuccess] = useState(false);

  const setSuccess = () => {
    setSignupSuccess(true);
  };

  const resetSuccess = () => {
    setSignupSuccess(false);
  };

  return (
    <AuthContext.Provider value={{ signupSuccess, setSuccess, resetSuccess }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
