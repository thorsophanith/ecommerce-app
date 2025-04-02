import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Stock/StoreContext'

function FoodItem({id,name,price,description,image}) {
  const {cartItems, addToCart,removeFromCart} = useContext(StoreContext);
  return (
    <div className='flex'>
        <div className='relative duration-500'>
           <div className=''>
           <img src={image} alt="" />
           {!cartItems[id]
           ?<img className='absolute top-0 left-2 mt-2 cursor-pointer w-10' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt=''/>
           :<div className='flex gap-2 mt-2 cursor-pointer items-center'>
            <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" className='w-6'/>
            <p>{cartItems[id]}</p>
            <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" className='w-6'/>
           </div>
           }
           </div>
            <p className='py-1.5'>{name}</p>
            <img src={assets.rating_starts} alt="" />
            <p>{description}</p>
            <p>${price}</p>
        </div>
    </div>
  )
}

export default FoodItem