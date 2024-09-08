import React from 'react'
import { motion } from "framer-motion"

const Marquee = () => {
    
  return (
    <div className='w-full py-18 border-t-2 rounded-t-3xl bg-[#AE70AF]/30 overflow-hidden'>
        <div className='flex uppercase whitespace-nowrap font-serif fent-semibold '>

        {["Legion Beckons","Legion Are Us"].map((item, i)=>(
          
             <motion.h1 key={i} initial={{x: "0"}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease:"linear", duration: 16}}  className='text-[14vw] text-[#CDEA68] font-semibold pr-20 '>Legion Beckons</motion.h1> 

        ))}  
        </div>
    </div>
  )
}

export default Marquee