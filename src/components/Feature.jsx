import React from 'react'

const Feature = () => {
  return (
    <div className='w-full pb-20 px-20 bg-[#CDEA68]'>
        {/*<div className='w-full border-b-[1px] border-[#738145] pb-16'>
            <h1 className='text-[2.8vw] font-serif tracking-tight text-black'>Featured offerings:</h1>
        </div>*/}
        <div className='cards w-full flex gap-16 py-12'>
            <div className='w-1/2'>
               {/* <h1 className='pb-4 text-2xl font-semibold text-zinc-900'>vise</h1>*/}
                <div className="card1 relative rounded-[8px]  h-[60vh] bg-cover bg-center bg-[url('/src/assets/Photos/1unsplash.jpg')] opacity-76 border-2">
                    <h1 className='absolute right-full -translate-x-1/2 top-2/3 -translate-y-1/2 z-[9] text-4xl '><div className='w-50 h-50 absolute animate-bounce bg-[#723073] border-t-4 border-r-4 border-b-4 border-t-sky-500 border-b-yellow-500 border-r-red-500 p-2'>{"EXPLORE".split('').map((item, index)=><span className=''>{item}</span>)}</div></h1>  
                </div> 
            </div>
             <div className='w-1/2 '>
                {/*<h1 className='pb-4 text-2xl font-semibold text-zinc-900'>fydr</h1>*/}
                <div className="card2 relative rounded-[8px] h-[60vh] bg-cover bg-center bg-[url('/src/assets/Photos/2unsplash.jpg')] opacity-76 border-2">
                    <h1 className='absolute right-full translate-x-1/2 top-2/3 -translate-y-1/2 z-[9] text-4xl '><div className='w-50 h-50 absolute animate-bounce bg-[#723073] border-t-4 border-r-4 border-b-4 border-t-sky-500 border-b-yellow-500 border-r-red-500 p-2'>{"SELECTIONS".split('').map((item, index)=><span className=''>{item}</span>)}</div></h1>
                </div>
            </div>
             
        </div>
        <button className='absolute flex items-center justify-center gap-5 border-2 rounded-[8px] w-[22vw] h-[8vh] right-1/2 translate-x-1/2 bg-zinc-900 tracking-[1px] font-semibold'>VIEW MORE
        <div className='w-3 h-3 bg-zinc-100 rounded-[2px] animate-spin'>
            </div>
            </button>
    </div>
  )
}

export default Feature