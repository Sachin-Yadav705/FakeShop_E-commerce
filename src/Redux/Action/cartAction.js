import { ActionTypes } from "../contants/action-types";

export const AddToCart = (cart) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: cart,
  };
};

export const removefromcart = (id) => {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: id,
  };
};
