import React from "react";
import FeatherArrowRight from "../Icons/Common/FeatherArrowRight";

const ThemeButton = ({ title, onClick, extraClasses, extraStyles }) => {
  return (
    <button
      className={`flex theme-shadow-sm md:theme-shadow bg-accent-salmonPink work-sans-500 text-16 h-[40px] md:h-[50px] w-full max-w-[391px] justify-between items-center px-5 rounded-[5px] border border-black group ${extraClasses}`}
      onClick={onClick}
      style={{ ...extraStyles }}
    >
      <div>{title}</div>
      <div className="group-hover:translate-x-[4px] transition duration-300">
        <FeatherArrowRight />
      </div>
    </button>
  );
};

export default ThemeButton;
