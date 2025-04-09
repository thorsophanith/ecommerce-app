import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import Order from "./Page/Order";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Cart from "./Page/CartList/Cart";
import Spinner from "./components/Spinner/Spinner";
import Background from "./Background/Background";
import ProductDetail from "./Page/Details/ProductDetail";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="relative">
      <Background />
      {loading ? (
        <Spinner />
      ) : (

     <>
      {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}

      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route path="/detail/:id" element={<ProductDetail />} />
      </Routes>
      <Footer />
      </>
       )}
    </div>
  );
}

export default App;
