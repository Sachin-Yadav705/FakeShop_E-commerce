import { ActionTypes } from "../contants/action-types";

const initialState = {
  products: [],
  searchedProducts: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: payload,
        searchedProducts: payload,
      };

    case ActionTypes.SEARCH_PRODUCT:
      // console.log(`value = ${payload}`);
      // console.log(
      //   state.products.filter((e) =>
      //     e.title.toLowerCase().includes(payload.toLowerCase())
      //   )
      // );
      if (payload) {
        const result = state.products.filter((e) => {
          return Object.keys(e).some((key) =>
            e[key]
              .toString()
              .toLowerCase()
              .includes(payload.toString().toLowerCase())
          );
        });
        console.log(result);

        return {
          ...state,
          searchedProducts: result,
        };
      } else {
        return {
          ...state,
        };
      }

    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
