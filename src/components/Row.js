import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

import Moviee from './Moviee';

function Row({ title, fetchURL, rowId }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {

        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results)

        })
        // console.log(movies)

    }, [fetchURL]);

    const slideleft = () => {
        var slide = document.getElementById('slider' + rowId)
        slide.scrollLeft = slide.scrollLeft - 500;
    };
    const slideright = () => {
        var slide = document.getElementById('slider'+rowId)
        slide.scrollLeft = slide.scrollLeft + 500;
    };




    return (
        <>
            <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
            <div className='relative flex items-center group'>
                <MdChevronLeft onClick={slideleft} size={30} className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block left-0' />
                <div id={'slider' + rowId} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                    {movies.map((item, id) => (
                        <Moviee key={id} item={item}></Moviee>
                    ))}

                </div>
                <MdChevronRight onClick={slideright}size={30} className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block right-0' />

            </div>

        </>

    )
}

export default Row
