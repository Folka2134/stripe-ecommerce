import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { HomePage } from "./pages/HomePage/HomePage"
import { CheckoutPage } from "./pages/Checkout/CheckoutPage";

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />}>
          </Route>
          <Route path="/checkoutpage" element={<CheckoutPage />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
