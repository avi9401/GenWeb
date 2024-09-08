import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Marquee from './components/Marquee'
import About from './components/About'
import Anime from './components/Anime'
import Feature from './components/Feature'
import Cards from './components/Cards'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='w-full min-h-screen text-white bg-zinc-900'> 
      <Navbar />
      <Landing />
      <Marquee />
      <About />
      <Anime />
      <Feature />
      <Cards />
      <Footer />
    </div>
  )
}

export default App