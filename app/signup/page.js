"use client";

import ThemeButton from "@/components/common/ThemeButton";
import Image from "next/image";
import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "context/AuthContext";

const Signup = () => {
  const router = useRouter();
  const { setSuccess } = useAuth();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    try {
      const apiUrl =
        process.env.NEXT_PUBLIC_API_URL ||
        "https://d6l3uzhdiv2ze4dep5rse2qiye0jmcat.lambda-url.eu-north-1.on.aws";

      // Make a request to your signup API
      const response = await axios.post(`${apiUrl}/api/register`, formData);
      // Handle the response as needed
      console.log("Signup successful", response.data);

      // Set the signup success status using context
      setSuccess();

      // Redirect to login page
      router.push("/login");
    } catch (error) {
      // Handle errors
      console.error("Signup failed", error);
      setError(
        error.response ? error.response.data.message : "An error occurred"
      );
    }
  };

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
            Signup
          </div>
          <input
            className="text-14 work-sans-500 placeholder:text-accent-grey border-b-[1px] border-accent-purple focus:border-none focus:outline px-2 py-[6px] w-full max-w-[396px] transition duration-300"
            placeholder="First Name"
            type="text"
            name="first_name"
            onChange={handleChange}
          />
          <input
            className="text-14 work-sans-500 placeholder:text-accent-grey border-b-[1px] border-accent-purple focus:border-none focus:outline px-2 py-[6px] w-full max-w-[396px] transition duration-300"
            placeholder="Last Name"
            type="text"
            name="last_name"
            onChange={handleChange}
          />
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
          <input
            className="text-14 work-sans-500 placeholder:text-accent-grey border-b-[1px] border-accent-purple focus:border-none focus:outline px-2 py-[6px] w-full max-w-[396px] transition duration-300"
            placeholder="Confirm password"
            type="password"
            name="confirm_password"
            onChange={handleChange}
          />
          <div className="mt-[900px]">
            <ThemeButton title={"Signup"} onClick={handleSignup} />
          </div>
          <div className="mt-4 mb-4 text-center">
            <p>
              Already have an account?{" "}
              <Link href="/login">
                <span className="text-accent-purple">Login</span>
              </Link>
            </p>
          </div>
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

export default Signup;
