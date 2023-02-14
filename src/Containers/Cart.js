import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../style/Cart.css";

import { useDispatch } from "react-redux";
import { removefromcart } from "../Redux/Action/cartAction";

function Cart() {
  const [price, setprice] = useState(0);
  const [quantity, setquantity] = useState(0);

  const cartproduct = useSelector((state) => state.cart.cart);

  console.log(cartproduct);

  const dispatch = useDispatch();

  const totalprice = () => {
    let price = 0;
    cartproduct.map((ele) => {
      price = ele.price + price;
    });
    setprice(price);
  };

  useEffect(() => {
    totalprice();
  }, [totalprice]);

  const increment = (item) => {
    const itemIndex = cartproduct.findIndex(item.id);

    if (itemIndex >= 0) {
      setquantity(+1);
    } else {
      setquantity(1);
    }
  };
  console.log(quantity);

  const renderitems = cartproduct.map((e) => {
    const removeitem = (id) => {
      return dispatch(removefromcart(id));
    };

    return (
      <div className="item_list" key={e.id}>
        <div className="item">
          <img src={e.image} alt={e.title} />
          <div className="item_content">
            <h3>{e.title}</h3>
            <p>{e.description}</p>
            <h3>{e.category}</h3>
            <span>{e.price}</span>
            <div className=" d-flex justify-content-around align-items-center PM_btn">
              <span style={{ fontSize: 24 }}>-</span>
              <span style={{ fontSize: 22 }}>{quantity}</span>
              <span
                style={{ fontSize: 25 }}
                onClick={() => {
                  increment(e);
                }}
              >
                +
              </span>
            </div>
            <button
              type="button"
              class="btn btn-danger"
              onClick={() => {
                removeitem(e.id);
              }}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    );
  });

  // console.log(renderitems.length);

  return (
    <>
      <div className="cart_details">
        <div className="render_items">
          {renderitems.length >= 1 ? (
            renderitems
          ) : (
            <b>
              <h3>Cart Is Empty</h3>
            </b>
          )}
        </div>
        <div className="item_summary">
          <table>
            <tr>
              <td>Total No. of Items</td>&nbsp;
              <td>:</td>&nbsp;
              <td>{cartproduct.length}</td>
            </tr>

            <tr>
              <td>Total Price:</td>&nbsp;
              <td>:</td>&nbsp;
              <td>{price}</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}

export default Cart;
