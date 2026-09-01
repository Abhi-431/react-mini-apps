import React from 'react'

const TODO = (props) => {
  return (
    <div>
      <h1 className='text-2xl font-bold'>{props.text}</h1>
      <input
        type="checkbox"
        checked={props.state}
        onChange={() => props.onToggle(props.id)}
      />
    </div>
  )
}

export default TODO