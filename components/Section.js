import React from 'react';
import Card from './Card';


import MiddleCard from './MiddleCard';

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
        {/* ////////////////////////////////////////////////////////////////////////////////////////*/}
        <div>
        <h2 className="text-4xl font-semibold tracking-wide mt-14">Discover Airbnb Experience</h2>

        <div className="grid grid-flow-row sm:grid-cols-2 gap-7 mt-12">
          <MiddleCard
          img="https://images.unsplash.com/photo-1504150558240-0b4fd8946624?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHRyYXZlbGxpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          heading="Things to do on your trip"
          button="Experiences"
          />
          <MiddleCard
          img="https://images.unsplash.com/photo-1516685304081-de7947d419d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsbGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
          heading="Things to do from home"
          button="Online Experiences"
          />

          </div>
        </div>


{/* ////////////////////////////////////////////////////////////////////////////////////////*/}


         
         </div>;
}export default Section;