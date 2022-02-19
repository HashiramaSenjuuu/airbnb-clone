import React from 'react'

function Footer() {
  return (
    <div>
        <div className="grid grid-col-1 md:grid-cols-4 gap-9 bg-slate-100 px-5 sm:px-10 lg:px-24 py-10 ">
            

            <div className="">
                <h2 className="font-bold ">Support</h2>
                <div className="flex flex-col list-none pt-3 space-y-4 text-sm text-gray-800">
                    <li className="hover:underline">Help Centre</li>
                    <li className="hover:underline">Safety information</li>
                    <li className="hover:underline">Cancellation options</li>
                    <li className="hover:underline">Our COVID-19 Response</li>
                    <li className="hover:underline">Supporting people with disabilities</li>

                </div>
            </div>
            {/* //////////////////////////////////////////////////////////////////// */}
            <div>
                <h2 className="font-bold ">Community</h2>
                <div className="flex flex-col list-none pt-3 space-y-4 text-sm text-gray-800">
                    <li className="hover:underline">Airbnb.org: disaster relief housing</li>
                    <li className="hover:underline">Support Afghan refugees</li>
                    <li className="hover:underline">Combating discrimination</li>
                 

                </div>
            </div>
            {/* //////////////////////////////////////////////////////////////////// */}
            <div>
                <h2 className="font-bold ">Hosting</h2>
                <div className="flex flex-col list-none pt-3 space-y-4 text-sm text-gray-800">
                    <li className="hover:underline">Try hosting</li>
                    <li className="hover:underline">AirCover: protection for Hosts</li>
                    <li className="hover:underline">Explore hosting resources</li>
                    <li className="hover:underline">Visit our community forum</li>
                    <li className="hover:underline">How to host responsibly</li>

                </div>
            </div>

            {/* //////////////////////////////////////////////////////////////////// */}
            <div>
                <h2 className="font-bold ">About</h2>
                <div className="flex flex-col list-none pt-3 space-y-4 text-sm text-gray-800">
                    <li className="hover:underline">Newsroom</li>
                    <li className="hover:underline">Learn about new features</li>
                    <li className="hover:underline">Letter from our founders</li>
                    <li className="hover:underline">Careers</li>
                    <li className="hover:underline">Investors</li>

                </div>
            </div>
          {/* //////////////////////////////////////////////////////////////////// */}
            
            </div>
        </div>
    
  )
}

export default Footer