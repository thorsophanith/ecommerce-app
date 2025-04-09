import React, { useContext } from "react";
import { StoreContext } from "../../Stock/StoreContext";
import { Link, useNavigate } from "react-router-dom";
import './Cart.css'

function Cart() {
    const {cartItems,food_list,removeFromCart, getTotalCartAmount} = useContext(StoreContext);
    const navigate = useNavigate();
  return (
    <div className="">
      <section class="max-w-[1600px] m-auto bg-[#0000ff00] py-9 md:px-7 px-2 relative">
        <h1 class=" text-[#191919] text-lg font-semibold">
        <Link to={'/'}className="border-b text-lg border-blue-400 text-gray-50">Shopping</Link>
        </h1>
        <div class="md:flex items-start mt-8 gap-3 w-full">
          <div class="p-3 rounded-xl overflow-x-scroll w-full scroll-smooth">
            <table class="bg-[#ffffffad] rounded-xl w-full">
              <thead>
                <tr class=" border-b border-gray-400 text-[#7f7f7f] text-xs font-medium uppercase tracking-wide">
                  <th class="text-left px-2 py-2">Product</th>
                  <th class="px-2 py-2">price</th>
                  <th class="px-2 py-2">Quantity</th>
                  <th class="px-2 py-2">Subtotal</th>
                  <th class="w-7 px-2 py-2"></th>
                </tr>
              </thead>
              {food_list.map((item,index)=>{
                if(cartItems[item._id]>0){
                    return(
                        <tbody>
                        <tr class="text-center">
                          <td class="px-2 py-2 text-left align-top">
                            <img src={item.image} alt="test" class="w-[100px] mr-2 inline-block rounded-2xl" />
                            <span className="max-md:text-sm">{item.name}</span>
                          </td>
                          <td class="max-md:text-sm px-2 py-2">${item.price}</td>
                          <td class="max-md:text-sm p-2 mt-7 justify-around items-center flex">{cartItems[item._id]}</td>
                          <td class="max-md:text-sm px-2 py-2">${item.price * cartItems[item._id]}</td>
                          <td class="max-md:text-sm px-2 py-2">
                            <svg onClick={()=>removeFromCart(item._id)}
                              width="24"
                              class="cursor-pointer"
                              height="25"
                              viewBox="0 0 24 25"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 23.5C18.0748 23.5 23 18.5748 23 12.5C23 6.42525 18.0748 1.5 12 1.5C5.92525 1.5 1 6.42525 1 12.5C1 18.5748 5.92525 23.5 12 23.5Z"
                                stroke="#CCCCCC"
                                stroke-miterlimit="10"
                              ></path>
                              <path
                                d="M16 8.5L8 16.5"
                                stroke="#666666"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                              <path
                                d="M16 16.5L8 8.5"
                                stroke="#666666"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </svg>
                          </td>
                        </tr>
                      </tbody>
                    )
                }
              })}

              <tfoot>
                <tr class="border-t border-gray-400">
                  <td class="px-2 py-2" colspan="3">
                    <button class="px-8 cursor-pointer py-3.5 bg-[#f2f2f2] rounded-[43px] text-[#4c4c4c] text-sm font-semibold className leading-[16px]">
                      Return to shop
                    </button>
                  </td>
                  <td class="px-2 py-2" colspan="2">
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div class=" bg-[#ffffff94] rounded-lg p-4 px-6 w-full mt-4">
            <h3 class="text-[#191919] mb-2 text-xl font-medium leading-[30px]">
              Cart Total
            </h3>
            <div class="max-w-[376px] py-3 shadow-[0px_1px_0px_0px_rgba(229,229,229,1.00)] justify-between items-center flex">
              <span class="text-[#4c4c4c] text-base font-normal leading-normal">
                Total:
              </span>
              <span class="text-[#191919] text-base font-semibold leading-tight">
                ${getTotalCartAmount()===0?0:2}
              </span>
            </div>
            <div class="max-w-[376px] py-3 shadow-[0px_1px_0px_0px_rgba(229,229,229,1.00)] justify-between items-center flex">
              <span class="text-[#4c4c4c] text-sm font-normal leading-[21px]">
                Delivery:
              </span>
              <span class="text-[#191919] text-sm font-medium leading-[21px]">
                ${getTotalCartAmount()+2}
              </span>
            </div>
            <div class="max-w-[376px] py-3 shadow-[0px_1px_0px_0px_rgba(229,229,229,1.00)] justify-between items-center flex">
              <span class="text-[#4c4c4c] text-sm font-normal leading-[21px]">
                Subtotal:
              </span>
              <span class="text-[#191919] text-sm font-medium leading-[21px]">
                ${getTotalCartAmount()===0?0:getTotalCartAmount()+2}
              </span>
            </div>
            <button onClick={()=>navigate('/order')} class="cursor-pointer max-w-[376px] text-white mt-5 sm:px-10 px-3 py-3 md:py-4 bg-[#0000ff6b] hover:outline-2 outline-[blue] duration-300 rounded-[44px] gap-4 md:text-base max-md:text-sm  font-semibold leading-tight">
              Proceed to checkout
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cart;
