import { createContext, useReducer } from "react";

export const CartContext = createContext({
  availableMeals: [],
  addMealToCart: () => {},
  updateCartMealQuantity: () => {},
  items: [],
});

function shoppingCartReducer(state, action) {
  if (action.type === "ADD_MEAL") {
    const updatedItems = [...state.items];

    const existingCartItemIndex = updatedItems.findIndex((cartItem) => cartItem.id === action.payload);

    const existingCartItem = updatedItems[existingCartItemIndex];
    if (existingCartItem) {
      
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      const availableMeals = [...state.availableMeals];
      const product = availableMeals.find((meal) => meal.id === action.payload);

      updatedItems.push({
        id: action.payload,
        name: product.name,
        price: +product.price,
        quantity: 1,
      });
    }
    return {
      ...state,
      items: updatedItems,
    };
  }

  if (action.type === "UPDATE_MEAL") {
    const updatedItems = [...state.items];
    const updatedItemIndex = updatedItems.findIndex(item => item.id === action.payload);
    const updateItem = { ...updatedItems[updatedItemIndex]};
    if (updateItem){
        updateItem.quantity += action.amount;
        if (updateItem.quantity <=0){
          updatedItems.splice(updatedItemIndex,1);
        }else{
          updatedItems[updatedItemIndex] = updateItem;
        }
      
    }

    return {
      ...state,
      items: updatedItems,
    }
  }

  if (action.type === "SET_MEAL") {
    return {
      ...state,
      availableMeals: action.meals,
    };
  }
}

export default function CartContextProvider({ children }) {
  const [shoppingCartState, shoppingCartDispatch] = useReducer(
    shoppingCartReducer,
    { availableMeals: [], items: [] }
  );

  function handleAddMealToCart(id) {
    shoppingCartDispatch({
      type: "ADD_MEAL", //key could be named anything.
      payload: id, //this the likely the parameter.
    });
  }

  function handleUpdateCartMealQuantity(id, amount) {
    shoppingCartDispatch({
      type: "UPDATE_MEAL",
      payload: id,
      amount: amount,
    });
  }
  function handleSetMeals(meals) {
    shoppingCartDispatch({
      type: "SET_MEAL",
      meals,
    });
  }

  const ctxValue = {
    availableMeals: shoppingCartState.availableMeals,
    addMealToCart: handleAddMealToCart,
    updateCartMealQuantity: handleUpdateCartMealQuantity,
    setMeals: handleSetMeals,
    items: shoppingCartState.items,
  };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}
