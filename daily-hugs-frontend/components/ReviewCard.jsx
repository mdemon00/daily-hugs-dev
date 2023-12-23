import Image from "next/image";
import React from "react";

const ReviewCard = ({ rating, user, review }) => {
  const ratingArray = Array.from({ length: 5 }).map((el, idx) => {
    if (idx < rating) {
      return 1;
    } else {
      return 0;
    }
  });

  return (
    <div className="mx-5">
      <div className="theme-shadow border border-accent-purple w-[calc(100vw-40px)] md:w-screen md:max-w-[396px] h-screen max-h-[200px] flex flex-col md:mx-[20px] mb-[20px] rounded-b-[5px]">
        <div className="pl-5 pr-4 flex justify-between items-center bg-accent-lightPurple h-[40px]">
          <div className="flex gap-[5px]">
            {ratingArray.map((el, idx) => {
              if (el === 1)
                return (
                  <Image
                    src={"/ratingStar.svg"}
                    height={14}
                    width={14}
                    alt="Rating"
                    key={idx}
                  />
                );
            })}
          </div>
          <div className="inter-800 text-16 italic">{user}</div>
        </div>
        <div className="px-[40px] h-full flex items-center justify-center montserrat-700">
          {review}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
