import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { StoreContext } from '../../Stock/StoreContext';
import { assets } from '../../assets/assets'

function ProductDetail() {
  const { id } = useParams();
  const {cartItems, addToCart} = useContext(StoreContext);
  const { food_list } = useContext(StoreContext);

  const product = food_list.find(item => item._id === id || item.id === id);

  if (!product) return <p className='text-white p-4'>Product not found</p>;

  return (
    <div className="max-w-7xl mx-auto p-4 text-white relative">
<section class="text-gray-600 body-font overflow-hidden">
  <div class="container w-full py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt={product.name} class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-xl" src={product.image}/>
      <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h3 class="text-sm title-font text-gray-300 tracking-widest">BRAND NAME</h3>
        <h1 class="text-gray-50 text-3xl max-md:text-2xl title-font font-medium mb-1">{product.name}</h1>
        <div class="flex max-sm:grid grid-cols-1 sm:grid-cols-2 gap-5 mt-3 mb-4">
          <span class="flex items-center">
          <img src={assets.rating_starts} alt="" width={90}/>
          </span>
          <span className='flex items-center'>
          <span class="text-gray-300 ml-3 text-sm">4 Reviews</span>
          <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
            <a class="text-blue-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="text-sky-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a class="text-green-300">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
          </span>
        </div>
        <p class="leading-relaxed text-gray-200">{product.description}</p>
        <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
        <p className='text-gray-200'>Items : {cartItems[id]}</p>
        </div>
        <div class="flex justify-center-safe md:gap-10 max-md:justify-between items-center max-w-[400px] m-auto">
          <span class="title-font font-medium text-xl text-gray-200">${product.price}</span>
          <Link to='/cart' onClick={()=>addToCart(id)}><button class="flex ml-auto text-white bg-[#0000ff60] hover:bg-[#0000ff00] cursor-pointer duration-300 border-0 py-2 px-5 max-md:text-sm max-sm:text-xs outline-2 outline-amber-50 rounded-full">Add to cart</button></Link>
          <button class="rounded-full w-8 h-8 bg-[#ffffff6c] cursor-pointer hover:bg-[#0000ff59] hover:outline-2 hover:outline-amber-50 duration-300 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  );
}

export default ProductDetail;