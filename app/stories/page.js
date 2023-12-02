import Icon1 from "@/components/Icons/Concept/Icon1";
import Icon2 from "@/components/Icons/Concept/Icon2";
import Icon3 from "@/components/Icons/Concept/Icon3";
import Icon4 from "@/components/Icons/Concept/Icon4";
import Icon5 from "@/components/Icons/Concept/Icon5";
import ConceptCard from "@/components/Sections/ConceptCard";
import StoryCard from "@/components/Sections/StoryCard";
import ThemeButton from "@/components/common/ThemeButton";
import Image from "next/image";
import React from "react";

const storiesData = [
  {
    image: "/RomanceDose/Dose_1.png",
    title: "Handpicked Flowers",
    subtitle: "Daily curated arrangments with handpicked flowers",
    date: "FRI 23.06.2023",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut  labore et dolore magna aliquyam erat. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
  },
  {
    image: "/RomanceDose/Dose_2.png",
    title: "Handpicked Flowers",
    subtitle: "Daily curated arrangments with handpicked flowers",
    date: "FRI 23.06.2023",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut  labore et dolore magna aliquyam erat. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
  },
  {
    image: "/RomanceDose/Dose_3.png",
    title: "Handpicked Flowers",
    subtitle: "Daily curated arrangments with handpicked flowers",
    date: "FRI 23.06.2023",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut  labore et dolore magna aliquyam erat. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
  },
];

const Stories = () => {
  return (
    <div>
      <div className="mt-0 md:mt-[40px] text-40 md:text-[60px] inter-400 text-accent-purple text-center">
        OUR STORIES
      </div>
      <div className="work-sans-400 text-16 md:text-20 text-center max-w-[80%] lg:max-w-[70%] xl:max-w-[50%] mx-auto">
        A daily hug is a message, a gesture, a piece of cake or a coffee in the
        morning, a song sent, a special dinner, a sunrise together. We would
        like to part of your story
      </div>

      <div className="flex flex-col lg:flex-row lg:px-[80px] space-y-[30px] lg:space-y-0 lg:space-x-[70px] w-fit mx-6 lg:mx-auto mt-9">
        {storiesData.map((el, idx) => {
          return (
            <StoryCard
              key={idx}
              title={el.title}
              subtitle={el.subtitle}
              description={el.description}
              date={el.date}
              image={el.image}
            />
          );
        })}
      </div>

      <div className="px-6 md:px-0 my-[50px] md:my-[80px] text-center">
        <div className="text-28 md:text-38 work-sans-700 text-accent-purple lg:max-w-[695px] lg:mx-auto">
          Our mission is to deliver a warm hug straight to someone's heart.
          Someone in mind?
        </div>
        <div className="mt-[30px] md:mt-[40px] work-sans-400 text-18 md:text-20 lg:max-w-[800px] lg:mx-auto">
          We believe everyone deserves a warm hug, which is why we send out a
          few free bouquets each month to those who need it most. If you have an
          important story to share or know someone who could benefit from this
          gesture, please email us. We'd love to hear from you!{" "}
        </div>
      </div>
    </div>
  );
};

export default Stories;
