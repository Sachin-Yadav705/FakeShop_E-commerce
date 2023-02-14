import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../style/Header.css";
import { HiShoppingCart } from "react-icons/hi";
import { BiSearchAlt2 } from "react-icons/bi";
import { searchProduct } from "../Redux/Action/productAction";

function Header() {
  const cartProduct = useSelector((state) => state.cart.cart);

  console.log(cartProduct.length);

  const dispatch = useDispatch();

  const getInput = (e) => {
    dispatch(searchProduct(e));
  };

  return (
    <div className="header_container">
      <span>
        <Link className="logo" to="/">
          FakeShop
        </Link>
      </span>

      <div className="search__bar">
        <input
          type="text"
          className="search_box"
          onChange={(ele) => getInput(ele.target.value)}
        />

        <BiSearchAlt2 />
      </div>

      <div className="cart_container">
        <Link to="/Cart">
          <HiShoppingCart />
        </Link>

        {cartProduct.length === 0 ? (
          ""
        ) : (
          <div className="cart_length">
            <span> {cartProduct.length}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
