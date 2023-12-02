"use client";

import Image from "next/image";
import React, { useState } from "react";
import Banner from "./Banner";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Menu from "./HamburgerMenu/Menu";
import MenuStyles from "./HamburgerMenu/Menu.module.css";
import { useModalContext } from "@/context/ModalContext";

const Navbar = () => {
  const currentPathName = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartDrawerModal, setCartDrawerModal } = useModalContext();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full">
      <div className="relative h-[104px] lg:h-[136px] w-screen z-[100]">
        <img
          src={
            currentPathName === "/"
              ? "/NavbarBg.svg"
              : "/NavbarBgWithBorder.svg"
          }
          fill={"true"}
          className="fixed top-[34px] w-screen left-0 right-0 mx-auto lg:mx-0 h-fit z-[150] hidden lg:block"
          alt="Next.js Logo"
          priority
        />

        {
          <div className="lg:hidden">
            {" "}
            <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          </div>
        }

        <div className="fixed top-0 w-screen left-0 right-0 z-[300]">
          <Banner />
          <div className="bg-white p-5 rounded-b-[30px] flex justify-between lg:hidden">
            <button type="button" onClick={handleMenuToggle}>
              <div
                className={`${MenuStyles.hamburgerIcon} ${
                  isMenuOpen ? `${MenuStyles.open}` : ""
                }`}
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                {/* <Image height={30} width={30} src={"/Icons/Hamburger.svg"} /> */}
              </div>
            </button>
            <Link href={"/"}>
              <Image
                src={"/Logo.svg"}
                width={154}
                height={26}
                alt="Daily Hugs logo"
              />
            </Link>
            <div
              // href={"/cart"}
              onClick={() => {
                setCartDrawerModal({ ...cartDrawerModal, isOpen: true });
              }}
            >
              <Image
                height={30}
                width={30}
                src={"/Icons/Cart.svg"}
                alt="Cart"
              />
            </div>
          </div>

          <div className="z-[200] px-[100px] py-[25px] hidden lg:flex h-[80px]">
            <Link href={"/"}>
              <Image
                src={"/Logo.svg"}
                width={149}
                height={44.8}
                alt="Daily Hugs logo"
              />
            </Link>

            <div className="mx-auto">
              <Menu />
            </div>

            <div className="flex space-x-[18px]">
              <Image
                src={"/Icons/Country.svg"}
                height={24}
                width={24}
                alt="Country flag"
              />
              <Image
                src={"/Icons/Profile.svg"}
                height={18}
                width={20}
                alt="Profile"
              />
              <Link href={"/cart"}>
                <Image
                  src={"/Icons/Cart.svg"}
                  height={24}
                  width={24}
                  alt="Cart"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
