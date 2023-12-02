import React from "react";

const ShopBenefitsCard = ({ icon, description }) => {
  return (
    <div className="flex flex-row sm:flex-col gap-3 max-w-[360px] sm:max-w-[120px] items-center justify-center">
      <span>{icon}</span>
      <span className="work-sans-400 text-12">{description}</span>
    </div>
  );
};

export default ShopBenefitsCard;
