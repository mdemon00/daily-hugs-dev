"use client";
// Import necessary dependencies
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import LogoutButton from "./LogoutButton"; // Adjust the path accordingly
import { Text } from "@chakra-ui/react";
import OrderList from "./orderList";

const Account = () => {
  const router = useRouter();
  const [orders, setOrders] = useState([]);

  // Function to retrieve all orders
  const getAllOrders = async () => {
    try {
      const token = localStorage.getItem("token");
      const userEmail = localStorage.getItem("email");

      const response = await fetch(
        `http://localhost:9000/api/orders/?email=${userEmail}&sort=createdAt&limit=50&skip=0`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`, // Attach the token in the Authorization header
          },
        }
      );

      const data = await response.json();
      console.log("All Orders:", data);
      return data;
    } catch (error) {
      console.error("Error retrieving orders:", error);
    }
  };

  useEffect(() => {
    // Check if running in a browser environment before using localStorage
    if (typeof window !== "undefined") {
      const fetchOrders = async () => {
        try {
          const token = localStorage.getItem("token");
          if (!token) {
            // Redirect to login page if not authenticated
            router.replace("/login");
            return;
          }

          const data = await getAllOrders();
          setOrders(data);
        } catch (error) {
          console.error("Error fetching orders:", error);
          // Handle error, you might want to set some default value or show an error message
        }
      };

      fetchOrders();
    }
  }, []);

  // If not authenticated, do not render the account
  if (typeof localStorage === "undefined" || !localStorage.getItem("token")) {
    return null;
  }

  return (
    <div className="flex flex-col justify-between min-h-screen relative p-4">
      <div className="flex-1">
        <Text fontSize="3xl" fontWeight="bold" mb={4}>
          Your Orders
        </Text>
        <OrderList orders={orders} />
      </div>
      <div className="absolute top-0 right-0 m-4">
        <LogoutButton />
      </div>
    </div>
  );
};

export default Account;
