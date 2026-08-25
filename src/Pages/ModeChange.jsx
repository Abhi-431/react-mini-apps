import React, { useState } from 'react'

const ModeChange = () => {
    const [mode,setMode]=useState(false);
  return (
    <div className={` ${mode ? "bg-gray-800":"bg-amber-100"} w-full min-h-screen flex justify-center items-center`}>
      <div
      onClick={()=>setMode(!mode)}
       className={`w-10 h-6 bg-gray-500 p-1 m-2 cursor-pointer rounded-xl ${mode ? "bg-green-400":"bg-gray-500"}`}>
        <div className={`w-4 h-4 bg-white rounded-full transition-transform
         ${mode ? "translate-x-4":"translate-x-0"} `}>
            
        </div>

      </div>
      <p className={`font-semibold ${mode ? "text-amber-100":"text-gray-800"}`}>{mode ? "Dark":"light"}</p>
    </div>
  )
}

export default ModeChange
