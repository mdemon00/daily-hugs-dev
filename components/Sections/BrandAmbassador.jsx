import Image from "next/image";
import React from "react";
import ThemeButton from "../common/ThemeButton";
import { useRouter } from "next/navigation";

const BrandAmbassador = () => {

  const router = useRouter();

  const handleNextStep = () => {
    router.push("/shop");
  };
  
  return (
    <div className="flex flex-col lg:flex-row-reverse justify-center pb-[40px] lg:pb-0">
      <div className="h-fit w-full max-w-[1000px]">
        <img
          src={"/BrandAmbassador.png"}
          className="relative mx-auto lg:mx-0 object-cover"
          alt="Next.js Logo"
          fill={"true"}
          priority
        />
      </div>
      <div className="px-[30px] lg:pl-[90px] lg:pr-[70px] flex items-center">
        <div>
          <div className="work-sans-400 text-28 md:text-50">
            Become an{" "}
            <strong>
              <em>ambassador!</em>
            </strong>
          </div>

          <div className="my-5 lg:my-[50px] work-sans-400 text-18 md:text-20">
            Our mission is to generate loop of{" "}
            <strong>
              <em>kindness</em>
            </strong>{" "}
            and{" "}
            <strong>
              <em>love</em>
            </strong>{" "}
            through{" "}
            <strong>
              <em>flowers</em>
            </strong>
            .
            <br /> <br />
            Ready to make a difference?
          </div>
          <div className="my-5">
            <ThemeButton title={"LEARN MORE"} onClick={handleNextStep} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandAmbassador;
