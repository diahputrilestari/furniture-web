import React from 'react'

const Hero = () => {
  return ( 
    <div className='max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[500px] relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-neutral-900'>Best</span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> <span className='text-neutral-900'>Furniture</span> Delivered</h1>
            </div>
            <img className='w-full max-h-[500px] object-cover' src="https://img.freepik.com/free-photo/gray-sofa-white-living-room-with-copy-space_43614-909.jpg?w=900&t=st=1702608978~exp=1702609578~hmac=962f432cfc7ffd16f9b76356015de0cbe1ee32a40c59db91fde1ff391c443962" alt="/" />
        </div>
    </div>
  )
}

export default Hero