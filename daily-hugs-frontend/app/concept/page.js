import Icon1 from "@/components/Icons/Concept/Icon1";
import Icon2 from "@/components/Icons/Concept/Icon2";
import Icon3 from "@/components/Icons/Concept/Icon3";
import Icon4 from "@/components/Icons/Concept/Icon4";
import Icon5 from "@/components/Icons/Concept/Icon5";
import ConceptCard from "@/components/Sections/ConceptCard";
import ThemeButton from "@/components/common/ThemeButton";
import Image from "next/image";
import React from "react";

const conteptData = [
  {
    icon: <Icon1 />,
    title: "Elegant Packaging",
    description:
      "Lorem ipsum dolor sadipsci amet, consetetur sadipscing elitr, sed diam nonumy fas eirmod tempor    invidunt ut labore. At vero eos et duo.",
  },
  {
    icon: <Icon2 />,
    title: "Handpicked Flowers",
    description:
      "Lorem ipsum dolor sadipsci amet, consetetur sadipscing elitr, sed diam nonumy fas eirmod tempor    invidunt ut labore. At vero eos et duo.",
  },
  {
    icon: <Icon3 />,
    title: "Personalized Message",
    description:
      "Lorem ipsum dolor sadipsci amet, consetetur sadipscing elitr, sed diam nonumy fas eirmod tempor    invidunt ut labore. At vero eos et duo.",
  },
  {
    icon: <Icon4 />,
    title: "Convenience and Accesibility",
    description:
      "Lorem ipsum dolor sadipsci amet, consetetur sadipscing elitr, sed diam nonumy fas eirmod tempor    invidunt ut labore. At vero eos et duo.",
  },
  {
    icon: <Icon5 />,
    title: "Attention to detail",
    description:
      "Lorem ipsum dolor sadipsci amet, consetetur sadipscing elitr, sed diam nonumy fas eirmod tempor    invidunt ut labore. At vero eos et duo.",
  },
];

const Concept = () => {
  return (
    <div>
      <div className="mt-0 md:mt-[40px] text-40 md:text-[60px] inter-400 text-accent-purple text-center">
        OUR CONCEPT
      </div>
      <div className="work-sans-400 text-16 md:text-20 text-center max-w-[80%] lg:max-w-[70%] xl:max-w-[50%] mx-auto">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore.
      </div>

      <div className="px-6 md:px-[50px] lg:px-[90px]">
        <div className="mt-[20px] flex flex-col md:flex-row space-y-[30px] md:space-x-[80px] items-end w-fit mx-auto">
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

        <div className="md:mt-[50px] mt-[30px] flex flex-col md:flex-row space-y-[30px] md:space-x-[80px] items-end mx-auto w-fit">
          {conteptData?.slice(3, 5)?.map((el, idx) => {
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

        <div className="my-[70px] lg:mt-[130px] lg:mb-[80px] flex flex-col-reverse lg:flex-row lg:space-x-[40px] justify-between">
          <div className="lg:w-[50%]">
            <div className="mt-4 lg:mt-0 text-center lg:text-left inter-500 text-30 md:text-40 lg:text-50 text-accent-purple">
              The perfect gift
            </div>

            <div className="text-14 work-sans-500 mt-[10px]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. <br /> <br /> Stet clita kasd gubergren, no
              sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
              dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
              eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
              sed diam voluptua. At vero eos et accusam et justo duo dolores et
              ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
              Lorem ipsum dolor sit amet. <br /> <br /> nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum
            </div>

            <div className="mt-[50px]">
              <ThemeButton title={"Learn more"} />
            </div>
          </div>
          <div>
            <Image
              src={"/RomanceDose/Dose_1.png"}
              height={723}
              width={685}
              alt="Perfect gift"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Concept;
