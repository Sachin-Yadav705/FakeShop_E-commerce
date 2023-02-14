import { ActionTypes } from "../contants/action-types";

const initialState = {
  cart: [],
};

export const addtocartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TO_CART:
      return { ...state, cart: [...state.cart, payload] };

    case ActionTypes.REMOVE_FROM_CART:
      const data = state.cart.filter((e) => e.id !== payload);

      return {
        ...state,
        cart: data,
      };

    default:
      return state;
  }
};
