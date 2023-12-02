import React from "react";

const AddNote = () => {
  return (
    <div>
      <textarea
        placeholder="Hey there..."
        className="border rounded-[8px] text-14 work-sans-400 placeholder:text-gray p-2 w-full min-h-[240px]"
      ></textarea>
    </div>
  );
};

export default AddNote;
