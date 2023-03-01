import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./component/Header";
import { Footer } from "./component/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrdersListScreen from "./screens/OrdersListScreen";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3" style={{ minHeight: "78vh", margin: "0% 8%" }}>
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/" element={<HomeScreen />} exacat />
          <Route path="/search/:keyword" element={<HomeScreen />} />
          <Route path="/page/:pageNumber" element={<HomeScreen />} exacat />
          <Route
            path="/search/:keyword/page/:pageNumber"
            element={<HomeScreen />}
            exacat
          />
          <Route path="/product/:id" element={<ProductScreen />} />
          <Route path="/cart/:id?" element={<CartScreen />} />
          <Route path="/shipping" element={<ShippingScreen />} />
          <Route path="/payment" element={<PaymentScreen />} />
          <Route path="/placeorder" element={<PlaceOrderScreen />} />
          <Route path="/admin/userlist" element={<UserListScreen />} />
          <Route path="/admin/user/:id/edit" element={<UserEditScreen />} />
          <Route path="/admin/productlist" element={<ProductListScreen />} />
          <Route
            path="/admin/productlist/:pageNumber"
            element={<ProductListScreen />}
          />
          <Route
            path="/admin/product/:id/edit"
            element={<ProductEditScreen />}
          />
          <Route path="/admin/orderlist" element={<OrdersListScreen />} />
          <Route path="/order/:id" element={<OrderScreen />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
