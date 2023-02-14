import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../Redux/Action/productAction";

function ProductListing() {
  // const products = useSelector((state) => state);
  const dispatch = useDispatch();
  // const [Search, setSearch] = useState();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios
        .get("https://fakestoreapi.com/products")
        .catch((err) => {
          console.log("Error", err);
        });
      dispatch(setProducts(response.data));
      // setSearch(response.data);
    };

    fetchProducts();
  }, [dispatch]); // eslint-disable-next-line react-hooks/exhaustive-deps

  // console.log(Search);

  return (
    <div className="container my-5">
      <div className="row">
        <ProductComponent />
      </div>
    </div>
  );
}

export default ProductListing;
