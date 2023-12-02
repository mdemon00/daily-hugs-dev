"use client";

import { useModalContext } from "@/context/ModalContext";
import Image from "next/image";
import React, { useState } from "react";

const boxImages = [
  {
    image:
      "https://static.vecteezy.com/system/resources/previews/000/695/827/original/spring-square-greeting-card-design-with-flowers-vector.jpg",
    id: 1234,
    title: "Purple",
    description: "This is purple box. Best for Speak Now Era",
  },
  {
    image:
      "https://static.vecteezy.com/system/resources/previews/000/695/827/original/spring-square-greeting-card-design-with-flowers-vector.jpg",
    id: 1235,
    title: "Black",
    description: "This is purple box. Best for Reputation Era",
  },
  {
    image:
      "https://static.vecteezy.com/system/resources/previews/000/695/827/original/spring-square-greeting-card-design-with-flowers-vector.jpg",
    id: 1236,
    title: "Blue",
    description: "This is purple box. Best for TS/1989 Era",
  },
  {
    image:
      "https://static.vecteezy.com/system/resources/previews/000/695/827/original/spring-square-greeting-card-design-with-flowers-vector.jpg",
    id: 1237,
    title: "Red",
    description: "This is purple box. Best for Red Era",
  },
  {
    image:
      "https://static.vecteezy.com/system/resources/previews/000/695/827/original/spring-square-greeting-card-design-with-flowers-vector.jpg",
    id: 1238,
    title: "Yellow",
    description: "This is purple box. Best for Fearless Era",
  },
  {
    image:
      "https://static.vecteezy.com/system/resources/previews/000/695/827/original/spring-square-greeting-card-design-with-flowers-vector.jpg",
    id: 1239,
    title: "Pastel Pink",
    description: "This is purple box. Best for Lover Era",
  },
  {
    image:
      "https://static.vecteezy.com/system/resources/previews/000/695/827/original/spring-square-greeting-card-design-with-flowers-vector.jpg",
    id: 12310,
    title: "Gray",
    description: "This is purple box. Best for Folklore Era",
  },
  {
    image:
      "https://static.vecteezy.com/system/resources/previews/000/695/827/original/spring-square-greeting-card-design-with-flowers-vector.jpg",
    id: 12311,
    title: "Brown",
    description: "This is purple box. Best for Evermore Era",
  },
  {
    image:
      "https://static.vecteezy.com/system/resources/previews/000/695/827/original/spring-square-greeting-card-design-with-flowers-vector.jpg",
    id: 12312,
    title: "Navy Blue",
    description: "This is purple box. Best for Midnights Era",
  },
];

const SelectBox = () => {
  const { orderPayload, setOrderPayload } = useModalContext();

  return (
    <div className="md:px-5 lg:px-[90px] mb-[40px] lg:mb-[80px]">
      <div className="hidden md:block text-[50px] inter-400 text-accent-purple text-center">
        Pair with a Card
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-[40px] lg:gap-[60px] w-fit mx-auto mt-[30px]">
        {boxImages.map((box, idx) => {
          return (
            <button
              className={`flex items-center ${
                box.id === orderPayload?.box?.id
                  ? "outline outline-[#707070] shadow-lg shadow-accent-lightPurple themeShadow"
                  : "outline outline-accent-lightPurple"
              } rounded-[10px] overflow-hidden transition duration-300 bg-black/10`}
              onClick={() => {
                setOrderPayload({ box });
              }}
              key={idx}
            >
              <div className="p-2">
                <Image
                  alt="box"
                  src={box.image}
                  height={120}
                  width={120}
                  style={{ objectFit: "cover", borderRadius: "8px" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="h-full text-left py-2 pr-1">
                <div className="work-sans-500 text-20">{box.title}</div>
                <div className="work-sans-400 text-14">{box.description}</div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SelectBox;
