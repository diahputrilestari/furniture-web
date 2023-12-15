import React, { useState } from 'react';
import { data } from '../data/data.js';

const Furniture = () => {
  //   console.log(data);
  const [furnitures, setFurnitures] = useState(data);

  //   Filter Type burgers/pizza/etc
  const filterType = (category) => {
    setFurnitures(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  //   Filter by price
  const filterPrice = (price) => {
    setFurnitures(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-neutral-700 font-bold text-4xl text-center'>
        Top Rated Furniture Items
      </h1>

      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between'>
        {/* Fliter Type */}
        <div>
          <p className='font-bold text-gray-700'>Filter Type</p>
          <div className='flex justfiy-between flex-wrap'>
            <button
              onClick={() => setFurnitures(data)}
              className='m-1 border-neutral-600 text-neutral-600 hover:bg-neutral-600 hover:text-white'
            >
              All
            </button>
            <button
              onClick={() => filterType('chair')}
              className='m-1 border-neutral-600 text-neutral-600 hover:bg-neutral-600 hover:text-white'
            >
              Chair
            </button>
            <button
              onClick={() => filterType('sofa')}
              className='m-1 border-neutral-600 text-neutral-600 hover:bg-neutral-600 hover:text-white'
            >
              Sofa
            </button>
            <button
              onClick={() => filterType('bed')}
              className='m-1 border-neutral-600 text-neutral-600 hover:bg-neutral-600 hover:text-white'
            >
              bed
            </button>
            <button
              onClick={() => filterType('cupboard')}
              className='m-1 border-neutral-600 text-neutral-600 hover:bg-neutral-600 hover:text-white'
            >
              Cupboard
            </button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className='font-bold text-gray-700'>Filter Price</p>
          <div className='flex justify-between max-w-[390px] w-full'>
            <button
              onClick={() => filterPrice('$')}
              className='m-1 border-neutral-600 text-neutral-600 hover:bg-neutral-600 hover:text-white'
            >
              $
            </button>
            <button
              onClick={() => filterPrice('$$')}
              className='m-1 border-neutral-600 text-neutral-600 hover:bg-neutral-600 hover:text-white'
            >
              $$
            </button>
            <button
              onClick={() => filterPrice('$$$')}
              className='m-1 border-neutral-600 text-neutral-600 hover:bg-neutral-600 hover:text-white'
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice('$$$$')}
              className='m-1 border-neutral-600 text-neutral-600 hover:bg-neutral-600 hover:text-white'
            >
              $$$$
            </button>
          </div>
        </div>
      </div>

      {/* Display furnitures */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {furnitures.map((item, index) => (
          <div
            key={index}
            className='border shadow-lg rounded-lg hover:scale-105 duration-300'
          >
            <img
              src={item.image}
              alt={item.name}
              className='w-full h-[200px] object-cover rounded-t-lg'
            />
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold'>{item.name}</p>
              <p>
                <span className='bg-neutral-500 text-white p-1 rounded-full'>
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Furniture;
