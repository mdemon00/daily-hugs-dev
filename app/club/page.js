"use client";

import Icon1 from "@/components/Icons/Club/Icon1";
import Icon2 from "@/components/Icons/Club/Icon2";
import Icon3 from "@/components/Icons/Club/Icon3";
import ConceptCard from "@/components/Sections/ConceptCard";
import ThemeButton from "@/components/common/ThemeButton";
import Image from "next/image";
import React, { useRef } from "react";

const conteptData = [
  {
    icon: <Icon1 />,
    title: "Reccuring comission",
    description:
      "Lorem ipsum dolor sadipsci amet, consetetur sadipscing elitr, sed diam nonumy fas eirmod tempor invidunt ut labore. At vero eos et duo.",
  },
  {
    icon: <Icon2 />,
    title: "90 Day Cookie period",
    description:
      "Lorem ipsum dolor sadipsci amet, consetetur sadipscing elitr, sed diam nonumy fas eirmod tempor invidunt ut labore. At vero eos et duo.",
  },
  {
    icon: <Icon3 />,
    title: "We work together",
    description:
      "Lorem ipsum dolor sadipsci amet, consetetur sadipscing elitr, sed diam nonumy fas eirmod tempor invidunt ut labore. At vero eos et duo.",
  },
];

const heroSectionImages = [
  "/RomanceDose/Dose_1.png",
  "/RomanceDose/Dose_2.png",
  "/RomanceDose/Dose_3.png",
  "/RomanceDose/Dose_4.png",
];

const Club = () => {
  const affiliateProgramRef = useRef();

  return (
    <div>
      <div className="mt-0 md:mt-[40px] text-40 md:text-[60px] inter-400 text-accent-purple text-center">
        JOIN OUR CLUB
      </div>
      <div className="work-sans-400 text-16 md:text-20 text-center max-w-[80%] lg:max-w-[70%] xl:max-w-[50%] mx-auto">
        Stet clita kasd gubergren, no sea takimata
      </div>

      <div className="w-fit mx-auto space-x-2 mt-[30px] hidden lg:flex">
        {heroSectionImages?.map((el, idx) => (
          <Image key={idx} src={el} width={305} height={446} alt="Join club" />
        ))}
      </div>

      <div className="flex w-fit mx-auto space-x-2 mt-[30px] lg:hidden">
        {heroSectionImages?.slice(3)?.map((el, idx) => (
          <Image key={idx} src={el} width={610} height={892} alt="Join club" />
        ))}
      </div>

      <div className="">
        <Image
          src={"/Icons/SlideDown.svg"}
          width={42}
          height={55}
          alt="Slide down"
          className="mt-[40px] mx-auto cursor-pointer animate-bounce"
          onClick={() => {
            window?.scrollTo({
              behavior: "smooth",
              top: affiliateProgramRef?.current?.offsetTop - 100,
            });
          }}
        />
      </div>

      <div className="px-6 md:px-[50px] lg:px-[90px]" ref={affiliateProgramRef}>
        <div className="py-[70px] lg:pt-[70px] lg:pb-[80px] flex flex-col-reverse lg:flex-row lg:space-x-[40px] justify-between">
          <div className="lg:w-[50%]">
            <div className="mt-4 lg:mt-0 text-center inter-500 text-30 md:text-40 lg:text-50 text-accent-purple">
              Our affiliate program
            </div>
            <div className="text-14 work-sans-500 mt-[10px] text-center">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. <br /> <br /> Stet clita kasd gubergren, no
              sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
              dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
              eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </div>{" "}
            <div className="mt-[50px] md:mt-[20px] flex flex-col md:flex-row space-y-[30px] md:space-x-[30px] items-end w-fit mx-auto">
              {conteptData?.slice(0, 3)?.map((el, idx) => {
                return (
                  <ConceptCard
                    key={idx}
                    icon={el.icon}
                    title={el.title}
                    description={el.description}
                  />
                );
              })}
            </div>
            <div className="mt-[80px] mx-auto max-w-[395px]">
              <ThemeButton title={"Learn more"} />
            </div>
          </div>
          <div>
            <Image
              src={"/RomanceDose/Dose_1.png"}
              width={507}
              height={742}
              style={{ objectFit: "cover" }}
              alt="Perfect gift"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Club;
