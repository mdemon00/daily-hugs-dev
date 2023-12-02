import Image from "next/image";
import React from "react";

const ConceptCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col w-full md:max-w-[300px]">
      {icon}
      <div className="mt-3 mb-[6px] text-20 work-sans-600">{title}</div>
      <div className="inter-400 text-18">{description}</div>
    </div>
  );
};

export default ConceptCard;
