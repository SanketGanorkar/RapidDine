import { createContext,useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);
  const StoreContextProvider = (props) => {

  const [cartItems, setCartItems] = useState({});

  const addtoCart = (itemId) => {
    // if user adds item in cart for first time, the below code gets executed
    if (!cartItems[itemId]) {
      // if not in cart , we insert in it.
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      // if already present , we increase its value
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removefromCart = (itemId) => {
    
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      // if the above matches it means that it is present in cart
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };
  // using the contextValue we can access the food_list anywhere.
  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addtoCart,
    removefromCart,
    getTotalCartAmount
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
