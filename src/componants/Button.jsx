import React from 'react'

const Button = ({count,label,onClick}) => {
  return (
    <div className="h-96 w-48 bg-amber-900 ">
      <p>{count}</p>
    <button
      className="text-cyan-100 text-lg border-4 border-gray-400 
                 rounded-br-lg rounded-tl-lg bg-amber-500 
                 px-6 py-2 hover:scale-105 transition"
      onClick={onClick}
    >
      {label}{count}
    </button>
    </div>
  )
}

export default Button
