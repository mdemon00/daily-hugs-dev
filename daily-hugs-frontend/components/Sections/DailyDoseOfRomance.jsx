import Image from "next/image";
import React from "react";

const imagesArray = [
  { path: "/RomanceDose/Dose_1.png" },
  { path: "/RomanceDose/Dose_2.png" },
  { path: "/RomanceDose/Dose_3.png" },
  { path: "/RomanceDose/Dose_4.png" },
  { path: "/RomanceDose/Dose_5.png" },
  { path: "/RomanceDose/Dose_6.png" },
];

const DailyDoseOfRomance = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:py-[80px] md:border-y-[1px] md:border-black">
      <div className="px-[10px] md:px-[0px] grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 gap-[10px] md:gap-[15px] w-fit mt-[40px] md:mt-0 md:w-full">
        {imagesArray?.map((el, idx) => {
          return (
            <React.Fragment key={idx}>
              <div className="md:hidden">
                {" "}
                <Image width={350} height={220} src={el.path} />
              </div>
              <div className="hidden md:block">
                {" "}
                <Image width={550} height={220} src={el.path} />
              </div>
            </React.Fragment>
          );
        })}
      </div>

      <div className="px-[30px] text-28 sm:text-36 md:text-50 2xl:text-[80px] work-sans-400 text-center py-[40px] md:w-fit md:pl-[80px] md:pr-[70px]">
        Your daily dose of <span className="work-sans-800 italic">romance</span>{" "}
        on{" "}
        <span className="work-sans-800 italic underline">@dailyhugsclub</span>
      </div>
    </div>
  );
};

export default DailyDoseOfRomance;
