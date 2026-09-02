import React, { useState } from 'react'

const TODO = (props) => {
  const [expanded,setExpended]=useState(false)
  const isLong=props.text.length>20
  const displaytext=isLong&&!expanded?
  props.text.slice(0,30)+"..."
  :props.text
  return (
    <div className='overflow-hidden border flex justify-between ps-4 pr-4 border-b-black rounded-xl'>
      <h1 className='text-2xl font-bold pr-4'>
        {displaytext}
        {isLong && (
          <button
            type='button'
            className='text-sm text-blue-600 ml-1'
            onClick={() => setExpended(!expanded)}
          >
            {expanded ? 'less' : 'more'}
          </button>
        )}</h1>
      <div className='space-x-3 p-2 flex'>
        <input
        type="checkbox"
        checked={props.state}
        onChange={() => props.onToggle(props.id)}
      />
      <p className='cursor-pointer'>🗑️</p>
      </div>
    </div>
  )
}

export default TODO