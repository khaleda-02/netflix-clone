import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMovieById, gettrailerById, getSimillarById } from '../api'
import { FaImdb } from 'react-icons/fa'
import { Row } from '../components/Row'

export const Movie = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState()
  const [trailer, setTrailer] = useState()
  useEffect(() => {
    const link = getMovieById(id);
    axios.get(link).then((respone) => {
      setMovie(respone.data)
    })
    const trailerLink = gettrailerById(id)
    axios.get(trailerLink).then((res) => {
      setTrailer(res.data.results[0].key)
    })
  }, [id])
  return (
    <div className='w-full h-screen relative'>
      {movie?.backdrop_path && <img src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`} alt='' className="absolute object-cover w-full h-full -z-10 bottom-0" />}
      <div className='absolute bg-black/75 h-full w-full -z-5'></div>

      <div className='w-[100%] px-2 md:p-9  xl:w-[80%] mx-auto h-full  pt-[10vh] relative'>
        <div className='flex items-center justify-start gap-8 h-[90vh]'>
          <img src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`} alt='' className="hidden object-cover lg:block w-[30%] rounded" />
          <div className='p-5'>
            <h1 className='text-white text-4xl font-bold pb-3'>{movie?.original_title || movie?.title}</h1>
            <h2 className='text-white text-2xl pb-3 flex items-center justify-start gap-2 font-bold'><FaImdb className='text-yellow-500' size={45} />{movie?.vote_average}</h2>
            <p className=" text-gray-400 text-1xl font-bold">Released : {movie?.release_date}</p>
            <p className=" text-white text-[21px] pb-3 font-semibold ">Run Time  : {movie?.runtime} </p>
            <p className=" text-white text-[18px] pb-3 font-semibold `w-full  2xl:w-[70%]"> {movie?.overview}</p>
            <div className='flex items-center justify-start gap-3' >{movie?.genres.map((e, id) => (
              <p className='text-white py-2 px-4 bg-[#151515] font-bold rounded-[25px]' key={id}># {e?.name}</p>
            ))}</div>
          </div>
        </div>
      </div>
      <div className='p-4'>
        <iframe className='w-[80%] h-[500px] xl:h-[1000px] mx-auto' src={`https://www.youtube.com/embed/${trailer}`} title="YouTube video player"></iframe>
      </div>

      <div className='w-[80%] mx-auto pt-4'>
        <Row title='similar' url={getSimillarById(id)} id={id} />
      </div>

    </div>
  )
}
