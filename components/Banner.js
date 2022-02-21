import React from 'react';
import Image from 'next/image'

function Banner() {
  return <div className="relative">
      <div className="relative h-[300px] sm:h-[700px] lg:h-screen
        bg-black  ">

      <Image  src="https://wallpaperaccess.com/full/1841490.jpg" 
      layout='fill'
      objectFit='cover'
      alt="image"
    
       />

     
      </div>
      <div className="absolute top-1/2 text-white text-center w-full">

      <h1 className="text-sm sm:text-lg lg:text-6xl font-bold ">Not sure where to go? Perfect.</h1>
      <button className="text-purple-500 bg-white p-5 rounded-full font-bold active:scale-90 transition duration-150 my-3 hover:shadow-xl ">I am flexible</button>

      </div>
  </div>;
}

export default Banner;
