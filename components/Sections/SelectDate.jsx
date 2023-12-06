"use client";

import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useAuth } from "context/AuthContext";

const SelectDate = () => {
  const { productPayload, setProduct, resetProduct } = useAuth();
  const [startDate, setStartDate] = useState(productPayload.info.dueDate ? new Date(productPayload.info.dueDate) : new Date());
  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 1);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => {
      setIsCalendarOpen(true);
      clearTimeout(id);
    }, 300);

    return () => clearTimeout(id);
  }, []);

  return (
    <div>
      <DatePicker
        selected={startDate}
        open={isCalendarOpen}
        onChange={(e) => {
          // console.log(e);
          productPayload.info.dueDate = e;
          setProduct(productPayload);
          setStartDate(e);
        }}
        highlightDates={startDate}
        minDate={minDate}
        maxDate={maxDate}
        showPopperArrow={false}
      />
    </div>
  );
};

export default SelectDate;
