import React, { useEffect } from "react";
import "../style/ProductDetail.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProducts,
  removeSelectedProducts,
} from "../Redux/Action/productAction";
import { AddToCart } from "../Redux/Action/cartAction";

function ProductDetails() {
  const product = useSelector((state) => state.product);
  const { image, title, category, description, price } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();
  // console.log(product);

  useEffect(() => {
    const fetchProductDetails = async () => {
      const response = await axios
        .get(`https://fakestoreapi.com/products/${productId}`)
        .catch((err) => {
          console.log("Error: ", err);
        });
      dispatch(selectedProducts(response.data));
    };
    if (productId && productId !== "") {
      fetchProductDetails();
    }
    return () => {
      dispatch(removeSelectedProducts());
    };
  }, [productId]); // eslint-disable-next-line react-hooks/exhaustive-deps

  const addTocart = (product) => {
    dispatch(AddToCart(product));
  };

  return (
    <div>
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="single_product">
          <div className="pro_img">
            <img src={image} className="card-img-top" alt={title} />
          </div>

          <div className="card_details">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="category">{category}</p>
            <div className="buttons">
              <span className="btn btn-dark">$ {price}</span>
              <button
                className="btn btn-primary"
                onClick={() => {
                  addTocart(product);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
