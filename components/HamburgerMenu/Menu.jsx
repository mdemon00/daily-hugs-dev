import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import ThemeButton from "../common/ThemeButton";

const Menu = ({ isMenuOpen, setIsMenuOpen }) => {
  const currentPathName = usePathname();
  const router = useRouter();

  const handleMenuClosing = () => {
    //setIsMenuOpen(false);
    if (typeof setIsMenuOpen === 'function') {
      setIsMenuOpen(false);
    } else {
      console.error('setIsMenuOpen is not a function');
    }
  };

  return (
    <div
      className={`bg-white lg:bg-transparent min-h-[calc(100vh-100px)] lg:min-h-fit flex flex-col justify-between lg:block mt-[-50px] lg:mt-0 px-5 lg:px-0 fixed lg:static top-[0px] pt-[100px] w-full pb-12 lg:py-0 rounded-b-[30px] lg:rounded-0 ${
        isMenuOpen
          ? "translate-y-[104px]"
          : "translate-y-[-110vh] lg:translate-y-0"
      } transition-all duration-500 lg:transition-none border-b-[1px] border-accent-purple shadow-lg lg:border-0 lg:shadow-none`}
    >
      <div className="flex flex-col w-fit lg:w-auto lg:flex-row space-y-[30px] lg:space-y-0 lg:space-x-[70px]">
        <Link
          className={`${
            currentPathName === "/shop"
              ? "work-sans-600"
              : "work-sans hover:font-[500]"
          } text-24 lg:text-16 transition duration-300`}
          href={"/shop"}
          onClick={handleMenuClosing}
        >
          SHOP
        </Link>
        <Link
          className={`${
            currentPathName === "/club"
              ? "work-sans-600"
              : "work-sans hover:font-[500]"
          } text-24 lg:text-16 transition duration-300`}
          href={"/club"}
          onClick={handleMenuClosing}
        >
          THE CLUB
        </Link>
        <Link
          className={`${
            currentPathName === "/stories"
              ? "work-sans-600"
              : "work-sans hover:font-[500]"
          } text-24 lg:text-16 transition duration-300`}
          href={"/stories"}
          onClick={handleMenuClosing}
        >
          STORIES
        </Link>
        <Link
          className={`${
            currentPathName === "/concept"
              ? "work-sans-600"
              : "work-sans hover:font-[500]"
          } text-24 lg:text-16 transition duration-300`}
          href={"/concept"}
          onClick={handleMenuClosing}
        >
          OUR CONCEPT
        </Link>
        <Link
          className={`${
            currentPathName === "/contacts"
              ? "work-sans-600"
              : "work-sans hover:font-[500]"
          } text-24 lg:text-16 transition duration-300`}
          href={"/contacts"}
          onClick={handleMenuClosing}
        >
          CONTACTS
        </Link>
      </div>

      <div className="mt-auto lg:hidden">
        <ThemeButton
          title={"Account"}
          extraStyles={{ fontSize: "20px" }}
          onClick={() => {
            router.push("/login");
            handleMenuClosing();
          }}
        />
      </div>
    </div>
  );
};

export default Menu;
