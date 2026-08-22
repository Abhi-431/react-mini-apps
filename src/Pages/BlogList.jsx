import React from 'react'
import Blogcard from '../componants/Blogcard'
import blogs from '../assets/Data'
const BlogList = () => {
  return (
    <div className='pt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 flex p-4 m-3 sm:[flex flex-col]'>
       {blogs.map((blog)=>(
        <Blogcard key={blog.id} id={blog.id} title={blog.title} description={blog.description} path={blog.path}/>
       ))}
    </div>
  )
}

export default BlogList
