import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalContext.jsx";
import LoginPage from "./components/LoginPage.jsx";

import HomePage from "./components/HomePage.jsx";
import Products from "./components/Products.jsx";
import Cart from "./components/Cart.jsx";
import Orders from "./components/Orders.jsx";
import Admin from "./components/Admin.jsx";

const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Products />} />
            <Route path="/login" element={<LoginPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
};

export default App;
