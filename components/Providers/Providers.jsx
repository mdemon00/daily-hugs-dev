// app/providers.tsx
"use client";

import { dailyHugsTheme } from "@/Theme";
import { ModalContextProvider } from "@/context/ModalContext";
import { ChakraProvider } from "@chakra-ui/react";
import { Toaster } from "react-hot-toast";

function Providers({ children }) {
  return (
    <ChakraProvider theme={dailyHugsTheme}>
      <ModalContextProvider>
        {" "}
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
      </ModalContextProvider>
    </ChakraProvider>
  );
}

export default Providers;
