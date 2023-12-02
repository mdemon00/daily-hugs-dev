"use client";

import ThemeButton from "@/components/common/ThemeButton";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export const cartProducts = [
  {
    image: "/RomanceDose/Dose_1.png",
    id: "234rwed2343ew",
    title: "DailyHugs 2 Boxes",
    originalPrice: 3455,
    discountedPrice: 3000,
    numOfBoxes: 1,
  },
  {
    image: "/RomanceDose/Dose_2.png",
    id: "sdvwer23few",
    title: "DailyHugs 2 Boxes",
    originalPrice: 4555,
    discountedPrice: 2000,
    numOfBoxes: 1,
  },
];

const Cart = () => {
  const [updatedCartProducts, setUpdatedCartProducts] = useState(cartProducts);
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  const handleAdd = (productId) => {
    const newCartProducts = updatedCartProducts.map((el, idx) => {
      if (el.id === productId) {
        return { ...el, numOfBoxes: el.numOfBoxes + 1 };
      } else {
        return el;
      }
    });
    setUpdatedCartProducts((prev) => newCartProducts);
  };

  const handleRemove = (productId) => {
    const newCartProducts = updatedCartProducts.map((el, idx) => {
      if (el.id === productId) {
        return { ...el, numOfBoxes: el.numOfBoxes - 1 };
      } else {
        return el;
      }
    });
    setUpdatedCartProducts((prev) => newCartProducts);
  };

  const handleDelete = (productId) => {
    const newCartProducts = updatedCartProducts.filter((el, idx) => {
      if (el.id !== productId) {
        return el;
      }
    });
    setUpdatedCartProducts((prev) => newCartProducts);
  };

  const handleNextStep = () => {
    router.push("/shipping-details");
  };

  return (
    <div>
      <div className="flex items-center justify-between px-6">
        <div className="inter-600 text-18">YOUR CART</div>
        <button
          type="button"
          className="flex items-center justify-center p-1 text-white bg-black rounded-full text-14"
          onClick={handleClose}
        >
          <Image
            src={"/Icons/Close.svg"}
            height={12}
            width={12}
            alt="Close cart"
          />
        </button>
      </div>

      <div className="mx-6">
        {updatedCartProducts.map((el, idx) => {
          return (
            <div key={el.id} className="py-6 border-b-[1px] border-black">
              <div className={`flex space-x-4`}>
                <div className="shrink-0">
                  <Image
                    src={el.image}
                    alt={el.title}
                    height={80}
                    width={80}
                    className="rounded-[8px] border-[#707070]"
                  />
                </div>
                <div className="w-full">
                  <div className="flex justify-between">
                    <div>
                      <div className="work-sans-500">{el.title}</div>
                      <div className="text-14">
                        {el.numOfBoxes} {el.numOfBoxes > 1 ? "Boxes" : "Box"}
                      </div>
                    </div>
                    <button onClick={() => handleDelete(el.id)}>
                      <Image src={"/Icons/Delete.svg"} height={16} width={16} />
                    </button>
                  </div>
                  <div className="flex justify-between mt-2 w-full hidden">
                    <div>
                      <div className="text-12 work-sans-600">QUANTITY:</div>
                      <div className="flex items-center space-x-1 text-14">
                        <button
                          onClick={() => {
                            handleRemove(el.id);
                          }}
                          disabled={el.numOfBoxes === 1}
                          className="disabled:opacity-20 border-[1px] border-black h-[16px] w-[16px] flex items-center justify-center rounded-full"
                        >
                          -
                        </button>
                        <div className="text-16 work-sans-700">
                          {el.numOfBoxes}
                        </div>
                        <button
                          onClick={() => {
                            handleAdd(el.id);
                          }}
                          className="border-[1px] border-black h-[16px] w-[16px] flex items-center justify-center rounded-full"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="line-through text-accent-red text-12 work-sans-400">
                        €{el.originalPrice * el.numOfBoxes}
                      </div>
                      <div className="text-16 work-sans-600">
                        €{el.discountedPrice * el.numOfBoxes}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mx-6 my-6">
        <ThemeButton title={"Proceed to checkout"} onClick={handleNextStep} />
      </div>
    </div>
  );
};

export default Cart;
