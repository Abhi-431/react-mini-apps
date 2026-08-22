import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full p-4 fixed bg-blue-950 top-0 text-white justify-between flex z-50'>
        <span className='text-xl font-bold '>Learn?</span>
      <ul className='flex gap-12 mr-16 '>
        <li className='cursor-pointer hover:font-bold transition hover:text-blue-400 '> Home</li>
        <li className='cursor-pointer hover:font-bold transition hover:text-blue-400 '>About</li>
        <li className='cursor-pointer hover:font-bold transition hover:text-blue-400 '>SomethingElse</li>
        
      </ul>
    </nav>
  )
}

export default Navbar
