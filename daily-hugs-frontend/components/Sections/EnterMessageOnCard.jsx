"use client";

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

const EnterMessageOnCard = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState("A");

  return (
    <div className="px-5 lg:px-[90px] mb-[40px] lg:mb-[80px]">
      <div className="text-[48px] inter-400 text-accent-purple text-center">
        Write a message that will be remembered forever
      </div>
    </div>
  );
};

export default EnterMessageOnCard;
