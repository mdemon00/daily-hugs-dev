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
import PairWithCard from "../Sections/PairWithCard";
import Image from "next/image";
import ThemeButton from "../common/ThemeButton";
import { useModalContext } from "@/context/ModalContext";
import { themeToast } from "@/utils/helper";
import { useAuth } from "context/AuthContext";

const SelectCardDrawer = () => {
  const { productPayload, setProduct, resetProduct } = useAuth();
  const {
    selectCardModal,
    setSelectCardModal,
    setAddNoteModal,
    handleOrderFlowModalReset,
    orderPayload,
  } = useModalContext();

  const handleClose = () => {
    setSelectCardModal({ ...selectCardModal, isOpen: false });
  };

  const handleNextStep = () => {
    if (!orderPayload?.card?.id) {
      themeToast("Please select a card");
    } else {

      productPayload.info.selectedCard = orderPayload?.card.image;
      setProduct(productPayload);
      setAddNoteModal({ isOpen: true, data: {} });
    }
  };

  return (
    <div>
      <Drawer
        isOpen={selectCardModal?.isOpen}
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
              <span>Pick a card</span>
            </div>
          </DrawerHeader>

          <DrawerBody>
            <PairWithCard />
          </DrawerBody>

          <DrawerFooter className="bg-accent-lightPurple rounded-t-[8px] border-t-[2px] border-accent-purple">
            <div className="flex flex-col w-full gap-3">
              <ThemeButton title={"Add a note"} onClick={handleNextStep} />

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

export default SelectCardDrawer;
