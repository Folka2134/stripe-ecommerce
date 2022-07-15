import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { HomePage } from "./pages/HomePage/HomePage"
import { ShoppingCart } from "./pages/ShoppingCart/ShoppingCart";

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />}>
          </Route>
          <Route path="/shoppingcart" element={<ShoppingCart />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
