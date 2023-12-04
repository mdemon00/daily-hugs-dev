import { NextResponse } from "next/server";
const stripe = require("stripe")(process.env.STRIPE_SECRET);

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
  const { products } = await request.json();
  // Rename 'data' to a more descriptive variable name
  const productData = products;

  // Get the currently active products from Stripe
  let activeProducts = await getActiveProducts();

  try {
    // Loop through the received products
    for (const product of productData) {
      console.log(product);
      // Find the corresponding product in the active products list
      const stripeProduct = activeProducts?.find(
        (activeProduct) =>
          activeProduct?.name?.toLowerCase() == product?.title?.toLowerCase()
      );

      // If the product doesn't exist in Stripe, create a new one
      if (stripeProduct == undefined) {
        const newProduct = await stripe.products.create({
          name: product.title,
          // Set the default price data for the new product
          default_price_data: {
            unit_amount: product.discountedPrice * 100,
            currency: "eur",
          },
        });
      }
    }
  } catch (error) {
    console.error("Error in creating a new product", error);
    throw error;
  }

  // Refresh the list of active products after potential additions
  activeProducts = await getActiveProducts();
  let stripeItems = [];

  // Loop through the received products again
  for (const product of productData) {
    // Find the corresponding product in the updated list of active products
    const stripeProduct = activeProducts?.find(
      (prod) => prod?.name?.toLowerCase() == product?.title?.toLowerCase()
    );

    // If the product exists in Stripe, add it to the list of items for checkout
    if (stripeProduct) {
      stripeItems.push({
        price: stripeProduct?.default_price,
        quantity: product?.numOfBoxes,
        tax_rates: ["txr_1OJZpcHggI5oWQYn9wAH6Zx6"],
      });
    }
  }

  // Create a new checkout session with the selected items
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card", "ideal"],
    line_items: stripeItems,
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
  });

  // Return the session URL in the response
  return NextResponse.json({ url: session.url });
};
