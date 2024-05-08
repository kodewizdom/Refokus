import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Stripes from './components/Stripes'

const App = () => {
  return (
    <div className='bg-zinc-900 w-full h-screen  font-["satoshi"] text-white'>
      <Navbar/>
      <Work/>
      <Stripes/>
    </div>
  )
}

export default App