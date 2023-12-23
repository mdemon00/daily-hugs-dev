import React from "react";
import PurchaseStepCard from "../PurchaseStepCard";
import Mail from "../Icons/Steps/Mail";
import Heart from "../Icons/Steps/Heart";
import Delivery from "../Icons/Steps/Delivery";
import ThemeButton from "../common/ThemeButton";

const stepsToPurchaseArray = [
  {
    icon: <Mail />,
    title: (
      <div>
        Select{" "}
        <strong>
          <em>Card</em>
        </strong>
      </div>
    ),
    description:
      "Write a personal message to your loved one, and we'll handwrite it with love.",
  },
  {
    icon: <Heart />,
    title: (
      <div>
        <strong>
          <em>Personalize</em>
        </strong>{" "}
        Message
      </div>
    ),
    description:
      "Write a personal message to your loved one, and we'll handwrite it with love.",
  },
  {
    icon: <Delivery />,
    title: (
      <div>
        Wait{" "}
        <strong>
          <em>Delivery</em>
        </strong>
      </div>
    ),
    description:
      "Plan the perfect moment or embrace spontaneity with our surprise delivery option. Order before 15:00 for next-day delivery.",
  },
];

const SendSteps = () => {
  return (
    <div className="p-[30px] pb-[40px] md:py-[90px] md:px-[90px]">
      <div className="text-28 md:text-50 text-center work-sans-400 mb-[30px] md:mb-[80px]">
        Send a <span className="work-sans-800 italic">Bouquet</span> in three
        steps
      </div>
      <div className="grid grid-rows-3 md:grid-rows-1 md:grid-cols-3 gap-[30px] mb-[40px] md:mb-[80px]">
        {stepsToPurchaseArray.map((step, idx) => (
          <PurchaseStepCard
            title={step.title}
            description={step.description}
            icon={step.icon}
            key={idx}
          />
        ))}
      </div>
      <div className="mx-auto w-full max-w-[396px]">
        <ThemeButton title={"SEND A BOUQUET"} />
      </div>
    </div>
  );
};

export default SendSteps;
