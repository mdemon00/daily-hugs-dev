"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import LogoutButton from "./LogoutButton"; // Adjust the path accordingly

const Account = () => {
  const router = useRouter();

  useEffect(() => {
    // Check if the localStorage object is available (in a browser environment)
    if (typeof localStorage !== "undefined") {
      const token = localStorage.getItem("token");

      if (!token) {
        // Redirect to login page if not authenticated
        router.replace("/login"); // Use replace to prevent a history entry
      }
    }
  }, []);

  // If not authenticated, do not render the account
  if (typeof localStorage === "undefined" || !localStorage.getItem("token")) {
    return null;
  }

  // Your account component logic here

  return (
    <div className="flex flex-col justify-between min-h-screen relative">
      <div className="flex-1">
        <div>Your Account Content</div>
      </div>
      <div className="absolute top-0 right-0 m-4">
        <LogoutButton />
      </div>
    </div>
  );
};

export default Account;
