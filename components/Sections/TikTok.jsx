"use client";

import React, { useRef, useState } from "react";
import Slider from "react-slick";

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

const tikTokVideos = [
  {
    rating: 1,
    link: "/Videos/TikTok_1.MOV",
  },
  {
    rating: 2,
    link: "/Videos/TikTok_1.MOV",
  },
  {
    rating: 3,
    link: "/Videos/TikTok_1.MOV",
  },
  {
    rating: 4,
    link: "/Videos/TikTok_1.MOV",
  },
  {
    rating: 5,
    link: "/Videos/TikTok_1.MOV",
  },
];

const TikTok = () => {
  const mobileSliderRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);
  const tiktokVideoRef = useRef([]);

  const mobileSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 3000,
    infinite: true,
    arrows: false,
    centerMode: true,
    // variableWidth: true,
    adaptiveHeight: true,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
      //   tiktokVideoRef.current[newIndex].load();
      tiktokVideoRef.current[newIndex].play();
      tiktokVideoRef.current[oldIndex].pause();
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

  return (
    <div className="bg-[#D0E5F599] pt-[40px] pb-[80px] border-t-[0.5px] border-b-[0.5px] border-black">
      <div className="text-center italic text-30 work-sans-400 mb-[30px]">
        Yes, you have seen our{" "}
        <strong>
          <em>flowers</em>
        </strong>{" "}
        on TikTok!
      </div>
      <Slider
        ref={mobileSliderRef}
        {...mobileSettings}
        // centerPadding={"50"}
        centerMode={true}
        className="md:hidden"
      >
        {tikTokVideos.map((el, idx) => {
          return (
            <div
              className={`px-0 ${
                currentSlide === idx ? "scale-100" : "scale-[0.85]"
              } transition duration-300`}
              key={idx}
            >
              <div className="p-3 bg-white border-[1px] border-accent-purple theme-shadow">
                <video
                  muted
                  playsInline
                  ref={(e) => (tiktokVideoRef.current[idx] = e)}
                  controls={false}
                  onEnded={(e) => {
                    mobileSliderRef.current.slickNext();
                    e.target.currentTime = 0;
                  }}
                  onClick={(e) => e.target.play()}
                  autoPlay={currentSlide === idx}
                  className={"border-[0.5px] border-accent-purple"}
                >
                  <source src={el.link} />
                </video>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default TikTok;
