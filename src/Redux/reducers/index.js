import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";
import { addtocartReducer } from "./cartReducer";
const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  cart: addtocartReducer,
});

export default reducers;
