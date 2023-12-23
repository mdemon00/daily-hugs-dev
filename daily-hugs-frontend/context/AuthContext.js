import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [productPayload, setProductPayload] = useState(null);

  const setSuccess = () => {
    setSignupSuccess(true);
  };

  const resetSuccess = () => {
    setSignupSuccess(false);
  };

  const setProduct = (product) => {
    setProductPayload(product);
  };

  const resetProduct = () => {
    setProductPayload(null);
  };

  return (
    <AuthContext.Provider
      value={{
        signupSuccess,
        setSuccess,
        resetSuccess,
        productPayload,
        setProduct,
        resetProduct,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
