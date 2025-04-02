import React, { useState } from 'react'
import Hero from '../components/Hero/Hero'
import Category from '../components/Category/Category'
import FoodDisplay from '../components/FoodDisplay/FoodDisplay';
import Download from '../components/Download/Download';
import Contact from '../components/Contact/Contact';

function Home() {
const [category,setCategory] = useState("All");
  return (
    <div className='scroll-smooth'>
        <Hero />
        <Category  category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
        <Download />
        <Contact />
    </div>
  )
}

export default Home