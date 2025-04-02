import React from 'react';
import Slider from 'infinite-react-carousel';
import { menu_list } from '../../assets/assets';

function Category({category, setCategory}) {
  return (
   <div className='max-w-[1600px] m-auto mt-3 px-4' id='category'>
    <div className='py-10 mb-7'>
    <h1 className='text-3xl font-bold py-5'>Explore our menu</h1>
    <p className='font-medium text-gray-600'>You can download or print the best Transparent Food Png collection for free. In additon, you can 
       <br /> discover our great content using our "search bar" above. Here we go!</p>
    </div>
     <div className='' style={{position: 'relative', overflow: 'hidden'}}>
      <Slider
        arrows 
        autoplay 
        autoplaySpeed={2500} // Time before the next slide
        pauseOnHover 
        slidesToShow={5}  // Show 3 slides at a time
        slidesToScroll={1} // Scroll one slide at a time
        infinite
        speed={3000} // Speed of transition
        // You could also try out additional parameters here, such as duration.
      >
        {menu_list.map((item,index)=>{
                return(
                    <div className='box' key={index} onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}>
                     <img src={item.menu_image} alt="" className={category===item.menu_name?"active":""} id='styled'/>
                     <p className='text-center max-md:text-xs'>{item.menu_name}</p>
                    </div>
                )
            })}
      </Slider>
    </div>
   </div>
  );
}

export default Category;
