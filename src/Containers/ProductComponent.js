import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../style/ProductComponent.css";
import { AddToCart } from "../Redux/Action/cartAction";
import { AiTwotoneStar } from "react-icons/ai";

function ProductComponent() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.searchedProducts);
  const renderList = products.map((product) => {
    const { id, title, image, price, category, rating } = product;

    const addTocart = (product) => {
      dispatch(AddToCart(product));
    };

    return (
      <div className="col-sm-3 " key={id}>
        <div className="card my-2 single_card" style={{ height: "25rem" }}>
          <div className="img_style">
            <span>
              {rating.rate} <AiTwotoneStar />
            </span>
            <Link to={`/product/${id}`}>
              <img src={image} alt={title} />
            </Link>
          </div>

          <div className="card-body">
            <h5 className="card-title"> {title.slice(0, 40)}...</h5>
            <p className="card-text">{category}</p>
            {/* <span className="btn btn-secondary" aria-disabled="true">
              
              </span> */}

            {/* <a href="/" className="btn btn-danger"></a> */}
            <div className="d-grid gap-2 d-md-flex justify-content-md-around">
              <button className="btn btn-dark me-md-2" type="button" disabled>
                ${price}
              </button>
              <button
                className="btn btn-danger"
                type="button"
                onClick={() => {
                  addTocart(product);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return <>{renderList}</>;
}

export default ProductComponent;
