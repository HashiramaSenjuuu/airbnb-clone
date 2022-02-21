import React from 'react'
import Image from 'next/image'

function MiddleCard({img, heading, button}) {
  return (
      <div>
    <div className="relative h-96 lg:h-[550px] ">

       <Image 
       className="rounded-lg"
       src={img}
       layout="fill"
       objectFit="cover"
       alt="img"
       />

<h3 className="text-lg lg:text-5xl relative top-10 pl-7 pr-4 lg:pl-16 max-w-xs text-white font-bold ">{heading}</h3>
        <button className="bg-slate-50 font-mono relative top-10 ml-7 lg:ml-16 mt-4 text-xs sm:text-sm p-2 lg:p-5 -tracking-wide rounded-lg py-3 active:scale-90 transition duration-150 hover:shadow-xl">{button}</button>
</div>

    </div>
  )
}

export default MiddleCard