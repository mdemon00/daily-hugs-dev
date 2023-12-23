"use client";

// import { Accordion } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FooterAccordian from "./FooterAccordian";

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-accent-lightPurple text-accent-purple">
      <div className="px-6 md:px-[80px] md:flex md:justify-between">
        <div className="py-[30px] inter-400 text-14 md:text-18 text-center md:text-left md:max-w-[424px]">
          <div>Join our newsletter</div>
          <div className="inter-800 text-26 md:text-40 text-center md:text-left italic">
            Let&apos;s hug each other
          </div>
          <div>
            be the first to get product launches, discounts and exclusive
            content straight to your inbox.
          </div>
          <form onSubmit={handleSubmit} className="w-full md:max-w-[424px]">
            <div className="relative w-fit mx-auto mt-[10px] w-full">
              <input
                type="email"
                placeholder="you@yours.com"
                className="bg-white rounded-[15px] inter-400 text-16 md:text-18 outline-none py-[10px] pl-5 pr-[54px] w-full"
              />
              <button type="submit">
                <Image
                  className="absolute right-5 top-[50%] translate-y-[-50%]"
                  src={"/Icons/FeatherArrowRight.svg"}
                  width={24}
                  height={8}
                  alt="Submit"
                />
              </button>
            </div>
          </form>
        </div>

        <div className="mt-5 pb-10 flex items-center justify-between md:flex-col">
          <div className="work-sans-800 text-20 md:text-40 md:text-center">
            <div>
              Join our <br className="md:hidden" />
              <span className="text-white">#DailyHugs</span>
            </div>
            <div>Community</div>
          </div>
          <div className="flex space-x-[30px]">
            <Link href={"/"}>
              <Image
                src={"/Icons/Instagram.svg"}
                width={28}
                height={28}
                alt="Instagram"
              />
            </Link>
            <Link href={"/"}>
              <Image
                src={"/Icons/Tiktok.svg"}
                width={24.3}
                height={28}
                alt="Tiktok"
              />
            </Link>
            <Link href={"/"}>
              <Image
                src={"/Icons/Pinterest.svg"}
                width={21.5}
                height={28}
                alt="Pinterest"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <FooterAccordian />
      </div>

      <div className="mx-auto w-fit py-5 flex flex-col space-y-[10px]">
        <Image
          src={"/Logo.svg"}
          width={154}
          height={26}
          alt="Daily Hugs logo"
        />
        <div className="flex space-x-[10px] items-center">
          <Image
            src={"/Icons/Paypal.svg"}
            width={46}
            height={11}
            alt="Paypal"
          />
          <Image src={"/Icons/Visa.svg"} width={30} height={10} alt="Visa" />
          <Image
            src={"/Icons/MasterCard.svg"}
            width={20}
            height={12}
            alt="Visa"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
