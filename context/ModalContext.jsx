"use client";

import React, { createContext, useContext, useMemo, useState } from "react";

const ModalContext = createContext();

export const ModalContextProvider = ({ children }) => {
  const [selectBoxModal, setSelectBoxModal] = useState({
    isOpen: false,
    data: {},
  });
  const [selectCardModal, setSelectCardModal] = useState({
    isOpen: false,
    data: {},
  });
  const [addNoteModal, setAddNoteModal] = useState({
    isOpen: false,
    data: {},
  });
  const [selectDeliveryDate, setSelectDeliveryDate] = useState({
    isOpen: false,
    data: {},
  });
  const [cartDrawerModal, setCartDrawerModal] = useState({
    isOpen: false,
    data: {},
  });
  const [orderPayload, setOrderPayload] = useState({});

  function handleOrderFlowModalReset() {
    setSelectBoxModal({ isOpen: false, data: {} });
    setSelectCardModal({ isOpen: false, data: {} });
    setAddNoteModal({ isOpen: false, data: {} });
    setSelectDeliveryDate({ isOpen: false, data: {} });
    setCartDrawerModal({ isOpen: false, data: {} });
  }

  const memoizedModalDataValue = useMemo(() => {
    return {
      selectBoxModal,
      setSelectBoxModal,
      selectCardModal,
      setSelectCardModal,
      addNoteModal,
      setAddNoteModal,
      selectDeliveryDate,
      setSelectDeliveryDate,
      handleOrderFlowModalReset,
      orderPayload,
      setOrderPayload,
      cartDrawerModal,
      setCartDrawerModal,
    };
  }, [
    selectBoxModal,
    selectCardModal,
    addNoteModal,
    selectDeliveryDate,
    orderPayload,
    cartDrawerModal,
  ]);

  return (
    <ModalContext.Provider value={memoizedModalDataValue}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => useContext(ModalContext);
