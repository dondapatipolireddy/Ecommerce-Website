import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Category, Account, Cart } from "./Hello.jsx";
import { Register } from "./Login.jsx";

const Header = () => {
  return (
    <>
      <h1>SEARCH BAR</h1>
      <Link to="/register">Register</Link>
    </>
  );
};

const Footer = () => {
  return (
    <>
      <Link to="/category">Category</Link>{" | "}
      <Link to="/account">Account</Link>{" | "}
      <Link to="/cart">Cart</Link>
    </>
  );
};

const Body = () => {
  return <h1>Hello body</h1>;
};

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Body />

      {/* ✅ ALL ROUTES MUST BE HERE */}
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/category" element={<Category />} />
        <Route path="/account" element={<Account />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
