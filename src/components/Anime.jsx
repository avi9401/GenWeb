import React, { useState } from 'react'
import { useEffect } from 'react'

const Anime = () => {
   const [rotate, setRotate] = useState("0")

   useEffect(()=>{
    window.addEventListener("mousemove", (e)=>{
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth/2;
      let deltaY = mouseY - window.innerHeight/2;

      var angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
      setRotate(angle-180);
    })
   })
   

  return (
    <div className='eyes w-full px-20 bg-[#CDEA68] '>
        <div className="relative w-full h-[50vh] rounded-[8px] bg-cover bg-center bg-[url('/src/assets/Photos/tech1.jpg')] opacity-85 border-4 border-t-sky-500 border-l-green-600 border-b-yellow-500 border-r-red-500">
          <div className='absolute flex gap-16 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] rounded-3xl'>
            <div className='flex items-center justify-center w-[14vw] h-[14vw] bg-zinc-100 rounded-full'>
              <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
                <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
                  <div className='w-10 h-10 rounded-full bg-zinc-100'></div>
                </div>     
              </div>
            </div>
            <div className=' flex items-center justify-center w-[14vw] h-[14vw] bg-zinc-100 rounded-full'>
               <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
                <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
                  <div className='w-10 h-10 rounded-full bg-zinc-100'></div>
                </div>
                
               </div>
            </div>

          </div>
          {/*<button className='absolute p-2 w-[12vw] h-[8vh] rounded-[8px] bg-zinc-900 top-[75%] mt-5 left-1/2 -translate-x-[50%] -translate-y-[50%] border-4 hover:bg-[#4bb44b] border-zinc-100 tracking-[1px] font-semibold'>LEARN MORE
          </button>*/}
        </div>

    </div>
  )
}

export default Anime