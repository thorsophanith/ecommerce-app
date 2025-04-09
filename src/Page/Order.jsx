import React, { useContext } from 'react'
import { StoreContext } from '../Stock/StoreContext';
import { Link } from 'react-router-dom';




function Order() {
    const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <div>
      <section class="bg-[#0000ff0c]  py-8 antialiased md:py-16 relative">
  <form action="#" class="mx-auto max-w-screen-xl px-4 2xl:px-0">
    <Link to={'/cart'}className="border-b text-lg border-blue-400 text-gray-50">Back Cart</Link>
      <div class="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
      
      <div class="min-w-0 flex-1 space-y-8">
       
        <div class="space-y-4">
          <h3 class="text-2xl font-semibold text-gray-50">Delivery Details</h3>

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label for="your_name" class="mb-2 block text-sm font-medium text-gray-50 "> Your name </label>
              <input type="text" id="your_name" class="block w-full rounded-lg border border-gray-300 bg-[#ffffffab] p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600   dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Bonnie Green" required />
            </div>

            <div>
              <label for="your_email" class="mb-2 block text-sm font-medium text-gray-50 "> Your email* </label>
              <input type="email" id="your_email" class="block w-full rounded-lg border border-gray-300 bg-[#ffffffab] p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600   dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="name@flowbite.com" required />
            </div>

            <div>
              <div class="mb-2 flex items-center gap-2">
                <label for="select-country-input-3" class="block text-sm font-medium text-gray-50 "> Country* </label>
              </div>
              <select id="select-country-input-3" class="block w-full rounded-lg border border-gray-300 bg-[#ffffffab] p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600   dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                <option selected>Khmer</option>
                <option value="AS">Thia</option>
                <option value="FR">Vietnam</option>
                <option value="ES">indonesia</option>
                <option value="UK">United Kingdom</option>
              </select>
            </div>

            <div>
              <div class="mb-2 flex items-center gap-2">
                <label for="select-city-input-3" class="block text-sm font-medium text-gray-50 "> City* </label>
              </div>
              <select id="select-city-input-3" class="block w-full rounded-lg border border-gray-300 bg-[#ffffffab] p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600   dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                <option selected>Kampong Cham</option>
                <option value="NY">Phnom Penh</option>
                <option value="LA">Siem Reap</option>
              </select>
            </div>

            <div>
              <label for="phone-input-3" class="mb-2 block text-sm font-medium text-gray-50 "> Phone Number* </label>
              <input type="text" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" class="z-20 block w-full rounded-lg border border-gray-300 bg-[#ffffffab] p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:border-s-gray-700    dark:placeholder:text-gray-400 dark:focus:border-primary-500" placeholder="+855:" required />
            </div>

            <div>
              <label for="email" class="mb-2 block text-sm font-medium text-gray-50 "> Email </label>
              <input type="email" id="email" class="block w-full rounded-lg border border-gray-300 bg-[#ffffffab] p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600   dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="name@flowbite.com" required />
            </div>

            <div>
              <label for="company_name" class="mb-2 block text-sm font-medium text-gray-50 "> Company name </label>
              <input type="text" id="company_name" class="block w-full rounded-lg border border-gray-300 bg-[#ffffffab] p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600   dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Flowbite LLC" required />
            </div>

            <div>
              <label for="vat_number" class="mb-2 block text-sm font-medium text-gray-50 "> VAT number </label>
              <input type="text" id="vat_number" class="block w-full rounded-lg border border-gray-300 bg-[#ffffffab] p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600   dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="DE42313253" required />
            </div>

            <div class="sm:col-span-2">
              <textarea name="text" id="" class="block w-full h-30 rounded-lg border border-gray-300 bg-[#ffffffab] p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600   dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Message" required ></textarea>
            </div>
          </div>
        </div>

        <div class="space-y-4">
          <h3 class="text-xl font-semibold text-gray-50 ">Delivery Methods</h3>

          <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div class="rounded-lg border border-gray-200 shadow-md shadow-[#ffffff48] p-4 ps-4 dark:border-gray-700">
              <div class="flex items-start">
                <div class="flex h-5 items-center">
                <input id="dhl" aria-describedby="" type="radio" name="delivery-method" value="" class="h-4 w-4 border-gray-300 " />
                </div>

                <div class="ms-4 text-sm">
                  <label for="dhl" class="font-medium leading-none text-gray-50 "> $15 - DHL Fast Delivery </label>
                  <p id="dhl-text" class="mt-1 text-xs font-normal text-gray-100 dark:text-gray-400">Get it by Tommorow</p>
                </div>
              </div>
            </div>

            <div class="rounded-lg border border-gray-200 shadow-md shadow-[#ffffff48] p-4 ps-4 dark:border-gray-700">
              <div class="flex items-start">
                <div class="flex h-5 items-center">
                <input id="fedex" aria-describedby="fedex-text" type="radio" name="delivery-method" value="" class="h-4 w-4 border-gray-300 " />
                </div>

                <div class="ms-4 text-sm">
                  <label for="fedex" class="font-medium leading-none text-gray-50 "> Free Delivery - FedEx </label>
                  <p id="fedex-text" class="mt-1 text-xs font-normal text-gray-100 dark:text-gray-400">Get it by Friday, 13 Dec 2023</p>
                </div>
              </div>
            </div>

            <div class="rounded-lg border border-gray-200 shadow-md shadow-[#ffffff48] p-4 ps-4 dark:border-gray-700">
              <div class="flex items-start">
                <div class="flex h-5 items-center">
                <input id="express" aria-describedby="express-text" type="radio" name="delivery-method" value="" class="h-4 w-4 border-gray-300 " />
                </div>

                <div class="ms-4 text-sm">
                  <label for="express" class="font-medium leading-none text-gray-50 "> $49 - Express Delivery </label>
                  <p id="express-text" class="mt-1 text-xs font-normal text-gray-100 dark:text-gray-400">Get it today</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
        <div class="flow-root">
          <div class="-my-3 divide-y divide-gray-200 dark:divide-gray-800">
            <dl class="flex items-center justify-between gap-4 py-3">
              <dt class="text-base font-normal text-gray-200 dark:text-gray-200">Subtotal</dt>
              <dd class="text-base font-medium text-gray-50 ">${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</dd>
            </dl>
            <dl class="flex items-center justify-between gap-4 py-3">
              <dt class="text-base font-normal text-gray-200 dark:text-gray-200">Delivery</dt>
              <dd class="text-base font-medium text-amber-400"> ${getTotalCartAmount()+2}</dd>
            </dl>

            <dl class="flex items-center justify-between gap-4 py-3">
              <dt class="text-base font-normal text-gray-200 dark:text-gray-200">Store Pickup</dt>
              <dd class="text-base font-medium text-gray-50 ">N/A</dd>
            </dl>

            <dl class="flex items-center justify-between gap-4 py-3">
              <dt class="text-base font-normal text-gray-200 dark:text-gray-200">Tax</dt>
              <dd class="text-base font-medium text-gray-50 ">N/A</dd>
            </dl>

            <dl class="flex items-center justify-between gap-4 py-3">
              <dt class="text-base font-bold text-gray-50 ">Total</dt>
              <dd class="text-base font-bold text-gray-50 ">${getTotalCartAmount()===0?0:2}</dd>
            </dl>
          </div>
        </div>

        <div class="space-y-3">
          <button type="submit" class="flex w-full items-center justify-center rounded-lg bg-blue-400 py-2 hover:outline-4 duration-300 cursor-pointer outline-blue-400">Proceed to Payment</button>

          <p class="text-sm font-normal text-gray-200 dark:text-gray-400">One or more items in your cart require an account. <a href="#" title="" class="font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">Sign in or create an account now.</a>.</p>
        </div>
      </div>
    </div>
  </form>
</section>
    </div>
  )
}

export default Order