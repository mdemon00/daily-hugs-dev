import React from "react";
import { useAuth } from "context/AuthContext";

const AddNote = () => {
  const { productPayload, setProduct, resetProduct } = useAuth();

  const handleNoteChange = (e) => {

    productPayload.info.note = e.target.value;
    setProduct(productPayload);

  };

  return (
    <div>
      <textarea
        placeholder="Hey there..."
        className="border rounded-[8px] text-14 work-sans-400 placeholder:text-gray p-2 w-full min-h-[240px]"
        onChange={handleNoteChange}
      ></textarea>
    </div>
  );
};

export default AddNote;
