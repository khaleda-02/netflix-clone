import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

export const MovieCard = (props) => {
    const [like, setlike] = useState(false)
    const navigate = useNavigate()
    return (
        <div
            className='relative w-[300px] h-[200px] inline-block mr-4  overflow-hidden  cursor-pointer'>
            <div className='absolute w-full h-full   hover:bg-black/80 z-[99] opacity-0 hover:opacity-100 duration-500'>
                <p>{like ? <FaHeart className='absolute top-2 left-2 text-xl text-white  z-[100]' onClick={() => (setlike(pre => !pre))} /> : <FaRegHeart className='absolute top-2 left-2 text-xl text-white' onClick={() => (setlike(pre => !pre))} />}</p>
                <p className='text-white h-full w-full flex items-center justify-center font-bold text-lg' onClick={() => {
                    navigate('/' + props.el?.id)
                }} >{props.el?.title}</p>
            </div>
            <img src={`https://image.tmdb.org/t/p/w500/${props.el?.backdrop_path}`} alt='' className="object-cover w-full h-full " />
        </div>)
}
