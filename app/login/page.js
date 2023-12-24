"use client";

import React, { useState, useEffect } from "react";
import ThemeButton from "@/components/common/ThemeButton";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "context/AuthContext";

const Login = () => {
  const router = useRouter();
  const { signupSuccess, resetSuccess } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handleLogin = async () => {
    try {
      const apiUrl =
        process.env.NEXT_PUBLIC_API_URL ||
        "https://d6l3uzhdiv2ze4dep5rse2qiye0jmcat.lambda-url.eu-north-1.on.aws";

      const response = await axios.post(`${apiUrl}/api/login`, formData);

      const { token, email } = response.data;

      // Store the token and email in local storage
      localStorage.setItem("token", token);
      localStorage.setItem("email", email);

      // Redirect to a account or home page
      router.push("/account");
    } catch (error) {
      console.error("Login failed", error);
      setError(
        error.response ? error.response.data.message : "An error occurred"
      );
    }
  };

  useEffect(() => {
    // Display signupSuccess message for 10 seconds
    if (signupSuccess) {
      const timeoutId = setTimeout(() => {
        resetSuccess(); // Reset signupSuccess after 10 seconds
      }, 10000);

      // Clear the timeout when the component unmounts or signupSuccess changes
      return () => clearTimeout(timeoutId);
    }
  }, [signupSuccess, resetSuccess]);

  return (
    <div className="px-6 mb-[50px] lg:mb-[90px] mt-[30px]">
      <div className="flex items-center py-9 xl:py-0 w-full mx-auto md:w-full mx-6 md:mx-auto md:max-w-[60%] shadow-lg border-[1px] border-accent-purple ">
        <Image
          src={"/RomanceDose/Dose_1.png"}
          width={415}
          height={500}
          style={{ maxHeight: 700, objectFit: "cover" }}
          alt="Login"
          className="hidden lg:block"
        />
        <div className="w-full max-w-[406px] px-6 md:px-0 md:mx-[80px] flex flex-col space-y-[30px]">
          <div className="text-30 lg:text-38 text-accent-purple work-sans-500 w-fit">
            Login
          </div>
          <input
            className="text-14 work-sans-500 placeholder:text-accent-grey border-b-[1px] border-accent-purple focus:border-none focus:outline px-2 py-[6px] w-full max-w-[396px] transition duration-300"
            placeholder="Enter email"
            type="email"
            name="email"
            onChange={handleChange}
          />
          <input
            className="text-14 work-sans-500 placeholder:text-accent-grey border-b-[1px] border-accent-purple focus:border-none focus:outline px-2 py-[6px] w-full max-w-[396px] transition duration-300"
            placeholder="Enter password"
            type="password"
            name="password"
            onChange={handleChange}
          />
          <div className="mt-[900px]">
            <ThemeButton title={"Login"} onClick={handleLogin} />
          </div>
          <div className="mt-4 mb-4 text-center">
            <p>
              Don't have an account?{" "}
              <Link href="/signup">
                <span className="text-accent-purple">Signup</span>
              </Link>
            </p>
          </div>
          {signupSuccess && (
            <div className="mt-4 p-4 bg-green-500 text-white rounded-md">
              Signup successful! Please log in.
            </div>
          )}

          {error && (
            <div className="mt-4 p-4 bg-red-500 text-white rounded-md">
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
