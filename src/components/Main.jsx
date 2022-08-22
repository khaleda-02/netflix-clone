import React, { useEffect, useState } from "react";
import { requests } from "../api";
import axios from "axios";
import { Link } from "react-router-dom";
export const Main = () => {

  const [movies, setmovies] = useState([]);
  const mov = movies[Math.floor(Math.random() * movies.length)];
  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setmovies(response.data.results);
    });
  }, []);

  return (
    <div className="w-full text-white h-[75vh] relative">
      <div className="absolute w-full h-full bg-gradient-to-tr from-black"></div>
      <div className="w-full h-full ">
        <img src={`https://image.tmdb.org/t/p/original${mov?.backdrop_path}`} alt='' className="object-cover w-full h-full -z-10" />
      </div>
      <div className="absolute top-[50%] translate-y-[-50%] left-0 w-full text-white px-4 z-10">
        <h1 className={`font-bold text-${mov?.title.length > 15 ? 3 : 5}xl md:text-5xl md:ml-7`}>{mov?.title}</h1>
        <div className="my-5 md:my-8 md:ml-7">
          <Link to={`/${mov?.id}`}>
            <button className="px-5 py-2  capitalize text-md bg-gray-300  text-black  rounded-sm font-bold  capitalize">play</button>
          </Link>
          <Link to={`/${mov?.id}`}>
            <button className="px-5 py-2 rounded-sm capitalize text-md  ml-3 bg-white/30  hover:bg-white hover:text-black font-bold">more info</button>
          </Link>
        </div>
        <p className="text-sm text-gray-400 md:ml-7">Released : {mov?.release_date}</p>
        <p className={`w-full md:w-[75%] lg:w-[50%] xl:w-[35%] mt-4 text-[25px] md:ml-7`}>{mov?.overview?.length > 250 ? mov?.overview.slice(0, 200) + " ..." : mov?.overview}</p>
      </div>
      <div className="absolute top-[20%] right-[20%] w-[400px] h-[70%] text-white hidden xl:block z-0">
        <img src={`https://image.tmdb.org/t/p/original${mov?.poster_path}`} alt='' className="object-cover w-full h-full rounded-xl" />
      </div>
    </div>
  )
};
