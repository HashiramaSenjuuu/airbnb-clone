import React from 'react';

function Banner() {
  return <div className="relative">
      <div className="object-contain bg-black ">

      <img className="object-contain" src="https://wallpaperaccess.com/full/1841490.jpg" alt="" />

     
      </div>
      <div className="absolute top-1/2 text-white text-center w-full">

      <h1 className="text-sm sm:text-lg lg:text-6xl font-bold ">Not sure where to go? Perfect.</h1>
      <button className="text-purple-500 bg-white p-5 rounded-full font-bold active:scale-90 transition duration-150 my-3 hover:shadow-xl ">I'm flexible</button>

      </div>
  </div>;
}

export default Banner;
