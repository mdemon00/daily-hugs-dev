"use client";

import React, { useRef, useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Switch,
} from "@chakra-ui/react";
import Image from "next/image";
import ThemeButton from "../common/ThemeButton";
import { useModalContext } from "@/context/ModalContext";
import { themeToast } from "@/utils/helper";
import { useRouter } from "next/navigation";
import CartView from "../Sections/CartView";
import WaterDrop from "../Icons/Steps/WaterDrop";
import SmallBlackTick from "../Icons/Common/SmallBlackTick";

const CartDrawer = () => {
  const router = useRouter();

  const { cartDrawerModal, setCartDrawerModal, handleOrderFlowModalReset } =
    useModalContext();

  const handleClose = () => {
    setCartDrawerModal({ ...cartDrawerModal, isOpen: false });
  };

  const handleNextStep = () => {
    router.push("/shipping-details");
    handleOrderFlowModalReset();
  };

  return (
    <div>
      <Drawer
        isOpen={cartDrawerModal?.isOpen}
        placement="right"
        onClose={handleOrderFlowModalReset}
        size={"full"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader className="text-18 border-b-[1px] border-black">
            <div className="flex items-center space-x-2">
              <button type="button" onClick={handleClose}>
                <Image src={"/Icons/Back.svg"} height={16} width={16} />
              </button>
              <span>Cart</span>
            </div>
          </DrawerHeader>

          <DrawerBody>
            <CartView />
          </DrawerBody>

          <DrawerFooter className="bg-accent-lightBlue rounded-t-[8px] border-t-[2px] border-accent-purple">
            <div className="flex flex-col w-full">
              <div className="flex items-center justify-between bg-accent-lightPurple rounded-[8px] overflow-hidden">
                <div className="flex space-x-[10px] items-center w-fit py-[6px] pl-[4px]">
                  <Switch
                    size={"lg"}
                    colorScheme="brand"
                    defaultChecked={true}
                  />
                  <div className="work-sans-700 text-12 text-accent-purple">
                    Freshness <br /> Protection
                  </div>
                </div>

                <div className="flex space-x-[10px] items-center w-fit">
                  <div className="text-12 text-accent-purple work-sans-700">
                    +€{4.99}
                  </div>
                  <div className="bg-accent-purple h-full px-4 py-2">
                    <WaterDrop />
                  </div>
                </div>
              </div>

              <div className="my-3">
                <div className="flex items-center text-[8px] work-sans-400 space-x-[4px] justify-center">
                  <SmallBlackTick />
                  <span>Insurance. If not Fresh - we replace</span>
                </div>

                <div className="flex justify-between mt-2">
                  <div className="flex basis-1/5 items-center text-[8px] work-sans-400 space-x-[4px] justify-center">
                    <SmallBlackTick />
                    <span>Lorem ipsum consetetur </span>
                  </div>

                  <div className="flex basis-1/5 items-center text-[8px] work-sans-400 space-x-[4px] justify-center">
                    <SmallBlackTick />
                    <span>Lorem ipsum consetetur </span>
                  </div>

                  <div className="flex basis-1/5 items-center text-[8px] work-sans-400 space-x-[4px] justify-center">
                    <SmallBlackTick />
                    <span>Lorem ipsum consetetur </span>
                  </div>
                </div>
              </div>

              <ThemeButton
                title={"Send your Bouquet"}
                onClick={handleNextStep}
              />

              {/* <li className="list-style-none flex gap-5 inter-600">
                <Image
                  src={"/BulletPointFlower.svg"}
                  width={20}
                  height={20}
                  alt="Bullet point"
                />
                {"Freshness gurantee"}
              </li> */}
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default CartDrawer;
