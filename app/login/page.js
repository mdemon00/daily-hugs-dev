import ThemeButton from "@/components/common/ThemeButton";
import Image from "next/image";
import React from "react";

const Login = () => {
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
            Login/Signup
          </div>
          <input
            className="text-14 work-sans-500 placeholder:text-accent-grey border-b-[1px] border-accent-purple focus:border-none focus:outline px-2 py-[6px] w-full max-w-[396px] transition duration-300"
            placeholder="Enter email"
            type="email"
          />
          <input
            className="text-14 work-sans-500 placeholder:text-accent-grey border-b-[1px] border-accent-purple focus:border-none focus:outline px-2 py-[6px] w-full max-w-[396px] transition duration-300"
            placeholder="Enter password"
            type="Password"
          />
          <div className="mt-[900px]">
            <ThemeButton title={"Login/Signup"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
