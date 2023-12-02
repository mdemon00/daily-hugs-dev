import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div>
      <div className="relative min-h-screen min-w-screen mt-[-100px]">
        <Image
          src={"/HeroSectionBg.png"}
          fill={"true"}
          style={{
            objectFit: "cover",
            backgroundPosition: "start",
            borderRadius: "0px",
            overflow: "hidden",
          }}
          className="relative object-top hidden md:block"
          alt="Hero section cover"
        />

        <Image
          src={"/HeroSectionMobile_1.png"}
          fill={"true"}
          style={{
            objectFit: "cover",
            backgroundPosition: "start",
            borderRadius: "0px",
            overflow: "hidden",
          }}
          className="relative object-top  md:hidden"
          alt="Hero section cover"
        />

        <div className="creme-pastry-400 text-30 md:text-[90px] absolute px-5 md:px-[90px] bottom-[60px] md:bottom-[100px] text-white">
          <div> The perfect gift </div>
          <div>Delivered tomorrow</div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
