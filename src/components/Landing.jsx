import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6"
import un from '../assets/Photos/un.jpg'

const Landing = () => {
  return (
    <div className='w-full h-[82vh] bg-zinc-900 pt-1'>
        <div className='textStructure mt-52 px-20'>
        {["Create", "Design", "Deploy"].map((item, i)=>(
             <div key={i} className='masker text-[#AE70AF]/80 font-serif'>
                <div className='w-fit flex items-center py-1 px-1'>
                    {i === 1 && <div className='w-[4.5vw] overflow-hidden rounded-[3px] mr-2 border-4 border-t-sky-500 border-l-green-600 border-b-yellow-500 border-r-red-500'>
                    <img src={un} alt="colors" />
                    </div>}
                    <h1 className='uppercase text-[5vw] leading-[4vw] tracking-tight font-semibold'>{item}
                    </h1>
                </div> 
            </div>
        ))}   
        </div>
        <div className='flex justify-between items-center py-5 px-20 border-t-[1px] border-zinc-800 mt-24'>
            {["For You", "From Others"].map((item, i)=>(
                <p key={i} className='text-md tracking-[1px] font-light  leading-none'>{item}</p>
            ))}
            <div className='start flex items-center gap-3'>
                <div className='px-5 py-2 border-[1px] border-zinc-500 rounded-full font-light text-sm capitalize flex gap-4 items-center '>Start
                 <span className='rotate-[90deg] animate-pulse'>
                         <FaArrowUpLong />
                 </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Landing