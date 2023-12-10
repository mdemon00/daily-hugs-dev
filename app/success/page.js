"use client";

import React, { useEffect, useState } from "react";
import { Box, Heading } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

const Success = () => {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);
  const token = localStorage.getItem("token"); // Replace with your actual storage key
  const userEmail = localStorage.getItem("email");
  const [placeOrderExecuted, setPlaceOrderExecuted] = useState(false);

  // Function to place an order
  const placeOrder = async () => {
    // Assuming you have the JWT token stored somewhere, retrieve it

    // Get the checkout response from localStorage
    const checkoutResponse = JSON.parse(
      localStorage.getItem("checkoutResponse")
    );

    // Check if checkoutResponse is available and not null
    if (checkoutResponse) {
      const orderData = {
        user: {
          name: checkoutResponse.formData["Sender's name"],
          email: userEmail,
        },
        billingAddress: {
          name: checkoutResponse.formData["Sender's name"],
          email: checkoutResponse.formData["Sender's email"],
          district: checkoutResponse.formData["Address line 1"],
          postCode: checkoutResponse.formData["Zip code"],
          // Add any other required fields
        },
        shippingMethod: "Express", // Replace with the actual shipping method if available in checkoutResponse
        paymentMethod: "Credit Card", // Replace with the actual payment method if available in checkoutResponse
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

      try {
        const response = await fetch(
          "http://localhost:9000/api/orders/create",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `${token}`, // Attach the token in the Authorization header
              // Add any other headers as needed
            },
            body: JSON.stringify(orderData),
          }
        );

        const data = await response.json();
        console.log("Order placed successfully:", data);
      } catch (error) {
        console.error("Error placing order:", error);
      }
    } else {
      console.error("No checkout response data found in localStorage");
    }
  };

  useEffect(() => {
    // Check if placeOrder has already been executed
    if (!placeOrderExecuted) {
      // Call the function inside the useEffect
      placeOrder();
      // Set the flag to true to prevent future executions
      setPlaceOrderExecuted(true);
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
  }, []);

  return (
    <Box
      className="flex min-h-screen flex-col items-center justify-between p-24 text-4xl"
      bg="green.500" // Use your desired background color
      color="white" // Use your desired text color
    >
      <Heading textAlign="center" mb={4}>
        Order Completed
      </Heading>
      <p style={{ marginTop: "-0.5rem" }}>
        Redirecting in {countdown} seconds...
      </p>
    </Box>
  );
};

export default Success;
