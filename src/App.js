import Header from "./Containers/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductListing from "./Containers/ProductListing";
import ProductDetails from "./Containers/ProductDetails";

import "./App.css";
import Cart from "./Containers/Cart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<ProductListing />} />

          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/Cart" element={<Cart />}></Route>

          <Route>404 Not Found!</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
