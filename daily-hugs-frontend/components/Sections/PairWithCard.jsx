"use client";

import { useModalContext } from "@/context/ModalContext";
import Image from "next/image";
import React, { useState } from "react";

const cardsImage = [
  {
    image:
      "https://static.vecteezy.com/system/resources/previews/000/695/827/original/spring-square-greeting-card-design-with-flowers-vector.jpg",
    id: 1234,
  },
  {
    image:
      "https://static.vecteezy.com/system/resources/previews/000/695/827/original/spring-square-greeting-card-design-with-flowers-vector.jpg",
    id: 1235,
  },
  {
    image:
      "https://static.vecteezy.com/system/resources/previews/000/695/827/original/spring-square-greeting-card-design-with-flowers-vector.jpg",
    id: 1236,
  },
  {
    image:
      "https://static.vecteezy.com/system/resources/previews/000/695/827/original/spring-square-greeting-card-design-with-flowers-vector.jpg",
    id: 1237,
  },
  {
    image:
      "https://static.vecteezy.com/system/resources/previews/000/695/827/original/spring-square-greeting-card-design-with-flowers-vector.jpg",
    id: 1238,
  },
  {
    image:
      "https://static.vecteezy.com/system/resources/previews/000/695/827/original/spring-square-greeting-card-design-with-flowers-vector.jpg",
    id: 1239,
  },
  {
    image:
      "https://static.vecteezy.com/system/resources/previews/000/695/827/original/spring-square-greeting-card-design-with-flowers-vector.jpg",
    id: 12310,
  },
  {
    image:
      "https://static.vecteezy.com/system/resources/previews/000/695/827/original/spring-square-greeting-card-design-with-flowers-vector.jpg",
    id: 12311,
  },
  {
    image:
      "https://static.vecteezy.com/system/resources/previews/000/695/827/original/spring-square-greeting-card-design-with-flowers-vector.jpg",
    id: 12312,
  },
];

const PairWithCard = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState("A");
  const { orderPayload, setOrderPayload } = useModalContext();

  const filters = [
    { name: "A Lorem ipsum" },
    { name: "B Lorem ipsum" },
    { name: "C Lorem ipsum" },
    { name: "D Lorem ipsum" },
    { name: "E Lorem ipsum" },
    { name: "F Lorem ipsum" },
    { name: "G Lorem ipsum" },
  ];

  return (
    <div className="px-5 lg:px-[90px] mb-[40px] lg:mb-[80px]">
      <div className="hidden md:block text-[50px] inter-400 text-accent-purple text-center">
        Pair with a Card
      </div>
      <div className="hidden md:block mt-[10px] text-18 work-sans-500 text-center">
        Hover over the Card product Image to pair with your Bouquet.
      </div>
      {/* <div className="w-full md:w-fit mx-auto">
        <div className="text-24 inter-400 mt-5">Filter by occasion</div>

        <select className="block md:hidden px-3 py-2 border border-accent-purple mt-4">
          {filters.map((el, idx) => (
            <option key={idx}>{el.name}</option>
          ))}
        </select>

        <div className="grid grid-cols-2 gap-3 hidden md:flex md:flex-wrap mt-4 md:space-y-4">
          {filters.map((el) => (
            <div
              key={el.name}
              className={
                "basis:1/2 sm:basis-1/3 md:basis-1/4 flex items-center space-x-3"
              }
            >
              {" "}
              <input
                type="radio"
                id={el.name}
                name="filterName"
                className="accent-accent-purple"
              />
              <label htmlFor={el.name} className="work-sans-400 text-14">
                {el.name}
              </label>
            </div>
          ))}
        </div>
      </div> */}

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-[40px] lg:gap-[60px] w-fit mx-auto mt-[30px]">
        {cardsImage.map((card, idx) => {
          return (
            <button
              className={`${
                card.id === orderPayload?.card?.id
                  ? "border-2 border-[#707070] shadow-lg shadow-accent-lightPurple themeShadow"
                  : "border-2 border-accent-lightPurple"
              } rounded-[10px] overflow-hidden transition duration-300`}
              onClick={() => setOrderPayload({ card })}
              key={idx}
            >
              <Image
                alt="card"
                src={card.image}
                height={350}
                width={350}
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default PairWithCard;
