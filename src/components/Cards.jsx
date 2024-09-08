import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6"

const Cards = () => {
  return (
    <div className='w-full h-screen px-20 pt-20 flex gap-10 bg-[#CDEA68]'>
    <div className='cardContainer w-1/2'>
        <div className="card w-full h-96 rounded-xl flex items-center justify-center">
            <div className="h-full w-full relative bg-cover bg-center bg-[url('/src/assets/Photos/bird.jpg')] rounded-2xl">
                <button className='absolute flex gap-5 items-center justify-center px-5 py-1 rounded-full border-2 left-10 bottom-10'>Our Partners
                <span className='rotate-[90deg]'>
                         <FaArrowUpLong />
                 </span></button>
            </div>
        </div>
    </div>
    <div className='cardContainer flex  gap-10 w-1/2'>
        <div className="w-1/2 h-96 rounded-xl bg-cover bg-center bg-[url('/src/assets/Photos/sony.jpg')] rounded-2x"></div>
        <div className="w-1/2 h-96 rounded-xl bg-cover bg-center bg-[url('/src/assets/Photos/nv.jpg')] rounded-2x"></div>
    </div>

    </div>
  )
}

export default Cards