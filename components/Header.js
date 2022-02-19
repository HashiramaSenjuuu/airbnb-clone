import {  SearchIcon, UserCircleIcon } from '@heroicons/react/solid'
import { MenuIcon, GlobeAltIcon } from '@heroicons/react/outline'

function Header() {
  return (
    <header className="bg-white sticky top-0 z-50 grid grid-cols-3  shadow-md">
      {/* Left */}

      <div className="relative cursor-pointer object-contain my-auto md:px-10 md:mx-10">
        <img
          className=" h-20 object-contain"
          src="https://1.bp.blogspot.com/-F-z1mGuL4BU/WIZFRpXfZ8I/AAAAAAAADvg/kNuZAUciOtcs3RgO2U9Fq7RVSClxjlSAgCLcB/s320/airbnb-logo-293-86cb5a9eea395a8233842fb74a5b59af.png"
          alt="logo"
        />
      </div>

      {/* Middle */}
      <div className="my-auto border border-gray-300  rounded-3xl  flex shadow-md md:hover:shadow-lg 
        max-w-[160px] md:max-w-sm mx-auto">
        <input
          className="py-2 px-4 bg-transparent cursor-pointer rounded-3xl bg-white outline-none md:flex-grow"
          type="text"
          placeholder="Start your search"
        />
        <SearchIcon className="h-7 w-7 my-auto mx-1 p-1 hidden md:inline-flex bg-red-400 text-white rounded-full cursor-pointer"/>
      </div>

      {/* Right */}
      <div className="flex space-x-5 m-auto items-center">
          <h5 className="hidden md:inline-flex border-gray-300 rounded-full p-2 hover:cursor-pointer hover:shadow-md hover:bg-slate-100">Become a host</h5>
          <GlobeAltIcon className="h-7 w-7 hidden md:inline-flex " />

          <div className="flex space-x-1 border border-gray-300 rounded-full p-2 hover:cursor-pointer hover:shadow-md hover:bg-slate-100">
              <MenuIcon className="h-7 w-7"/>
              <UserCircleIcon className="h-7 w-7"/>
          </div>
      </div>
    </header>
  );
}

export default Header;






