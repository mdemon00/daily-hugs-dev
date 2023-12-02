"use client";

import React from "react";
import SelectBoxDrawer from "./SelectBoxDrawer";
import SelectCardDrawer from "./SelectCardDrawer";
import AddNoteDrawer from "./AddNoteDrawer";
import SelectDeliveryDate from "./SelectDeliveryDate";
import CartDrawer from "./CartDrawer";

const Drawers = () => {
  return (
    <div>
      <SelectBoxDrawer />
      <SelectCardDrawer />
      <AddNoteDrawer />
      <SelectDeliveryDate />
      <CartDrawer />
    </div>
  );
};

export default Drawers;
