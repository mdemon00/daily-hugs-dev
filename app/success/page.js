"use client";
import React, { useEffect, useState, useRef } from "react";
import { Box, Heading } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

const Success = () => {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);
  const [placeOrderExecuted, setPlaceOrderExecuted] = useState(false);
  const [checkoutRes, setcheckoutRes] = useState(false);
  const initialRender = useRef(true);

  useEffect(() => {
    // Function to place an order
    const placeOrder = async () => {
      try {
        // Check if placeOrder has already been executed
        if (!placeOrderExecuted) {
          // Get necessary data from localStorage
          const token = localStorage.getItem("token");
          const userEmail = localStorage.getItem("email");
          const checkoutResponse = JSON.parse(
            localStorage.getItem("checkoutResponse")
          );

          if (checkoutResponse) setcheckoutRes(true);

          // Check if token is available
          if (!token) {
            console.error("No token found in localStorage");
            return;
          }

          // Check if checkoutResponse is available and not null
          if (checkoutResponse) {
            const orderData = {
              user: {
                name: checkoutResponse.formData["senderName"],
                email: userEmail,
              },
              billingAddress: {
                name: checkoutResponse.formData["senderName"],
                email: checkoutResponse.formData["senderEmail"],
                district: checkoutResponse.formData["senderNumber"],
                postCode: checkoutResponse.formData["zipCode"],
                // Add any other required fields
              },
              shippingMethod: "Express", // Replace with the actual shipping method if available in checkoutResponse
              paymentMethod: "Stripe", // Replace with the actual payment method if available in checkoutResponse
              items: checkoutResponse.cart.map((item) => ({
                productId: item.id,
                name: item.title,
                price: item.discountedPrice,
                qty: item.numOfBoxes,
              })),
            };

            // Add Freshness Protection product if freshnessProtection is true
            if (checkoutResponse.freshnessProtection) {
              const freshnessProtectionProduct = {
                productId: "vfdgdlkj",
                name: "Freshness Protection",
                price: 4.99,
                qty: 1,
              };

              orderData.items.push(freshnessProtectionProduct);
            }

            // Now, orderData contains the dynamic values from localStorage.checkoutResponse
            console.log(orderData);

            const apiUrl =
              process.env.NEXT_PUBLIC_API_URL ||
              "https://d6l3uzhdiv2ze4dep5rse2qiye0jmcat.lambda-url.eu-north-1.on.aws";

            const response = await fetch(`${apiUrl}/api/orders/create`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `${token}`, // Attach the token in the Authorization header
                // Add any other headers as needed
              },
              body: JSON.stringify(orderData),
            });

            const data = await response.json();
            console.log("Order placed successfully:", data);

            // Mark placeOrder as executed to avoid redundant calls
            setPlaceOrderExecuted(true);
          } else {
            console.error("No checkout response data found in localStorage");
          }
        }
      } catch (error) {
        console.error("Error placing order:", error);
      }
    };

    // Check if running in a browser environment before using localStorage
    if (typeof window !== "undefined") {
      placeOrder();
      localStorage.removeItem("checkoutResponse");
    }

    const redirectTimer = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown === 1) {
          router.push("/account");
          clearInterval(redirectTimer);
        }
        return prevCountdown - 1;
      });
    }, 1000);

    return () => clearInterval(redirectTimer);
  }, [placeOrderExecuted]);

  return (
    <Box
      className="flex min-h-screen flex-col items-center justify-between p-24 text-4xl"
      bg="green.500" // Use your desired background color
      color="white" // Use your desired text color
    >
      <Heading textAlign="center" mb={4}>
        {checkoutRes ? "Order Completed" : "Checking..."}
      </Heading>
      <p style={{ marginTop: "-0.5rem" }}>
        Redirecting in {countdown} seconds...
      </p>
    </Box>
  );
};

export default Success;
