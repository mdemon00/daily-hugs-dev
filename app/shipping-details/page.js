"use client";

import ThemeButton from "@/components/common/ThemeButton";
import Image from "next/image";
import React, { useState } from "react";
import { Country, State, City } from "country-state-city";
import { useCart } from "app/cart/CartContext";

const ShippingDetails = () => {
  const { cart } = useCart();
  const [formData, setFormData] = useState({});

  const [addressDetails, setAddressDetails] = useState({
    country: {
      name: "",
      isoCode: "",
      flag: "",
      phonecode: "",
      currency: "",
    },
    state: {
      name: "",
      isoCode: "",
      countryCode: "",
    },
  });
  const allCountries = Country.getAllCountries();
  const [allStatesOfCountry, setAllStatesOfCountry] = useState([]);
  const [allCitiesOfState, setAllCitiesOfState] = useState([]);

  const handleChange = (e) => {
    const { value, name } = e.target;

    if (name === "country") {
      setAddressDetails({
        ...addressDetails,
        country: Country.getCountryByCode(value),
      });

      setAllStatesOfCountry([...State.getStatesOfCountry(value)]);
    } else if (name === "state") {
      setAddressDetails({
        ...addressDetails,
        state: State.getStateByCode(addressDetails.country.isoCode),
      });

      setAllCitiesOfState([
        ...City.getCitiesOfState(
          addressDetails.country.isoCode,
          addressDetails.state.isoCode
        ),
      ]);
    } else if (name === "city") {
      setAddressDetails({
        ...addressDetails,
        city: City.getCitiesOfState(
          addressDetails.country.isoCode,
          addressDetails.state.isoCode
        ),
      });
      // setAllStatesOfCountry([...State.getStatesOfCountry(value)]);
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNextStep = async () => {
    // handleAddToCart();
    // router.push("/shipping-details");

    await fetch("http://localhost:3000/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ products: cart, shippingDetails: formData }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        if (response.url) {
          window.location.href = response.url;
          // console.log(response.url);
        }
      });

    console.log(cart);
  };

  return (
    <div>
      <div className="w-full lg:max-w-[80%] px-6 lg:mr-0 lg:ml-auto">
        <div className="mb-[70px] lg:mt-[130px] lg:mb-[80px] flex flex-col-reverse lg:flex-row justify-between lg:space-x-[260px]">
          <div className="lg:w-[40%]">
            <div className="text-center inter-500 text-30 md:text-40 lg:text-50 text-accent-purple">
              Shipping Details
            </div>

            <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-3 mt-6 lg:min-w-[445px]">
              <div className="w-full">
                <div className="text-12">Sender&apos;s name</div>
                <input
                  name="Sender's name"
                  className="text-14 work-sans-500 bg-accent-grey bg-opacity-10 placeholder:text-accent-grey border-b-[1px] border-accent-grey focus:border-none focus:outline px-2 py-[6px] w-full max-w-[396px] transition duration-300"
                  placeholder="Enter name"
                  type="text"
                  onChange={handleChange}
                />
              </div>

              <div className="w-full">
                <div className="text-12">Sender&apos;s email</div>
                <input
                  name="Sender's email"
                  className="text-14 work-sans-500 bg-accent-grey bg-opacity-10 placeholder:text-accent-grey border-b-[1px] border-accent-grey focus:border-none focus:outline px-2 py-[6px] w-full max-w-[396px] transition duration-300"
                  placeholder="you@yours.com"
                  type="email"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-3 mt-6 lg:min-w-[445px]">
              <div className="w-full">
                <div className="text-12">Sender&apos;s number</div>
                <input
                  name="Sender's number"
                  className="text-14 work-sans-500 bg-accent-grey bg-opacity-10 placeholder:text-accent-grey border-b-[1px] border-accent-grey focus:border-none focus:outline px-2 py-[6px] w-full md:max-w-[396px] lg:max-w-full transition duration-300"
                  placeholder="Enter name"
                  type="text"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mt-6 w-full h-[1px] border border-accent-purple rounded-full"></div>

            <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-3 mt-6 lg:min-w-[445px]">
              <div className="w-full">
                <div className="text-12">Receiver&apos;s name</div>
                <input
                  name="Receiver's name"
                  className="text-14 work-sans-500 bg-accent-grey bg-opacity-10 placeholder:text-accent-grey border-b-[1px] border-accent-grey focus:border-none focus:outline px-2 py-[6px] w-full max-w-[396px] transition duration-300"
                  placeholder="Enter name"
                  type="text"
                  onChange={handleChange}
                />
              </div>

              <div className="w-full">
                <div className="text-12">Receiver&apos;s email</div>
                <input
                  name="Receiver's email"
                  className="text-14 work-sans-500 bg-accent-grey bg-opacity-10 placeholder:text-accent-grey border-b-[1px] border-accent-grey focus:border-none focus:outline px-2 py-[6px] w-full max-w-[396px] transition duration-300"
                  placeholder="you@yours.com"
                  type="email"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-3 mt-6 lg:min-w-[445px]">
              <div className="w-full">
                <div className="text-12">Receiver&apos;s number</div>
                <input
                  name="Receiver's number"
                  className="text-14 work-sans-500 bg-accent-grey bg-opacity-10 placeholder:text-accent-grey border-b-[1px] border-accent-grey focus:border-none focus:outline px-2 py-[6px] w-full max-w-[396px] transition duration-300"
                  placeholder="1234567890"
                  type="number"
                  onChange={handleChange}
                />
              </div>

              <div className="w-full">
                <div className="text-12">Address line 1</div>
                <input
                  name="Address line 1"
                  className="text-14 work-sans-500 bg-accent-grey bg-opacity-10 placeholder:text-accent-grey border-b-[1px] border-accent-grey focus:border-none focus:outline px-2 py-[6px] w-full max-w-[396px] transition duration-300"
                  placeholder="Enter details"
                  type="text"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-3 mt-6 lg:min-w-[445px]">
              <div className="w-full">
                <div className="text-12">Address line 2</div>
                <input
                  name="Address line 2"
                  className="text-14 work-sans-500 bg-accent-grey bg-opacity-10 placeholder:text-accent-grey border-b-[1px] border-accent-grey focus:border-none focus:outline px-2 py-[6px] w-full max-w-[396px] transition duration-300"
                  placeholder="Enter details"
                  type="text"
                  onChange={handleChange}
                />
              </div>

              <div className="w-full">
                <div className="text-12">Landmark</div>
                <input
                  name="Landmark"
                  className="text-14 work-sans-500 bg-accent-grey bg-opacity-10 placeholder:text-accent-grey border-b-[1px] border-accent-grey focus:border-none focus:outline px-2 py-[6px] w-full max-w-[396px] transition duration-300"
                  placeholder="Enter details"
                  type="text"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-3 mt-6 lg:min-w-[445px]">
              <div className="w-full">
                <div className="text-12">Country</div>
                {/* <input
                  className="text-14 work-sans-500 bg-accent-grey bg-opacity-10 placeholder:text-accent-grey border-b-[1px] border-accent-grey focus:border-none focus:outline px-2 py-[6px] w-full max-w-[396px] transition duration-300"
                  placeholder="Enter details"
                  type="text"
                /> */}

                <select
                  className="text-14 work-sans-500 bg-accent-grey bg-opacity-10 placeholder:text-accent-grey border-b-[1px] border-accent-grey focus:border-none focus:outline px-2 py-[6px] w-full sm:max-w-[396px] md:max-w-full transition duration-300"
                  placeholder="Select country"
                  name="country"
                  onChange={handleChange}
                >
                  <option disabled={true}>Select country</option>
                  {allCountries?.map((el, idx) => (
                    <option value={el.isoCode}>{el.name}</option>
                  ))}
                </select>
              </div>

              <div className="w-full">
                <div className="text-12">Zip code</div>
                <input
                  name="Zip code"
                  className="text-14 work-sans-500 bg-accent-grey bg-opacity-10 placeholder:text-accent-grey border-b-[1px] border-accent-grey focus:border-none focus:outline px-2 py-[6px] w-full max-w-[396px] transition duration-300"
                  placeholder="Enter details"
                  type="text"
                  onChange={handleChange}
                />
              </div>

              <div className="w-full hidden">
                <div className="text-12">State</div>
                <select
                  className="text-14 work-sans-500 bg-accent-grey bg-opacity-10 placeholder:text-accent-grey border-b-[1px] border-accent-grey focus:border-none focus:outline px-2 py-[6px] w-full sm:max-w-[396px] md:max-w-full transition duration-300"
                  placeholder="Select state"
                  name="state"
                  onChange={handleChange}
                >
                  <option disabled={true}>Select state</option>
                  {allStatesOfCountry?.map((el, idx) => (
                    <option>{el.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-3 mt-6 lg:min-w-[445px] hidden">
              <div className="w-full">
                <div className="text-12">City</div>
                <select
                  className="text-14 work-sans-500 bg-accent-grey bg-opacity-10 placeholder:text-accent-grey border-b-[1px] border-accent-grey focus:border-none focus:outline px-2 py-[6px] w-full sm:max-w-[396px] md:max-w-full transition duration-300"
                  placeholder="Select city"
                  name="city"
                  onChange={handleChange}
                >
                  <option disabled={true}>Select city</option>
                  {allCitiesOfState?.map((el, idx) => (
                    <option>{el.name}</option>
                  ))}
                </select>
              </div>

              <div className="w-full">
                <div className="text-12">Zip code</div>
                <input
                  name="Zip code"
                  className="text-14 work-sans-500 bg-accent-grey bg-opacity-10 placeholder:text-accent-grey border-b-[1px] border-accent-grey focus:border-none focus:outline px-2 py-[6px] w-full max-w-[396px] transition duration-300"
                  placeholder="Enter details"
                  type="text"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-3 mt-6 lg:min-w-[445px]">
              <div className="w-full">
                <div className="text-12">Type of Delivery</div>
                <select
                  name="Type of Delivery"
                  className="text-14 work-sans-500 bg-accent-grey bg-opacity-10 placeholder:text-accent-grey border-b-[1px] border-accent-grey focus:border-none focus:outline px-2 py-[6px] w-full sm:max-w-[396px] md:max-w-full transition duration-300"
                  placeholder="Enter details"
                  type="text"
                  onChange={handleChange}
                >
                  <option>House</option>
                  <option>Company</option>
                  <option>Store</option>
                  <option>Hospital</option>
                </select>
              </div>
            </div>

            <div className="mt-[50px] w-full max-w-[390px] mx-auto">
              <ThemeButton
                title={"Proceed to payment"}
                onClick={handleNextStep}
              />
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
    </div>
  );
};

export default ShippingDetails;
