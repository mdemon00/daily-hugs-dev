"use client";

import { cartProducts } from "@/app/cart/page";
import Image from "next/image";
import React, { useState } from "react";

const CartView = () => {
  const [updatedCartProducts, setUpdatedCartProducts] = useState(cartProducts);

  const handleDelete = (productId) => {
    const newCartProducts = updatedCartProducts.filter((el, idx) => {
      if (el.id !== productId) {
        return el;
      }
    });
    setUpdatedCartProducts((prev) => newCartProducts);
  };

  return (
    <div>
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
                <div className="flex justify-between mt-2 w-full">
                  <div className="hidden">
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

                  <div className="">
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

      <div className="flex justify-between p-2">
        <span>Total</span>
        <span>
          <div className="text-16 work-sans-600">
            €{" "}
            {cartProducts?.reduce((acc, el) => {
              return acc + Number(el.discountedPrice);
            }, 0)}
          </div>
        </span>
      </div>
    </div>
  );
};

export default CartView;
