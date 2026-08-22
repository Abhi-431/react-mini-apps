import React, { useState } from 'react'
import Counter from '../componants/Counter'

import Blogcard from '../componants/Blogcard'
import Navbar from '../componants/Navbar'
import BlogList from './BlogList'
import Button from '../componants/Button'

const Home = () => {
  const [count,setCount]=useState(0)
 const add = () => {
    setCount(count + 1)
  }
   const Subtract = () => {
    setCount(count - 1)
  }

  return (
    <>
    <Navbar/>
    <BlogList/>
    </>
  )
}

export default Home
