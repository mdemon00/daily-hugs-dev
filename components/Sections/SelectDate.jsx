"use client";

import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SelectDate = () => {
  const [startDate, setStartDate] = useState(new Date());
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
