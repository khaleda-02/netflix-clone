import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { requests, searchLink } from "../api"
import {useNavigate} from 'react-router-dom'

const Search = () => {
    const [movieName, setMovieName] = useState('')
    const [movieList, setMovieList] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(requests.requestTrending).then((respone) => {
            setMovieList(respone.data.results)
        })
    }, [])

    const searchHandling = () => {
        const link = searchLink(movieName);
        axios.get(link).then((respone) => {
            setMovieList(respone.data.results)
        })
    }

    let movies = movieList.map((el, id) => (
        <div className='relative w-[300px] h-[450px] cursor-pointer' key={id} >
            <div className='absolute w-full h-full   hover:bg-black/80 z-[99] opacity-0 hover:opacity-100 duration-500'>
                <p className='text-white h-full w-full flex items-center justify-center font-bold text-lg' onClick={() => {
                    navigate('/' + el?.id)
                }} >{el?.title}</p>
            </div>
            <img src={`https://image.tmdb.org/t/p/original${el?.poster_path}`} alt='' className="object-cover w-full h-full " />
        </div>))

    return (
        <div className='w-full h-screen bg-black/70'>
            <div className='w-[100%] px-2  lg:w-[80%] mx-auto h-full  py-[100px]'>
                <div className='w-full md:w-[70%] mx-auto flex items-center'>
                    <input type='text'
                        onChange={(e) => setMovieName(e.target.value)}
                        placeholder="search ..." className='w-[80%]  rounded-sm  rounded-r-none bg-gray-600  placeholder:pl-3 p-3 focus:outline-none text-white'
                    />
                    <button
                        onClick={searchHandling}
                        className=' w-[20%] capitalize bg-red-600 text-white py-3 rounded-r-sm rounded-b-sm rounded-l-none '>search</button>
                </div>
                <div className='py-3 w-full flex flex-wrap gap-2 justify-center items-center'>
                    {movies}
                </div>
            </div>
        </div>
    )
}

export default Search