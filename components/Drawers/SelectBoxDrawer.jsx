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
import SelectBox from "../Sections/SelectBox";
import ThemeButton from "../common/ThemeButton";
import { useModalContext } from "@/context/ModalContext";
import { themeToast } from "@/utils/helper";
import { useAuth } from "context/AuthContext";

const SelectBoxDrawer = () => {
  const { productPayload, setProduct, resetProduct } = useAuth();

  const {
    selectBoxModal,
    setSelectBoxModal,
    setSelectCardModal,
    orderPayload,
  } = useModalContext();

  const handleClose = () => {
    setSelectBoxModal({ ...selectBoxModal, isOpen: false });
  };

  const handleNextStep = () => {
    if (!orderPayload?.box?.id) {
      themeToast("Please select a box");
    } else {
      productPayload.info.selectedBox = orderPayload?.box?.title;
      setProduct(productPayload);
      // addToCart(productPayload);

      setSelectCardModal({ isOpen: true, data: {} });
    }
  };

  return (
    <div>
      <Drawer
        isOpen={selectBoxModal?.isOpen}
        placement="right"
        onClose={handleClose}
        size={"full"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader className="border-b-[1px] border-black">
            <div className="flex items-center space-x-2">
              {/* <button type="button" onClick={onClose}>
                <Image src={"/Icons/Back.svg"} height={16} width={16} />
              </button> */}
              <span>Pick a box</span>
            </div>
          </DrawerHeader>

          <DrawerBody>
            <SelectBox />
          </DrawerBody>

          <DrawerFooter className="bg-accent-lightPurple rounded-t-[8px] border-t-[2px] border-accent-purple">
            <div className="flex flex-col w-full gap-3">
              <ThemeButton
                title={"Pair with a card"}
                onClick={handleNextStep}
              />

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

export default SelectBoxDrawer;
