import React, { useContext } from 'react';
import FoodItem from '../FoodItem/FoodItem';
import { StoreContext } from '../../Stock/StoreContext';

function FoodDisplay({ category }) {
    const { food_list } = useContext(StoreContext);
    return (
        <div className='max-w-[1600px] m-auto px-4 mt-10 py-10' id='category'>
            <h3 className='text-3xl font-bold py-10 mb-6'>Top dishes near you</h3>
            <div className='grid grid-cols-2 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-3'>
                {food_list.map((item) => {
                  console.log(category, item.category);
                  // Change condition to use category directly
                  if (category === "All" || category === item.category) {
                    return (
                      <div key={item._id} className='p-2'> {/* Moved key here */}
                          <FoodItem
                              id={item._id}
                              name={item.name}
                              description={item.description}
                              price={item.price}
                              image={item.image}
                          />
                      </div>
                    )
                  }
                  return null; // Ensure that you return null if the condition isn't met
                })}
            </div>
        </div>
    );
}

export default FoodDisplay;
