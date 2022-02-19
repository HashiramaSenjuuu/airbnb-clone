import React from 'react';

function Card({name, kilometres, img}) {
  return <div>
      <div className="object-fill w-72  mt-10 hover:cursor-pointer  hover:scale-105  transition duration-300 ease-out  ">

      <img className="rounded-t-xl h-48 object-cover " src={img} alt="image" />
      <div className="bg-pink-700 px-5 text-white h-44 rounded-b-xl">
      <h3 className="text-3xl pt-7 font-medium"> {name} </h3>
      <h4 className="pt-3">{kilometres} kilometres away</h4>
      </div>
      </div>
  </div>;
}

export default Card;
