import { NextResponse } from "next/server";
const stripe = require("stripe")(process.env.STRIPE_SECRET);
const taxRatesString = process.env.TAX_RATES_STRING;

// Function to retrieve active products from Stripe
const getActiveProducts = async () => {
  const checkProducts = await stripe.products.list();
  // Filter out products that are not active
  const availableProducts = checkProducts.data.filter(
    (product) => product.active === true
  );
  return availableProducts;
};

// Define the POST endpoint
export const POST = async (request) => {
  // Extract the products from the request body
  const { products, shippingDetails, freshnessProtection } =
    await request.json();

  // Get the currently active products from Stripe
  let activeProducts = await getActiveProducts();

  // try {
  //   // Loop through the received products
  //   for (const product of products) {
  //     //console.log(product);
  //     // Find the corresponding product in the active products list
  //     const stripeProduct = activeProducts?.find(
  //       (activeProduct) =>
  //         activeProduct?.name?.toLowerCase() == product?.title?.toLowerCase()
  //     );

  //     // If the product doesn't exist in Stripe, create a new one
  //     if (stripeProduct == undefined) {
  //       const newProduct = await stripe.products.create({
  //         name: product.title,
  //         // Set the default price data for the new product
  //         default_price_data: {
  //           unit_amount: product.discountedPrice * 100,
  //           currency: "eur",
  //         },
  //       });
  //     }
  //   }
  // } catch (error) {
  //   console.error("Error in creating a new product", error);
  //   throw error;
  // }

  // // Refresh the list of active products after potential additions
  // activeProducts = await getActiveProducts();

  let stripeItems = [];

  // console.log(products);
  // console.log(activeProducts);
  // Loop through the received products again
  for (const product of products) {
    // Find the corresponding product in the updated list of active products
    const stripeProduct = activeProducts?.find(
      (prod) => prod?.name?.toLowerCase() == product?.title?.toLowerCase()
    );

    // If the product exists in Stripe, add it to the list of items for checkout
    if (stripeProduct) {
      console.log(stripeProduct);
      stripeItems.push({
        price: stripeProduct?.default_price,
        quantity: product?.numOfBoxes,
        tax_rates: [taxRatesString],
      });
    }
  }

  if (freshnessProtection) {
    stripeItems.push({
      price_data: {
        currency: "eur",
        product_data: {
          name: "Freshness Protection",
        },
        unit_amount: 4.99 * 100, // 4.99 eurs in cents
      },
      quantity: 1,
    });
  }

  // console.log(products[0].info);
  // console.log(activeProducts);
  // console.log(shippingDetails);
  // console.log(products);

  function addKeysAndValuesToMetadata(obj1, obj2) {
    // Function to convert an object to have string keys and string values
    function convertObject(obj) {
      const convertedObj = {};
      for (const key in obj) {
        const newKey = String(key);
        const newValue = String(obj[key]);
        convertedObj[newKey] = newValue;
      }
      return convertedObj;
    }

    // Convert both objects
    const convertedObj1 = convertObject(obj1);
    const convertedObj2 = convertObject(obj2);

    // Merge the two converted objects into a single object
    const finalObj = { ...convertedObj1, ...convertedObj2 };

    // Create metadata object
    const metadata = {};

    // Add keys and values to metadata
    for (const key in finalObj) {
      metadata[key] = finalObj[key];
    }

    // Create paymentIntentData with metadata
    const paymentIntentData = {
      metadata: metadata,
    };

    return paymentIntentData;
  }

  // Create paymentIntentData with metadata
  const paymentIntentData = addKeysAndValuesToMetadata(
    shippingDetails,
    products[0]?.info
  );
  // console.log(paymentIntentData);

  // Create a new checkout session with the selected items
  const session = await stripe.checkout.sessions.create({
    line_items: stripeItems,
    payment_intent_data: paymentIntentData,
    payment_method_types: ["ideal", "card"],
    mode: "payment",
    success_url: process.env.SUCCESS_URL,
    cancel_url: process.env.CANCEL_URL,
    customer_email: paymentIntentData.metadata.senderEmail,
    ...paymentIntentData,
    allow_promotion_codes: true,
  });

  // Return the session URL in the response
  return NextResponse.json({ url: session.url });
};
