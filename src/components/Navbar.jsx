import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed z-[999] w-full px-20 py-8 font-serif flex justify-between items-center bg-zinc-900'>
      <div className='logo'>
        <svg width="80px" height="80px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M336 378c-72 0-130 58-130 130s58 130 130 130 130-58 130-130-58-130-130-130z" fill="#FB9E75" /><path d="M153 518l33 12v-44l-33 12v20z" fill="#AFBCF3" /><path d="M685 378c-72 0-130 58-130 130s58 130 130 130 130-58 130-130-59-130-130-130z" fill="#FB9E75" /><path d="M835 530l33-12v-20l-33-12v44z" fill="#AFBCF3" /><path d="M806 291l-48-13 48-13 13-49 14 49 48 13-48 13-14 48-13-48zM854 343l-19-4 19-4 4-19 5 19 19 4-19 4-5 19-4-19z" fill="#FDCD60" /><path d="M160 687l-21-5 21-5 5-21 5 21 21 5-21 5-5 20-5-20z" fill="#FDCD60" /><path d="M245 270m-9 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0Z" fill="#5546CB" /><path d="M289 792l-27-5 27-7 6-28 7 28 27 7-27 5-7 28-6-28z" fill="#FDCD60" /><path d="M791 767a25 25 0 1 1 25-25 25 25 0 0 1-25 25z m0-36a10 10 0 1 0 10 10 10 10 0 0 0-10-10z" fill="#5546CB" /><path d="M827 462c-20-60-76-104-143-104-79 0-145 62-150 140h-48c-5-78-70-140-150-140-67 0-123 44-143 104l-60 22v47l60 24c20 60 76 104 143 104 79 0 145-62 150-140h49c5 78 70 140 150 140 67 0 123-43 143-103l61-24v-48z m-641 68l-33-13v-19l33-12z m150 109c-72 0-130-58-130-130s58-130 130-130 130 58 130 130-58 130-130 130z m348 0c-72 0-130-58-130-130s58-130 130-130 130 58 130 130-58 130-129 130z m184-121l-33 13v-45l33 12z" fill="#584ACC" /><path d="M681 413a10 10 0 0 0-14 3l-76 116a10 10 0 0 0 3 14l5 2a10 10 0 0 0 8-4l76-116a10 10 0 0 0-2-15zM707 454a10 10 0 0 0-14 3l-38 57a10 10 0 0 0 3 14l5 2a10 10 0 0 0 8-4l38-57a10 10 0 0 0-2-15zM337 413a10 10 0 0 0-14 3l-76 116a10 10 0 0 0 3 14l5 2a10 10 0 0 0 8-4l76-116a10 10 0 0 0-2-15zM363 454a10 10 0 0 0-14 3l-38 57a10 10 0 0 0 3 14l5 2a10 10 0 0 0 8-4l38-57a10 10 0 0 0-2-15z" fill="#FFFFFF" /></svg>
      </div>
      <div className='links flex gap-10'>
        {["Services", "Work", "About", "Insights", "Contact"].map((item,i)=>(
            <a key={i} className={`text-lg capitalize font-semibold ${i === 4 && "ml-32"}`}>{item}</a>
        ))}
      </div>
    </div>
  )
}

export default Navbar