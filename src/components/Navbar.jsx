import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from '../context/AuthContext'
import { BiSearchAlt } from 'react-icons/bi'
export const Navbar = () => {
  const { user, logOut } = UserAuth()
  const navigate = useNavigate()
  const logOutHandle = () => {
    logOut()
    navigate('/')
  }
  return (
    <div className="flex justify-between items-center w-full px-5  absolute h-[10vh] text-white z-[100]">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          NETFLIX
        </h1>
      </Link>
      <div className="flex items-center justify-between gap-5">
        <Link to="/search">
          <button className='flex items-center justify-between gap-2 text-lg font-bold '> <BiSearchAlt size={25}/></button>
        </Link>
        {user ?
          (<div className="border-red-600 border-2 rounded">
            <Link to="/account">
              {/* <button className="capitalize  text-lg font-medium px-3 py-2" >
                Account
              </button> */}
            </Link>
            <button className="capitalize font-medium text-lg bg-red-600 px-3 py-2 rounded rounded-l-none" onClick={logOutHandle}>
              Log Out
            </button>
          </div>) : (<div className="border-red-600 border-2 rounded">
            <Link to="/login">
              <button className="capitalize  text-lg font-medium px-3 py-2">
                sign in
              </button>
            </Link>
            <Link to="/signup">
              <button className="capitalize font-medium text-lg bg-red-600 px-3 py-2 rounded">
                sign up
              </button>
            </Link>
          </div>)}
      </div>
    </div>
  );
};
