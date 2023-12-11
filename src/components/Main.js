import React, { useEffect, useState } from 'react'
import Request from '../Request'
import axios from 'axios'

function Main() {
    const [movies, setMovies] = useState([])
    const movie = movies[Math.floor(Math.random() * movies.length)]
    useEffect(() => {
        axios.get(Request.requestPopular).then((response) => {
            setMovies(response.data.results)
        })

    }, [])


    console.log(movie)

    return (
        <div className='w-full h-[550px] text-white'>
            <div className='w-full h-full '>
                <div className='w-full h-[550px] absolute bg-gradient-to-tr from-black'></div>
                <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title}></img>
                <div className='absolute w-full top-[25%] p-4 md:p-8'>
                    <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
                    <div className='my-4'>
                        <button className='border bg-gray-300 text-black  border-gray-300 py-2 px-5'>Play</button>
                        <button className='border  text-white border-gray-300 py-2 px-5 ml-4'>Watch Later</button>
                    </div>
                    <p className='text-gray-400 text-sm'>Released:{movie?.release_date}</p>
                    <p className='w-full text-gray-300 md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]'>{movie?.overview}</p>

                </div>

            </div>

        </div>


    )
}

export default Main
