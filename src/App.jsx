import React, { useState } from 'react'
import Navbar from './components/Navbar/navbar'
import { Routes, Route } from "react-router-dom";
import Home from './Page/Home';
import Order from './Page/Order';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Cart from './Page/CartList/Cart';

function App() {
  const [showLogin,setShowLogin] = useState(false)
  return (
    
    <div className='relative'>
      {showLogin?<Login setShowLogin={setShowLogin} />:<></>}
      
    <Navbar setShowLogin={setShowLogin}/>
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
      </Routes>
      <Footer />
      
    </div>
  )
}

export default App