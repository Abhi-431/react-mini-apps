import React, { useState } from 'react'

const Counter = (props) => {
    const [count,setCount]=useState(0)
  return (
    <div className='  bg-slate-900 w-full min-h-screen flex justify-center items-center' >
       <div className='w-full border max-w-sm min-h-[400px] p-6 bg-blue-400 rounded-lg shadow  flex flex-col '>
        <h2 style={{ fontFamily: 'Poppins, sans-serif' }} className="text-xl text-white pb-4 border-b-2 font-bold fontfami text-center mb-13"> Counter App {props.name}</h2>
         <h2 className='text-4xl text-center  mb-8 font-bold rounded'>Count:{count}</h2>
      <div className="flex justify-center gap-4 mb-6">
          <button className="border-2 transition hover:bg-sky-300 border-gray-600  px-8 py-2 text-white rounded" onClick={() => setCount(count + 1)}>
            Add
          </button>
          <button className="border-2 transition hover:bg-sky-300 border-gray-600  text-white px-4 py-2 rounded" onClick={() => setCount(count - 1)}>
            Subtract
          </button>
        </div>
      <button className='border-gray-600 transition hover:bg-sky-300  text-white px-6 py-2 self-center border-2 rounded' onClick={()=>setCount(0)}>Reset</button>
       </div>
    </div>
  )
}

export default Counter
