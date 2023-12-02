import React from "react";

const VariantContainer = ({
  isSelected,
  numOfBox,
  originalPrice,
  discountedPrice = 0,
  legendText,
  onClick,
  index,
}) => {
  const savingPercentage =
    ((originalPrice - discountedPrice) * 100) / originalPrice;

  return (
    <button
      type="button"
      onClick={() => onClick(index)}
      className={`outline ${
        isSelected ? "outline-[3px]" : "hover:outline-[2px]"
      } outline-[#4035DA] transition duration-300 rounded-[5px] h-[100px] w-[100px] relative`}
    >
      {legendText && (
        <div className="absolute text-8 flex items-center justify-center bg-accent-purple top-[-7px] left-[50%] translate-x-[-50%] w-max h-[14px] px-[8px] rounded-full text-accent-yellow inter-700">
          {legendText}
        </div>
      )}

      <div className="flex flex-col justify-around items-center h-full">
        <div className="work-sans-700 text-12 mt-1">
          {numOfBox} {numOfBox === 1 ? "Box" : "Boxes"}
        </div>
        {savingPercentage !== 0 ? (
          <div className="text-10 rounded-full px-1 bg-accent-yellow inter-700">
            Save {savingPercentage.toFixed(1)}%
          </div>
        ) : (
          <div className="h-[15px]"></div>
        )}
        {savingPercentage !== 0 ? (
          <div className="text-10 work-sans-700 line-through text-accent-red">
            {originalPrice} EUR
          </div>
        ) : (
          <div></div>
        )}
        <div className="flex flex-col gap-[3px]">
          <div className="work-sans-700 text-12">{discountedPrice} EUR</div>
          {numOfBox > 1 ? (
            <div className="text-[#0000008c] inter-700 text-10">per Box</div>
          ) : (
            <div className="h-[15px]"></div>
          )}
        </div>
      </div>
    </button>
  );
};

export default VariantContainer;
