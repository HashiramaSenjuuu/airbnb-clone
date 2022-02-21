import React from 'react'
import Image from 'next/image'

function LargeComponent() {
  return (
    <div className=" sm:mx-10 lg:mx-24 2xl:mx-96 relative mb-16">


    <div className="relative h-96 lg:h-[600px]">
        <Image
        className=" sm:rounded-xl"
        src="https://image.cnbcfm.com/api/v1/image/104449177-RTX31IBA.jpg?v=1529452284"
        layout="fill"
        objectFit="cover"
        alt="image"
        
        />
        </div>

        <h2 className=" absolute top-12 left-12 lg:top-2/5 sm:left-28 text-3xl max-w-[200px] sm:text-5xl  lg:text-7xl font-bold tracking-wide text-white leading-snug sm:max-w-xs">Questions about hosting?</h2>
          <button className="bg-slate-50 font-mono absolute top-2/3 left-12 sm:ml-16 mt-4 text-1xl p-5 -tracking-wide rounded-lg py-3 active:scale-90 transition duration-150 hover:shadow-xl">Ask a Superhost</button>


    </div>
  )
}

export default LargeComponent