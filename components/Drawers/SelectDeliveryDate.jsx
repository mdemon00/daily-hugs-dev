"use client";

import React, { useRef } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import Image from "next/image";
import ThemeButton from "../common/ThemeButton";
import { useModalContext } from "@/context/ModalContext";
import SelectDate from "../Sections/SelectDate";
import "./date-picker.css";

const SelectDeliveryDate = () => {
  const {
    selectDeliveryDate,
    setSelectDeliveryDate,
    setCartDrawerModal,
    handleOrderFlowModalReset,
  } = useModalContext();

  const handleClose = () => {
    setSelectDeliveryDate({ ...selectDeliveryDate, isOpen: false });
  };

  const handleNextStep = () => {
    // handleOrderFlowModalReset();
    setCartDrawerModal({ isOpen: true, data: {} });
  };

  return (
    <div>
      <Drawer
        isOpen={selectDeliveryDate?.isOpen}
        placement="right"
        onClose={handleOrderFlowModalReset}
        size={"full"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader className="border-b-[1px] border-black">
            <div className="flex items-center space-x-2">
              <button type="button" onClick={handleClose}>
                <Image src={"/Icons/Back.svg"} height={16} width={16} />
              </button>
              <span>Select due date</span>
            </div>
          </DrawerHeader>

          <DrawerBody className="mt-2">
            <SelectDate />
          </DrawerBody>

          <DrawerFooter className="bg-accent-lightPurple rounded-t-[8px] border-t-[2px] border-accent-purple">
            <div className="flex flex-col w-full gap-3">
              <ThemeButton title={"Review Cart"} onClick={handleNextStep} />

              <li className="list-style-none flex gap-5 inter-600">
                <Image
                  src={"/BulletPointFlower.svg"}
                  width={20}
                  height={20}
                  alt="Bullet point"
                />
                {"Freshness gurantee"}
              </li>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default SelectDeliveryDate;
