import React from 'react';

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Full of white</p>
          <p className='px-2'>Through 8/26</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://img.freepik.com/free-psd/armchair-pillow_176382-861.jpg?w=740&t=st=1702608567~exp=1702609167~hmac=f73507064f6bc6a03ea616561b2b3f43e82a4170352d4cb74eff9f3c10fb87f2'
          alt='/'
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Aesthetic Chair</p>
          <p className='px-2'>Simple and fancy</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://img.freepik.com/free-psd/chair-pillow_176382-872.jpg?w=740&t=st=1702609169~exp=1702609769~hmac=78117086dafb09f88921a9f0d2ddc6f0ce941011e4bd3eb14773383498471a49'
          alt='/'
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Grey Chair</p>
          <p className='px-2'>Perfect for you</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://img.freepik.com/free-psd/chair-pillow_176382-876.jpg?w=740&t=st=1702608319~exp=1702608919~hmac=411a984a3bb38f03f56289540778d8f6dd55db2f27f4ca3a3fe73e4fee680f03'
          alt='/'
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
