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
  const featuredProducts = []

  const fetchProducts = async () => {
    const { data } = await commerce.products.list()
    setProducts(data)
  }

  const fetchFeaturedProducts = () => {
    for (let i = 0; i < products.length; i++) {
      for (let j = 0; j < products[i].categories.length; j++) {
        if (products[i].categories[j].name === "featured") {
          featuredProducts.push(products[i])
        }
      }
    }
  }

  useEffect(() => {
    fetchProducts()
  }, []);

  fetchFeaturedProducts()

  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage products={products} featuredProducts={featuredProducts} />}>
          </Route>
          <Route path="/shoppingcart" element={<ShoppingCart />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
