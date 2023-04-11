import React from "react";
import { Link } from "react-router-dom";
import { BiSearchAlt } from 'react-icons/bi'
export const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full px-5  absolute h-[10vh] text-white z-[100] py-2 ">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          NETFLIX
        </h1>
      </Link>
      <div className="flex items-center justify-between gap-5">
        <Link to="/search">
          <button className='flex items-center justify-between gap-2 text-lg font-bold '> <BiSearchAlt size={25} /></button>
        </Link>
        <div className="border-red-600 border-2 rounded flex items-center justify-center flex-col mt-6 md:flex-row md:mt-0 ">
          <Link to="/login" className="capitalize  text-lg font-medium px-3 py-2">
            sign in
          </Link>
          <Link to="/signup" className="capitalize font-medium text-lg bg-red-600 px-3 py-2 rounded">
            sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

