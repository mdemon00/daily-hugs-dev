"use client";

import React, { useRef, useState } from "react";
import ReviewCard from "../ReviewCard";
import Slider from "react-slick";
import SliderPreviousBtn from "../SliderPreviousBtn";
import SliderNextBtn from "../SliderNextBtn";

const reviews = [
  {
    rating: 1,
    reviewDescription:
      "I have to admit, I was a bit skeptical about receiving flowers as a guy. However, Daily Hugs completely changed my perspective! Their arrangements are not only stunning...",
    userName: "Sarah Samuels",
  },
  {
    rating: 2,
    reviewDescription:
      "I have to admit, I was a bit skeptical about receiving flowers as a guy. However, Daily Hugs completely changed my perspective! Their arrangements are not only stunning...",
    userName: "Sarah Samuels",
  },
  {
    rating: 3,
    reviewDescription:
      "I have to admit, I was a bit skeptical about receiving flowers as a guy. However, Daily Hugs completely changed my perspective! Their arrangements are not only stunning...",
    userName: "Sarah Samuels",
  },
  {
    rating: 4,
    reviewDescription:
      "I have to admit, I was a bit skeptical about receiving flowers as a guy. However, Daily Hugs completely changed my perspective! Their arrangements are not only stunning...",
    userName: "Sarah Samuels",
  },
  {
    rating: 5,
    reviewDescription:
      "I have to admit, I was a bit skeptical about receiving flowers as a guy. However, Daily Hugs completely changed my perspective! Their arrangements are not only stunning...",
    userName: "Sarah Samuels",
  },
];

const CustomDot = ({ onClick, active }) => {
  const dotStyle = {
    width: "8px",
    height: "8px",
    margin: "20px 0px",
    borderRadius: "50%",
    background: active ? "#4035DA" : "white", // Customize the active and inactive dot styles
    cursor: "pointer",
  };

  return <div style={dotStyle} onClick={onClick} />;
};

const CustomerReviews = () => {
  const desktopSliderRef = useRef();
  const mobileSliderRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    centerMode: true,
    dots: false,
    variableWidth: true,
    centerPadding: "5%",
  };

  const mobileSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    arrows: false,
    variableWidth: true,
    adaptiveHeight: true,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
    },
    customPaging: (i) => (
      // Render custom dot component for each dot
      <CustomDot
        key={i}
        active={i === currentSlide}
        onClick={() => mobileSliderRef.current?.slickGoTo(i)}
      />
    ),
  };

  const handlePrev = () => {
    if (desktopSliderRef.current) {
      desktopSliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (desktopSliderRef.current) {
      desktopSliderRef.current.slickNext();
    }
  };

  return (
    <div className="w-full h-full bg-accent-lightBlue pt-[40px] pb-[70px] md:py-[80px] overflow-hidden">
      <div className="work-sans-400 text-28 md:text-50 px-[30px] mb-[30px] md:px-[90px] md:pb-[80px]">
        What <span className="work-sans-800">Customers</span> say about us!
      </div>
      <Slider
        {...settings}
        className="hidden md:block max-h-[220px]"
        ref={desktopSliderRef}
      >
        {reviews.map((el, idx) => {
          return (
            <ReviewCard
              rating={el.rating}
              review={el.reviewDescription}
              user={el.userName}
              key={el.userName}
            />
          );
        })}
      </Slider>

      <div className="hidden md:flex items-center px-[90px] mt-[80px]">
        <div className="h-[3px] w-full bg-gradient-to-r from-[#B2B2F9] to-[#596FD5]"></div>
        <div className="w-fit ml-[70px] flex space-x-[6px]">
          <button
            type="button"
            className="hover:bg-white rounded-full transition duration-300"
            onClick={handlePrev}
          >
            <SliderPreviousBtn />
          </button>
          <button
            type="button"
            className="hover:bg-white rounded-full transition duration-300"
            onClick={handleNext}
          >
            <SliderNextBtn />
          </button>{" "}
        </div>
      </div>

      <Slider
        ref={mobileSliderRef}
        {...mobileSettings}
        className="block md:hidden"
      >
        {reviews.map((el, idx) => {
          return (
            <ReviewCard
              rating={el.rating}
              review={el.reviewDescription}
              user={el.userName}
              key={el.userName}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default CustomerReviews;
