import ThemeButton from "@/components/common/ThemeButton";
import Image from "next/image";
import React from "react";

const Contacts = () => {
  return (
    <div className="w-full lg:max-w-[80%] px-6 lg:mr-0 lg:ml-auto">
      <div className="mb-[70px] lg:mt-[130px] lg:mb-[80px] flex flex-col-reverse lg:flex-row justify-between lg:space-x-[260px]">
        <div className="lg:w-[40%]">
          <div className="mt-4 lg:mt-0 text-center inter-500 text-30 md:text-40 lg:text-50 text-accent-purple">
            Contact us
          </div>

          <div className="text-14 work-sans-500 mt-[10px] text-center leading-[30px]">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. et dolore magna aliquyam erat, sed diam voluptua.
          </div>

          <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-3 mt-6 lg:min-w-[445px]">
            <input
              className="text-14 work-sans-500 placeholder:text-accent-grey border-b-[1px] border-accent-grey focus:border-none focus:outline px-2 py-[6px] w-full max-w-[396px] transition duration-300"
              placeholder="Surname"
              type="text"
            />

            <input
              className="text-14 work-sans-500 placeholder:text-accent-grey border-b-[1px] border-accent-grey focus:border-none focus:outline px-2 py-[6px] w-full max-w-[396px] transition duration-300"
              placeholder="Name"
              type="text"
            />
          </div>

          <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-3 mt-6 lg:min-w-[445px]">
            <input
              className="text-14 work-sans-500 placeholder:text-accent-grey border-b-[1px] border-accent-grey focus:border-none focus:outline px-2 py-[6px] w-full max-w-[396px] transition duration-300"
              placeholder="Email"
              type="email"
            />

            <input
              className="text-14 work-sans-500 placeholder:text-accent-grey border-b-[1px] border-accent-grey focus:border-none focus:outline px-2 py-[6px] w-full max-w-[396px] transition duration-300"
              placeholder="Phone - Optional"
              type="number"
            />
          </div>

          <div className="flex mt-6 lg:min-w-[445px]">
            <textarea
              className="text-14 work-sans-500 placeholder:text-accent-grey border-b-[1px] border-accent-grey focus:border-none focus:outline px-2 py-[6px] w-full transition duration-300"
              placeholder="Message"
              type="text"
              rows={5}
            />
          </div>

          <div className="mt-[50px] w-full max-w-[390px] mx-auto">
            <ThemeButton title={"Submit"} />
          </div>
        </div>
        <div className="hidden lg:block">
          <Image
            src={"/RomanceDose/Dose_1.png"}
            width={579 * 2}
            height={703 * 2}
            style={{ objectFit: "cover", maxWidth: "30vw" }}
            alt="Perfect gift"
          />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
