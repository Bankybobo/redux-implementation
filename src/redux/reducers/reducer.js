import * as actionTypes from "../actions/actionTypes";
import cart from "../../cart-items";

let totalAmount1 = cart.reduce((x, y) => {
  return x + y.amount * y.price;
}, 0);
const initialState = {
  cart,
  total: totalAmount1,
};
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.REMOVE_FROM_CART:
      let dummyCart = [...state.cart].filter((item) => {
        return item.id !== payload;
      });
      let totalAmount = dummyCart.reduce((x, y) => {
        return x + y.amount * y.price;
      }, 0);
      return {
        ...state,
        cart: [...dummyCart],
        total: totalAmount,
      };
    case actionTypes.CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    case actionTypes.INCREASE_QUANTITY:
      let dumCart = [...state.cart];
      let found = dumCart.find((item) => {
        return item.id === payload;
      });
      if (found) found.amount++;
      let totalAmount2 = dumCart.reduce((x, y) => {
        return x + y.amount * y.price;
      }, 0);
      return {
        ...state,
        cart: dumCart,
        total: totalAmount2,
      };
    case actionTypes.DECREASE_QUANTITY:
      let duCart = [...state.cart];
      let founded = duCart.find((item) => {
        return item.id === payload;
      });
      if (founded && founded.amount > 1) founded.amount--;
      let totalAmount3 = duCart.reduce((x, y) => {
        return x + y.amount * y.price;
      }, 0);
      return {
        ...state,
        cart: duCart,
        total: totalAmount3,
      };
    default:
      return state;
  }
};
export default reducer;
