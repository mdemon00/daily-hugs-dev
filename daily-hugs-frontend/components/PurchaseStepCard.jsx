import React from "react";

const PurchaseStepCard = ({ icon, title, description }) => {
  return (
    <div className="border border-accent-purple bg-white px-[30px] md:p-[30px] min-h-[210px] h-full rounded-[10px] rounded-t-0 theme-shadow">
      <div className="z-[20] bg-white w-full h-full flex flex-col gap-4 items-center justify-center text-center">
        <div>{icon}</div>
        <div className="text-20 work-sans-400">{title}</div>
        <div className="text-14 work-sans-500">{description}</div>
      </div>
    </div>
  );
};

export default PurchaseStepCard;
