import React from 'react';
import hero from '../../assets/hero.png';

function Hero() {
  return (
    <div className="w-full px-4">
      <div className="max-w-[1600px] m-auto p-4 rounded-2xl relative hover:outline-blue-200 hover:outline-2 bg-[#aaaaff41] duration-500 shadow-lg shadow-[#0000009d]">
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-7 py-20 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-4xl mb-4 font-medium text-gray-50"> Order Your
        <br className="hidden lg:inline-block "/> Favorite Food Here
      </h1>
      <p className="mb-8 leading-relaxed text-gray-50">The crust is very thin at the base, and the dough puffs up on the sides, which results in an airy crust with charred 'leopard spots' when baked properly.</p>
      <div className="flex justify-center">
      <button className="border text-base sm:text-lg border-sky-400 duration-300 hover:bg-blue-800 text-white font-bold cursor-pointer bg-blue-600 py-2 px-6 rounded-full mt-4">
           <a href="#pro"> View Menu</a>
          </button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src={hero}/>
    </div>
  </div>
</section>
      </div>
    </div>
  );
}

export default Hero;

