import { createContext, useState, useEffect } from "react";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [cartItem, setCartItem] = useState(
    JSON.parse(localStorage.getItem("cartItem")) || []
  );
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("isLoggedIn")) || false
  );

  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cartItem)); 
  }, [cartItem]);

  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn)); 
  }, [isLoggedIn]);

  const addToCart = (itemId) => {
    if (!isLoggedIn) {
      window.location.href = "/login";
      return;
    }

    const existingItem = cartItem.find((item) => item.id === itemId);
    if (!existingItem) {
      setCartItem([...cartItem, { id: itemId, count: 1 }]);
    } else {
      setCartItem(
        cartItem.map((i) =>
          i.id === itemId ? { ...i, count: i.count + 1 } : i
        )
      );
    }
  };

  const removeFromCart = (itemId) => {
    if (!isLoggedIn) {
      window.location.href = "/login";
      return;
    }

    setCartItem(
      cartItem.map((i) => {
        if (i.id === itemId)
          return { ...i, count: i.count === 0 ? 0 : i.count - 1 };
        else return i;
      })
    );
  };

  const loginUser = () => setIsLoggedIn(true);
  const logoutUser = () => setIsLoggedIn(false);

  const contextValue = {
    cartItem,
    addToCart,
    removeFromCart,
    isLoggedIn,
    loginUser,
    logoutUser,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
