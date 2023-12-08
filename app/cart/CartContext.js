// CartContext.js
import { createContext, useContext, useState, ReactNode } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].numOfBoxes += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, numOfBoxes: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId.toString());
    setCart(updatedCart);
  };

  const incrementQuantity = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId.toString()
        ? { ...item, numOfBoxes: item.numOfBoxes + 1 }
        : item
    );
    setCart(updatedCart);
  };

  const decrementQuantity = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId.toString()
        ? { ...item, numOfBoxes: item.numOfBoxes > 0 ? item.numOfBoxes - 1 : 0 }
        : item
    );
    const filteredCart = updatedCart.filter((item) => item.numOfBoxes > 0);
    setCart(filteredCart);
  };

  const calculateSubtotal = () => {
    return cart.reduce(
      (acc, el) => acc + Number(el.discountedPrice * el.numOfBoxes),
      0
    );
  };

  const calculateTaxes = () => {
    const subtotal = calculateSubtotal();
    const taxRate = 0.09; // 9% tax rate (you can customize this)
    return subtotal * taxRate;
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    //const taxes = calculateTaxes();
    return subtotal;
  };

  const resetCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
        calculateTotal,
        calculateTaxes,
        calculateSubtotal,
        resetCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a cartprovider");
  }
  return context;
};

export { CartProvider, useCart };
