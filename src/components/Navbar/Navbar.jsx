import React, { useContext, useState } from 'react';
import { CiSearch } from "react-icons/ci";
import logo from '../../assets/logo/logo.png';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Stock/StoreContext';
import './Navbar.css'
import { IoHomeOutline } from "react-icons/io5";
import { BiCategory } from "react-icons/bi";

function Navbar({ setShowLogin }) {
  const [menu, setMenu] = useState("menu");
  const { getTotalCartAmount } = useContext(StoreContext); // Corrected function name

  return (
    <>
    <div className='w-full sticky z-30 top-0 bg-[#ffffffaf]'>
      <div className='max-w-[1600px] px-4 m-auto flex justify-between items-center p-3'>
        <div>
          <a href="#"><img src={logo} alt="Logo" className='w-[170px] max-sm:w-[140px]' /></a>
        </div>
        <div className='flex space-x-5 max-md:text-sm md:space-x-9 lg:space-x-16 max-sm:hidden'>
          <Link to={'/'} onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
          <a href='#category' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Category</a>
          <a href='#app' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Download-app</a>
          <a href='#contact' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</a>
        </div>
        <div className='flex items-center space-x-3 lg:space-x-7'>
          <a className='text-3xl max-md:text-2xl'><CiSearch /></a>
          <p className='max-sm:hidden'><Link to='/cart' onClick={() => setMenu("cart")} className={menu === "cart" ? "active" : ""}>
            <img src={assets.basket_icon} alt="Basket Icon" className={getTotalCartAmount()=== 0? "" : "dost"} />

          </Link></p>
          <a onClick={() => setShowLogin(true)} className='max-md:text-xs border border-gray-400 duration-300 hover:inline-4 px-2.5 hover:bg-blue-600 hover:text-white py-1 rounded-full'>Sign in</a>
        </div>
      </div>
    </div>

     <section className=' navdown w-full bg-[#ffffffea] shadow-lg shadow-sky-200 hover:shadow-sky-500 duration-300 px-4 rounded-4xl z-30 sm:hidden'>
        <div className='flex gap-10 items-center justify-around'>
        <Link to={'/'} onClick={() => setMenu("home")} className={menu === "home" ? "" : ""}> <div className='hover:bg-blue-200 duration-300 px-5 py-[18px] rounded-full'><IoHomeOutline className='text-xl'/></div> </Link>
        <a href='#category' onClick={() => setMenu("menu")} className={menu === "menu" ? "" : ""}><div className='hover:bg-blue-200 duration-300 px-5 py-[18px] rounded-full'><BiCategory className='text-xl'/></div> </a>
        <Link to='/cart' onClick={() => setMenu("cart")} className={menu === "cart" ? "active" : ""}>
            <img src={assets.basket_icon} alt="Basket Icon" className={getTotalCartAmount()=== 0? "" : "dost1"} />
          </Link>
        </div>
      </section>
    </>
  );
}

export default Navbar;
