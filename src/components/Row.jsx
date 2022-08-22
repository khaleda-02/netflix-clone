import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { MovieCard } from './MovieCard'
export const Row = (props) => {
    const [movies, setmovies] = useState([])


    useEffect(() => {
        axios.get(props.url).then((res) => {
            setmovies(res.data.results)
        })
    }, [props.url])

    let x = movies.map((el, id) => (
        <MovieCard el={el} key={id} />
    )
    )

    function leftMoving(id) {
        const slider = document.getElementById('slider' + id)
        slider.scrollLeft = slider.scrollLeft - 300
    }

    function rightMoving(id) {
        const slider = document.getElementById('slider' + id)
        slider.scrollLeft = slider.scrollLeft + 300
    }

    return (
        <div className='my-3 p-2 group'>
            <h1 className='text-white font-bold text-2xl px-3 capitalize'>{props.title}</h1>
            <div className='relative my-4 '>
                <MdChevronLeft onClick={() => leftMoving(props.id)} className='hidden group-hover:block text-white border rounded-[50%] text-4xl hover:bg-slate-300 hover:text-black absolute left-0 mx-2 cursor-pointer top-[50%] translate-y-[-50%] z-[999]' />
                <div id={'slider' + props.id} className=' w-full h-full whitespace-nowrap overflow-x-scroll  scroll-smooth scrollbar-hide relative ' >
                    {x}
                </div>
                <MdChevronRight onClick={() => rightMoving(props.id)} className='hidden group-hover:block text-white border rounded-[50%] text-4xl hover:bg-slate-300 hover:text-black absolute right-0 mx-2 cursor-pointer top-[50%] translate-y-[-50%] z-[999]' />
            </div>
        </div>
    )
}
