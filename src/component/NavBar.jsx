import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";


const NavBar = () => {

    const Links = [
        { name: "Home", link: "/" },
        { name: "About me", link: "/about" },
        { name: "Goals", link: "/product" },
      ];
      const [open, setOpen] = useState(false);
    
  return (
    <div className="shadow-lg w-full top-0 left-0 bg-background z-50">
      <div className="container flex items-center justify-between mx-auto py-4 md:px-10 px-7">
        <div className="cursor-pointer flex items-center">
          <span className="text-[38px] h-[70px] font-[600] mb-[-12px] text-white">
            Dyne
          </span>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-5 cursor-pointer lg:hidden"
        >
          {open ? (
            <IoClose className="text-4xl text-[#bcbcbc]" />
          ) : (
            <IoMenu className="text-4xl text-[#bcbcbc]" />
          )}
        </div>

        <ul
          className={`lg:flex lg:items-center lg:pb-0  absolute lg:static text-[20px] font-[300]  lg:z-auto z-50 left-0 w-full lg:w-auto lg:pl-0 pl-6 transition-all duration-500 ease-in ${
            open ? "top-20" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="lg:mx-8 text-xl lg:my-0  my-3 ">
              <a
                href={link.link}
                className="text-white hover:text-gray-400 duration-500 navitems "
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <ul
          className={`flex lg:items-center lg:pb-0 justify-end pr-7 lg:pr-0 absolute lg:static text-[20px] font-[500]  lg:z-auto z-50 left-0 w-full lg:w-auto lg:pl-0 pl-2 transition-all duration-500 ease-in ${
            open ? "top-[250px] py-3 space-x-4" : "top-[-490px]"
          }`}
        >

          <li>
           
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
