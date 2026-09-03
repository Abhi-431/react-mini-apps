import React, { useState } from 'react'
import Navbar from '../componants/Navbar'
import TODO from '../componants/TODO'
const TodoList = () => {
    const [item,setItem]=useState('')
    const [itemlist,setitemList]=useState([])

    const [showCompleted, setShowCompleted] = useState(false)

    const addTodo=(e)=>{
        e.preventDefault();
        if(item.trim()==='')return;
        const newItem={
            id:Date.now(),
            text:item,
            state:false
        }
        setitemList([...itemlist,newItem])

        setItem('')
        
    }
   const toggle = (id) => {
  setitemList(itemlist.map((todo) =>
    todo.id === id ? { ...todo, state: !todo.state } : todo
  ))
   }


  const toggleShowCompleted = (e) => {
    e.preventDefault()
    setShowCompleted(!showCompleted)
  }

  const displayedTodos = showCompleted
    ? itemlist.filter((val) => val.state === true)
    : itemlist


  return (
    <div className='w-full h-screen bg-red-300 relative pt-16 flex items-center  justify-center'>
      <Navbar className='sticky top-0 z-50'/>
      <div className=' w-full overflow-y-auto scroll-auto h-4/5 m-4 p-2 flex rounded-2xl bg-amber-50 justify-center  border-4'>
      <div className='w-11/12  border-2 justify-between bg-amber-900 border-gray-600 h-12'>
      <form className='flex justify-between' onSubmit={addTodo}>
        <input className='overflow-hidden rounded-2xl bg-amber-50 p-1 w-sm m-1'
          value={item}
           placeholder='type TODO.....' 
           type="text" 
           onChange={(e)=>setItem(e.target.value)}/>
        <button className='border w-32 rounded-2xl bg-amber-50 m-1'type='submit'>Add</button>
         <button  className='border rounded-2xl bg-amber-50 w-32 m-1' type='button' onClick={toggleShowCompleted}>
              {showCompleted ? 'Show All' : 'Show Completed'}
            </button>
       
      </form>
       <ul className='space-y-2 pt-2'>
        
            {displayedTodos.map((val) => (
                <TODO
                  key={val.id}
                  id={val.id}
                  onToggle={toggle}
                  text={val.text}
                  state={val.state}/>
            ))
        }
      </ul>
    </div>
  </div>
</div>
  )
}

export default TodoList
