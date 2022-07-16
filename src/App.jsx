import React, { useState, useEffect } from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";

import { commerce } from "./lib/commerce";
import { NavBar } from "./components/NavBar";
import { HomePage } from "./pages/HomePage/HomePage"
import { ShoppingCart } from "./pages/ShoppingCart/ShoppingCart";

const App = () => {
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    const { data } = await commerce.products.list()
    setProducts(data)
  }

  useEffect(() => {
    fetchProducts()
  }, []);

  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage products={products} />}>
          </Route>
          <Route path="/shoppingcart" element={<ShoppingCart />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
