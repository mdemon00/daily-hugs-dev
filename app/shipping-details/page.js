"use client";

import ThemeButton from "@/components/common/ThemeButton";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Country, State, City } from "country-state-city";
import { useCart } from "app/cart/CartContext";
import Loader from "/components/Loader";

const ShippingDetails = () => {
  const { cart, freshnessProtection } = useCart();
  const [formData, setFormData] = useState({
    senderName: "",
    senderEmail: "",
    senderNumber: "",
    receiverName: "",
    receiverEmail: "",
    receiverNumber: "",
    addressLine1: "",
    addressLine2: "",
    country: "NL",
    zipCode: "",
    deliveryType: "House",
    subscribed: false,
  });
  const [formErrors, setFormErrors] = useState({});

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
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const errors = {};

    // Sender's Name
    if (!formData.senderName.trim()) {
      errors.senderName = "Sender's name is required";
    }

    // Sender's Email
    if (!formData.senderEmail.trim()) {
      errors.senderEmail = "Sender's email is required";
    } else if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/.test(
        formData.senderEmail
      )
    ) {
      errors.senderEmail = "Enter a valid email address";
    }

    // Sender's Number
    if (!formData.senderNumber.trim()) {
      errors.senderNumber = "Sender's number is required";
    } else if (!/^\d{10}$/.test(formData.senderNumber)) {
      errors.senderNumber = "Enter a valid 10-digit number";
    }

    // Receiver's Name
    if (!formData.receiverName.trim()) {
      errors.receiverName = "Receiver's name is required";
    }

    // Receiver's Email
    if (!formData.receiverEmail.trim()) {
      errors.receiverEmail = "Receiver's email is required";
    } else if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/.test(
        formData.receiverEmail
      )
    ) {
      errors.receiverEmail = "Enter a valid email address";
    }

    // Receiver's Number
    if (!formData.receiverNumber.trim()) {
      errors.receiverNumber = "Receiver's number is required";
    } else if (!/^\d{10}$/.test(formData.receiverNumber)) {
      errors.receiverNumber = "Enter a valid 10-digit number";
    }

    // Address Line 1
    if (!formData.addressLine1.trim()) {
      errors.addressLine1 = "Address line 1 is required";
    }

    // Address Line 2
    if (!formData.addressLine2.trim()) {
      errors.addressLine2 = "Address line 2 is required";
    }

    // Country
    if (!formData.country.trim()) {
      errors.country = "Country is required";
    }

    // Zip Code
    if (!formData.zipCode.trim()) {
      errors.zipCode = "Zip code is required";
    }

    // Delivery Type
    if (!formData.deliveryType.trim()) {
      errors.deliveryType = "Type of delivery is required";
    }

    // Repeat this block for other fields

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

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

    // console.log(formData);
    setFormData({
      ...formData,
      [name]: value,
    });

    // Trigger validation for the changed field
    setFormErrors({
      ...formErrors,
      [name]: value.trim() ? "" : `${name} is required`,
    });
  };

  const handleNextStep = async () => {
    // Validate the form
    const isValidForm = validateForm();

    // If the form is not valid, prevent proceeding to payment
    if (!isValidForm) {
      console.log("not valid");
      console.log(formErrors);
      return;
    }

    setIsLoading(true);

    await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        products: cart,
        shippingDetails: formData,
        freshnessProtection: freshnessProtection,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setIsLoading(false);

        if (response.url) {
          const checkoutResponseData = {
            cart: cart,
            formData: formData,
            freshnessProtection: freshnessProtection,
          };

          localStorage.setItem(
            "checkoutResponse",
            JSON.stringify(checkoutResponseData)
          );

          window.location.href = response.url;
        }
      });

    console.log(cart);
  };

  const handleSubscriptionChange = (e) => {
    setFormData({
      ...formData,
      subscribed: e.target.checked,
    });
  };

  useEffect(() => {
    validateForm();
  }, [formData]);

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
                  name="senderName"
                  className="text-14 work-sans-500 bg-accent-grey bg-opacity-10 placeholder:text-accent-grey border-b-[1px] border-accent-grey focus:border-none focus:outline px-2 py-[6px] w-full max-w-[396px] transition duration-300"
                  placeholder="Enter name"
                  type="text"
                  onChange={handleChange}
                />
                {formErrors.senderName && (
                  <div className="text-red-500">{formErrors.senderName}</div>
                )}
              </div>

              <div className="w-full">
                <div className="text-12">Sender&apos;s email</div>
                <input
                  name="senderEmail"
                  className="text-14 work-sans-500 bg-accent-grey bg-opacity-10 placeholder:text-accent-grey border-b-[1px] border-accent-grey focus:border-none focus:outline px-2 py-[6px] w-full max-w-[396px] transition duration-300"
                  placeholder="you@yours.com"
                  type="email"
                  onChange={handleChange}
                />
                {formErrors.senderEmail && (
                  <div className="text-red-500">{formErrors.senderEmail}</div>
                )}
              </div>

              <div className="mt-3 flex items-center">
                <input
                  type="checkbox"
                  id="subscribeCheckbox"
                  name="subscribeCheckbox"
                  checked={formData.subscribed}
                  onChange={handleSubscriptionChange}
                />
                <label htmlFor="subscribeCheckbox" className="ml-2 text-12">
                  Email me with news and offers
                </label>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-3 mt-6 lg:min-w-[445px]">
              <div className="w-full">
                <div className="text-12">Sender&apos;s number</div>
                <input
                  name="senderNumber"
                  className="text-14 work-sans-500 bg-accent-grey bg-opacity-10 placeholder:text-accent-grey border-b-[1px] border-accent-grey focus:border-none focus:outline px-2 py-[6px] w-full md:max-w-[396px] lg:max-w-full transition duration-300"
                  placeholder="Enter number"
                  type="text"
                  onChange={handleChange}
                />
                {formErrors.senderNumber && (
                  <div className="text-red-500">{formErrors.senderNumber}</div>
                )}
              </div>
            </div>

            <div className="mt-6 w-full h-[1px] border border-accent-purple rounded-full"></div>

            <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-3 mt-6 lg:min-w-[445px]">
              <div className="w-full">
                <div className="text-12">Receiver&apos;s name</div>
                <input
                  name="receiverName"
                  className="text-14 work-sans-500 bg-accent-grey bg-opacity-10 placeholder:text-accent-grey border-b-[1px] border-accent-grey focus:border-none focus:outline px-2 py-[6px] w-full max-w-[396px] transition duration-300"
                  placeholder="Enter name"
                  type="text"
                  onChange={handleChange}
                />
                {formErrors.receiverName && (
                  <div className="text-red-500">{formErrors.receiverName}</div>
                )}
              </div>

              <div className="w-full">
                <div className="text-12">Receiver&apos;s email</div>
                <input
                  name="receiverEmail"
                  className="text-14 work-sans-500 bg-accent-grey bg-opacity-10 placeholder:text-accent-grey border-b-[1px] border-accent-grey focus:border-none focus:outline px-2 py-[6px] w-full max-w-[396px] transition duration-300"
                  placeholder="you@yours.com"
                  type="email"
                  onChange={handleChange}
                />
                {formErrors.receiverEmail && (
                  <div className="text-red-500">{formErrors.receiverEmail}</div>
                )}
              </div>
            </div>

            <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-3 mt-6 lg:min-w-[445px]">
              <div className="w-full">
                <div className="text-12">Receiver&apos;s number</div>
                <input
                  name="receiverNumber"
                  className="text-14 work-sans-500 bg-accent-grey bg-opacity-10 placeholder:text-accent-grey border-b-[1px] border-accent-grey focus:border-none focus:outline px-2 py-[6px] w-full max-w-[396px] transition duration-300"
                  placeholder="1234567890"
                  type="number"
                  onChange={handleChange}
                />
                {formErrors.receiverNumber && (
                  <div className="text-red-500">
                    {formErrors.receiverNumber}
                  </div>
                )}
              </div>

              <div className="w-full">
                <div className="text-12">Address line 1</div>
                <input
                  name="addressLine1"
                  className="text-14 work-sans-500 bg-accent-grey bg-opacity-10 placeholder:text-accent-grey border-b-[1px] border-accent-grey focus:border-none focus:outline px-2 py-[6px] w-full max-w-[396px] transition duration-300"
                  placeholder="Enter details"
                  type="text"
                  onChange={handleChange}
                />
                {formErrors.addressLine1 && (
                  <div className="text-red-500">{formErrors.addressLine1}</div>
                )}
              </div>
            </div>

            <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-3 mt-6 lg:min-w-[445px]">
              <div className="w-full">
                <div className="text-12">Address line 2</div>
                <input
                  name="addressLine2"
                  className="text-14 work-sans-500 bg-accent-grey bg-opacity-10 placeholder:text-accent-grey border-b-[1px] border-accent-grey focus:border-none focus:outline px-2 py-[6px] w-full max-w-[396px] transition duration-300"
                  placeholder="Enter details"
                  type="text"
                  onChange={handleChange}
                />
                {formErrors.addressLine2 && (
                  <div className="text-red-500">{formErrors.addressLine2}</div>
                )}
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
                  value={formData.country}
                  onChange={handleChange}
                  disabled
                >
                  <option disabled={true}>Select country</option>
                  {allCountries?.map((el, idx) => (
                    <option value={el.isoCode}>{el.name}</option>
                  ))}
                </select>
                {formErrors.country && (
                  <div className="text-red-500">{formErrors.country}</div>
                )}
              </div>

              <div className="w-full">
                <div className="text-12">Zip code</div>
                <input
                  name="zipCode"
                  className="text-14 work-sans-500 bg-accent-grey bg-opacity-10 placeholder:text-accent-grey border-b-[1px] border-accent-grey focus:border-none focus:outline px-2 py-[6px] w-full max-w-[396px] transition duration-300"
                  placeholder="Enter details"
                  type="text"
                  onChange={handleChange}
                />
                {formErrors.zipCode && (
                  <div className="text-red-500">{formErrors.zipCode}</div>
                )}
              </div>

              {/* <div className="w-full hidden">
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
                {formErrors.state && (
                  <div className="text-red-500">{formErrors.state}</div>
                )}
              </div> */}
            </div>

            {/* <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-3 mt-6 lg:min-w-[445px] hidden">
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
                {formErrors.city && (
                  <div className="text-red-500">{formErrors.city}</div>
                )}
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
            </div> */}

            <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-3 mt-6 lg:min-w-[445px]">
              <div className="w-full">
                <div className="text-12">Type of Delivery</div>
                <select
                  name="deliveryType"
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
                {formErrors.deliveryType && (
                  <div className="text-red-500">{formErrors.deliveryType}</div>
                )}
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
      <Loader isLoading={isLoading} />
    </div>
  );
};

export default ShippingDetails;
