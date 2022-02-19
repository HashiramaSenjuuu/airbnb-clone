import React from 'react';
import Card from './Card';

function Section() {
  return <div className="mx-5 sm:mx-10 lg:mx-24 2xl:mx-96 mt-14  bg-white">
      <h2 className="text-4xl font-semibold tracking-wide ">Inspiration for your next trip</h2>
      <div className="flex space-x-5 justify-between  overflow-scroll  max-w-full scrollbar-hide p-2 -ml-2">

      <Card
      name ="Puducherry"
      kilometres="560"
      img="https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2021/07/puducherry-sea.jpg?fit=1024%2C682&ssl=1"
      />
      <Card
      name="Kerela"
      kilometres="740"
      img="https://static.toiimg.com/photo/68007534.cms"
      />
      <Card
      name="Kedarnath"
      kilometres="105"
      img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW5pjfTZ4AekMwmPKCwp2ZKK1aTTo7Q6Fo1g&usqp=CAU"
      />
      <Card
      name="Goa"
      kilometres="1005"
      img="https://images.hindustantimes.com/img/2021/09/20/550x309/75dbc9f2-1a08-11ec-8372-9724726ad21c_1632138665200.jpg"
      />
      
      
      
      </div>

      <h2 className="text-4xl font-semibold tracking-wide mt-14">Discover Airbnb Experience</h2>
{/* //////////////////////////////////////////////////////////////////// */}
       <div className=" flex overflow-x-auto space-x-3 justify-between ">

      <div className="mt-10  ">
        <img className="h-3/5 w-full top-0 object-cover rounded-lg" src="https://images.unsplash.com/photo-1504150558240-0b4fd8946624?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHRyYXZlbGxpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" alt="" />
        <h3 className="text-lg lg:text-5xl relative -top-2/4 pl-7 pr-4 lg:pl-16 max-w-xs text-white font-bold ">Things to do on your trip</h3>
        <button className="bg-slate-50 font-mono relative -top-2/4 ml-7 lg:ml-16 mt-4 text-xs sm:text-sm p-2 lg:p-5 -tracking-wide rounded-lg py-3 active:scale-90 transition duration-150 hover:shadow-xl">Experiences</button>
      </div>



      <div className="mt-10 ">
        <img className="h-3/5 w-full top-0 object-cover rounded-lg"src="https://images.unsplash.com/photo-1516685304081-de7947d419d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsbGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt="" />
        <h3 className=" text-lg lg:text-5xl relative -top-2/4 pl-7 pr-4 lg:pl-16 max-w-xs text-white font-bold ">Things to do from home</h3>
        <button className="bg-slate-50 font-mono relative -top-2/4 ml-7 lg:ml-16 mt-4 text-xs sm:text-sm px-0  lg:p-5 -tracking-wide rounded-lg py-3 active:scale-90 transition duration-150 hover:shadow-xl">Online Experiences</button>
      </div>


       </div>

       {/* //////////////////////////////////////////////////////////////////// */}
        

        <div className="relative mb-10">
          <img className="rounded-lg  max-h-[680px] w-full  -mt-28 sm:-mt-40 lg:-mt-60  " src="https://image.cnbcfm.com/api/v1/image/104449177-RTX31IBA.jpg?v=1529452284" alt="" />
          <h2 className=" absolute top-12 left-12 lg:top-2/5 sm:left-28 text-3xl max-w-[200px] sm:text-5xl  lg:text-7xl font-bold tracking-wide text-white leading-snug sm:max-w-xs">Questions about hosting?</h2>
          <button className="bg-slate-50 font-mono absolute top-2/3 left-12 sm:ml-16 mt-4 text-1xl p-5 -tracking-wide rounded-lg py-3 active:scale-90 transition duration-150 hover:shadow-xl">Ask a Superhost</button>
        </div>
        

   

  </div>;
}

export default Section;


// grid-cols-1 sm:grid-cols-4 md:grid-cols-4




// grid grid-flow-col grid-rows-1 sm:grid-flow-row sm:grid-cols-2 gap-10