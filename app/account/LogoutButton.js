// LogoutButton.js
import React from "react";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Clear the token from local storage
    localStorage.removeItem("token");
    localStorage.removeItem("email");

    // Redirect to the login page
    router.replace("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-accent-purple text-white px-4 py-2 rounded-md cursor-pointer"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
