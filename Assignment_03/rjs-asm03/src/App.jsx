import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Auth/LoginPage.jsx";
import RegisterPage from "./pages/Auth/RegisterPage.jsx";
import Cart from "./pages/Cart/CartPage.jsx";
import Checkout from "./pages/Cart/CheckoutPage.jsx";
import Detail from "./pages/Detail/DetailPage.jsx";
import Home from "./pages/Home/HomePage.jsx";
import Shop from "./pages/Shop/ShopPage.jsx";
import RootModal from "./components/LiveChat/LiveChat.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/detail/:productId"
          element={<Detail />}
        />
        <Route
          path="/cart"
          element={<Cart />}
        />
        <Route
          path="/shop"
          element={<Shop />}
        />
        <Route
          path="/checkout"
          element={<Checkout />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/register"
          element={<RegisterPage />}
        />
      </Routes>
      <RootModal />
    </BrowserRouter>
  );
}

export default App;
