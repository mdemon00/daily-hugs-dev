"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ThemeButton from "@/components/common/ThemeButton";
import VariantContainer from "@/components/common/VariantContainer";
import { useModalContext } from "@/context/ModalContext";
import CalenderLarge from "@/components/Icons/Shop/CalenderLarge";
import Delivery from "@/components/Icons/Shop/Delivery";
import Mail from "@/components/Icons/Shop/Mail";
import PriceIncludesCard from "@/components/Icons/Common/PriceIncludesCard";
import ShopBenefitsCard from "@/components/Icons/Common/ShopBenefitsCard";
import { useAuth } from "context/AuthContext";
import { useCart } from "app/cart/CartContext";
import Loader from "/components/Loader";

const productData = {
  id: "1234134",
  images: [
    "https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_640.jpg",
    "https://5.imimg.com/data5/YQ/IQ/MY-65929370/anthurium-flowers-500x500.jpg",
    "https://imgcdn.floweraura.com/DSC_8323.JPG",
    "https://images.unsplash.com/photo-1600703136783-bdb5ea365239?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dW5pcXVlJTIwZmxvd2VyfGVufDB8fDB8fHww&w=1000&q=80",
  ],
  title: "Daily Hugs Bouquete",
  description:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna",
  variants: [
    { numOfBox: 1, originalPrice: 3998, discountedPrice: 3998 },
    {
      numOfBox: 2,
      originalPrice: 4998,
      discountedPrice: 30,
      legendText: "MOST POPULAR",
    },
    {
      numOfBox: 3,
      originalPrice: 5998,
      discountedPrice: 40,
      legendText: "BEST VALUE",
    },
  ],
};

const shopBenefits = [
  {
    icon: <Mail />,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo, dui sit.",
  },
  {
    icon: <CalenderLarge />,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo, dui sit.",
  },
  {
    icon: <Delivery />,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo, dui sit.",
  },
];

const benefitsAgainstPrice = [
  "Sustainable Approach",
  "Free Card and wrapping paper",
  "Hand-written message",
  "Elegant packaging",
  "Freshness guarentee",
];

const Shop = () => {
  const { setProduct } = useAuth();
  const { resetCart, isLoading } = useCart();

  const sampleProduct = {
    image: "/RomanceDose/Dose_1.png",
    id: "234rwed2343ew",
    title: "Daily Hugs Bouquete",
    originalPrice: 3455,
    discountedPrice: 3000,
    numOfBoxes: 1,
    info: {},
  };

  const [selectedDueDate, setSelectedDueDate] = useState("");

  const [currentDisplayImage, setCurrentDisplayImage] = useState(
    productData.images[0]
  );
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(
    productData.variants?.[1] ? 1 : 0
  );
  const today = new Date();
  const minDate = new Date(today.setDate(today.getDate() + 1))
    .toISOString()
    .split("T")[0];
  const router = useRouter();
  const { setSelectBoxModal } = useModalContext();

  const handleVariantClick = (variantIndex) => {
    setSelectedVariantIndex(variantIndex);
  };

  const handleDueDateChange = (event) => {
    const selectedDate = event.target.value;
    setSelectedDueDate(selectedDate);
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row px-6 lg:px-[45px]">
        <div className="flex flex-col-reverse lg:flex-row gap-y-6 lg:gap-y-0 lg:space-x-8 lg:w-1/2">
          <div className="flex flex-row overflow-x-scroll lg:overflow-auto lg:flex-col gap-4">
            {productData.images.map((image, el) => (
              <Image
                height={100}
                width={70}
                src={image}
                style={{
                  objectFit: "cover",
                  height: "100px",
                  width: "70px",
                  borderRadius: "10px",
                }}
                className="relative"
                onClick={() => setCurrentDisplayImage(image)}
                alt={`${productData.title}-${el + 1}`}
              />
            ))}
          </div>

          <div className="w-full h-[380px] lg:h-auto max-h-[70vh] relative bg-black/0 rounded-[10px]">
            <Image
              src={currentDisplayImage}
              layout="fill"
              style={{
                objectFit: "cover",
                backgroundPosition: "start",
                borderRadius: "10px",
                overflow: "hidden",
              }}
              className="relative object-top"
              alt="Selected display image"
            />
          </div>

          <div className="block lg:hidden inter-500 text-24">
            {productData.title}
          </div>
        </div>

        <div className="lg:ml-[30px]">
          <div className="hidden lg:block inter-400 text-32">
            {productData.title}
          </div>
          <div className="mt-[14px] work-sans-400 text-16">
            {productData.description}
          </div>
          <div className="work-sans-700 text-14 mb-4 mt-1">Choose variant:</div>
          <div className="flex gap-4">
            {productData.variants.map((el, idx) => {
              return (
                <VariantContainer
                  discountedPrice={el.discountedPrice}
                  isSelected={selectedVariantIndex === idx}
                  numOfBox={el.numOfBox}
                  originalPrice={el.originalPrice}
                  legendText={el.legendText}
                  onClick={() => handleVariantClick(idx)}
                  index={idx}
                  key={idx}
                />
              );
            })}
          </div>

          <div className="hidden lg:block inter-700 text-14 my-4">Due date</div>
          <div>
            <input
              type="date"
              className="hidden lg:block border border-accent-purple rounded-[4px] px-[10px] py-[6px] inter-400 text-14 text-accent-purple"
              min={minDate}
              onChange={handleDueDateChange}
            />
            <div className="flex items-center space-x-[6px] inter-700 text-14 mt-[14px]">
              <Image
                src={"/Icons/CircularTick.svg"}
                width={21}
                height={21}
                alt="Guarantee mark"
              />
              <span>30-DAY SATISFACTION GUARANTEE</span>
            </div>
          </div>

          <div className="mt-[18px]">
            <ThemeButton
              title={"SEND A BOUQUET"}
              onClick={() => {
                // temporary intialize the cart to empty
                resetCart();

                sampleProduct.info.dueDate = selectedDueDate
                  ? selectedDueDate
                  : new Date();
                const selectedVariant =
                  productData.variants[selectedVariantIndex];
                sampleProduct.info.variant = selectedVariant.legendText;

                setProduct(sampleProduct);

                setSelectBoxModal({ isOpen: true, data: sampleProduct });
              }}
            />
          </div>

          <div className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-5 mt-8">
            {shopBenefits.map((el, idx) => (
              <ShopBenefitsCard
                description={el.description}
                icon={el.icon}
                key={idx}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex h-[1px] bg-black/30 mx-6 lg:mx-[80px] mt-[40px]"></div>

      <div className="my-[40px] inter-400 text-30 text-center">
        The Price includes
      </div>

      <div className="flex flex-wrap lg:flex-nowrap lg:flex-row gap-5 mx-6 lg:mx-[80px] mb-[80px]">
        {benefitsAgainstPrice.map((el, idx) => (
          <PriceIncludesCard title={el} key={idx} />
        ))}
      </div>
      <Loader isLoading={isLoading} />
    </div>
  );
};

export default Shop;
