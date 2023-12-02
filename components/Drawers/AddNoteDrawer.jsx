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
import AddNote from "../Sections/AddNote";

const AddNoteDrawer = () => {
  const {
    addNoteModal,
    setAddNoteModal,
    setSelectDeliveryDate,
    handleOrderFlowModalReset,
  } = useModalContext();

  const handleClose = () => {
    setAddNoteModal({ ...addNoteModal, isOpen: false });
  };

  const handleNextStep = () => {
    // handleOrderFlowModalReset();
    setSelectDeliveryDate({ isOpen: true, data: {} });
  };

  return (
    <div>
      <Drawer
        isOpen={addNoteModal?.isOpen}
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
              <span>Add Note</span>
            </div>
          </DrawerHeader>

          <DrawerBody className="mt-2">
            <AddNote />
          </DrawerBody>

          <DrawerFooter className="bg-accent-lightPurple rounded-t-[8px] border-t-[2px] border-accent-purple">
            <div className="flex flex-col w-full gap-3">
              <ThemeButton
                title={"Select delivery date"}
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

export default AddNoteDrawer;
