import React, { useState } from 'react'
import { Link,  useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

export const Signup = () => {
  
  const {user,signUp} = UserAuth()
  const [email, setEmail] = useState('')
  const [password, setPasswod] = useState('')
  const navigate = useNavigate()
  async function  handling(e) {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate('/')
    } catch (error) {
    }
  }
  
  return (
    <div className='text-white'>
      <img className=' hidden md:block absolute -z-10 h-full w-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/0f07b807-7be1-457d-be88-eb9153d5d4e9/a5922be6-d71b-40e8-bfe1-4aece580037b/PS-en-20220815-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />
      <div className='absolute bg-gradient-to-tr from-black h-full w-full -z-5'></div>
      <div className='absolute z-40 w-full px-4 top-[20%]'>
        <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
          <div className='max-w-[320px] mx-auto py-16'>
            <h1 className='text-3xl font-bold capitalize'>Sign Up </h1>
            <form className='mt-4' onSubmit={handling}>
              <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email" className='py-2 w-full my-2  bg-gray-600 placeholder:pl-2 italic' />
              <input onChange={(e)=>setPasswod(e.target.value)} type="password" placeholder="Password" className='py-2 w-full my-2 bg-gray-600 placeholder:pl-2 italic' />
              <button className="bg-red-600 px-3 py-2 text-lg cursor-pointer w-full block my-2 ">Sign Up</button>
            </form>
            <div className='flex justify-between items-center px-1 my-3 text-gray-500'>
              <p>
                <input type='checkbox' className='mr-2' />
                Remmber me
              </p>
              <p>Need Help ?</p>
            </div>
            <p className='text-gray-500 px-1'>Already subcribed to Netflix ?
              <Link to='/login'>
                <span className='capitalize text-white'> Sign up</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
