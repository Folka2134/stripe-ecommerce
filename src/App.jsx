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
  const [cart, setCart] = useState({})

  const featuredProducts = []

  const fetchProducts = async () => {
    const { data } = await commerce.products.list()
    setProducts(data)
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve())
  }

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity)
    setCart(item.cart)
  }

  const emptyCart = async () => {
    const { cart } = await commerce.cart.empty()
    setCart(cart)
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
    fetchCart()
  }, []);

  fetchFeaturedProducts()

  // console.log(cart);
  return (
    <Router>
      <div className="bg-slate-100">
        <NavBar emptyCart={emptyCart} />
        <Routes>
          <Route exact path="/" element={<HomePage products={products} featuredProducts={featuredProducts} handleAddToCart={handleAddToCart} />}>
          </Route>
          <Route path="/shoppingcart" element={<ShoppingCart cart={cart.line_items} />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
