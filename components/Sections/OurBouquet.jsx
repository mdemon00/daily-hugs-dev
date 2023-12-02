import Image from "next/image";
import React from "react";
import BouquetImage from "../../public/Bouquet.png";
import ThemeButton from "../common/ThemeButton";

const ListData = [
  { title: "Free selection of 50+ cards" },
  { title: "Handwritten Message" },
  { title: "Elegant packaging" },
  { title: "Free next day delivery" },
  { title: "Freshness guarantee" },
  { title: "Sustainable approach" },
];

const ListPoints = ({ title }) => {
  return (
    <li className="list-style-none flex gap-5">
      <Image
        src={"/BulletPointFlower.svg"}
        width={20}
        height={20}
        alt="Bullet point"
      />
      {title}
    </li>
  );
};

const OurBouquet = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="p-5 lg:px-[81px] md:py-[80px]">
        <Image
          className="relative md:max-w-[592px] mx-auto lg:mx-0"
          src={BouquetImage}
          alt="Bouquet"
          fill={false}
          priority
        />
      </div>
      <div className="flex flex-col px-[30px] lg:p-0 lg:pr-[70px] mt-5 lg:mt-[60px]">
        <div className="text-28 md:text-50 work-sans-400">
          Our{" "}
          <strong>
            <em>Bouquet</em>
          </strong>
        </div>
        <div className="mt-5 text-14 md:text-20 work-sans-400">
          Every day, we handpick flowers and turn them into beautiful bouquets.
          Not only that, we also include:
        </div>
        <div className="mt-[30px] md:mt-[50px] md:pl-5 pr-[30px]">
          <ul className="list-image-none text-18 md:text-24 work-sans-400 flex flex-col gap-[30px]">
            {ListData.map(({ title }, idx) => (
              <ListPoints title={title} key={idx} />
            ))}
          </ul>
        </div>
        <div className="mx-auto w-full max-w-[391px] mt-[50px] mb-[44px] lg:mb-[80px] md:mt-[60px]">
          <ThemeButton title={"SEND A BOUQUET"} />
        </div>
      </div>
    </div>
  );
};

export default OurBouquet;
