import React from "react";

const PriceIncludesCard = ({ title }) => {
  return (
    <div className="text-14 work-sans-400 flex items-center justify-center border-[2px] border-accent-purple rounded-[8px] h-[50px] w-full sm:max-w-[243px] px-2 text-center">
      {title}
    </div>
  );
};

export default PriceIncludesCard;
