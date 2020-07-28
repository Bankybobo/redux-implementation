import * as actionType from "./actionTypes";

export const removeFromCart = (index) => {
  return {
    type: actionType.REMOVE_FROM_CART,
    payload: index,
  };
};

export const clearCart = () => {
  return {
    type: actionType.CLEAR_CART,
  };
};

export const increaseQuantity = (id) => {
  return {
    type: actionType.INCREASE_QUANTITY,
    payload: id,
  };
};

export const decreaseQuantity = (id) => {
  return {
    type: actionType.DECREASE_QUANTITY,
    payload: id,
  };
};
