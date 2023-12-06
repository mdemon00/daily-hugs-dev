// app/providers.jsx
"use client";

import { dailyHugsTheme } from "@/Theme";
import { ModalContextProvider } from "@/context/ModalContext";
import { ChakraProvider } from "@chakra-ui/react";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "app/cart/CartContext";
import { AuthProvider } from "context/AuthContext"; // Import the AuthProvider

function Providers({ children }) {
  return (
    <ChakraProvider theme={dailyHugsTheme}>
      <AuthProvider> {/* Add the AuthProvider */}
        <ModalContextProvider>
          <CartProvider>
            <Toaster
              position={"top-center"}
              reverseOrder={false}
              toastOptions={{
                style: {
                  boxSizing: "border-box",
                  boxShadow: "0px 16px 28px rgba(0, 0, 0, 0.3)",
                },
              }}
            />
            {children}
          </CartProvider>
        </ModalContextProvider>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default Providers;
