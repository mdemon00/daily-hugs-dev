import Image from "next/image";
import React from "react";

const StoryCard = ({ image, title, subtitle, date, description }) => {
  return (
    <div className="py-5 px-8 shadow-xl border md:max-w-[340px]">
      <div className="relative w-full">
        <Image src={image} alt={title} height={500} width={500} />
      </div>
      <div className="work-sans-700 text-18 text-center mt-11">{title}</div>
      <div className="work-sans-400 text-16 text-center mt-5">{subtitle}</div>
      <div className="work-sans-700 text-14 text-center mt-[10px]">{date}</div>
      <div className="work-sans-400 text-14 mt-5">{description}</div>
    </div>
  );
};

export default StoryCard;
