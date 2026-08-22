import React from 'react'
import { useNavigate } from 'react-router-dom'
const Blogcard = (props) => {
  const navigate = useNavigate();
  return (
    
    <div className='w-full bg-white border-gray-300 border max-w-sm overflow-hidden rounded-lg'>
        {/*Image*/}
        <div className='h-44 w-full '>
            <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" alt="" />
        </div>
        {/*Content*/}
        <div className='flex flex-col p-4 gap-3'>
             <h2 className='text-xl font-bold text-gray-800'>
                {props.id}
            </h2>
            <h2 className='text-xl font-bold text-gray-800'>
                {props.title}
            </h2>
            <p className='line-clamp-3 text-sm text-gray-600'>
              {props.description}
            </p>
            <button onClick={()=>navigate(props.path)} className='bg-blue-600  text-white mt-3 py-2 hover:bg-blue-700 inline-block text-center rounded-lg transition '>See More</button>
        </div>
    </div>
    
  
  )
}

export default Blogcard
//  <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-300">

//       {/* Image */}
//       <div className="h-40 w-full">
//         <img
//           src=""
//           alt="blog"
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Content */}
//       <div className="p-4 flex flex-col gap-3">

//         <h2 className="text-xl font-bold text-gray-800">
//           Learn React in Simple Way
//         </h2>

//         <p className="text-gray-600 text-sm">
//           React makes building interactive UIs simple. Learn components,
//           props, state, and build real-world applications step by step.
//         </p>

//         <a
//           href="https://react.dev"
//           target="_blank"
//           className="mt-2 inline-block text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//         >
//           Read More
//         </a>

//       </div>
    // </div>