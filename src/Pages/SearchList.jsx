import React, { useState } from 'react'

const SearchList = (props) => {
    const [item,setItem]=useState('')
    const [listItem,setListitem]=useState([])
    const[search,setSearch]=useState('')
    const handleAddItem=(e)=>{
        e.preventDefault();
        if(item.trim()==='')return;
         // Create a new item object with a unique ID
    const newItem = {
      id: Date.now(), // Unique ID based on time
      text: item
    };
    setListitem([...listItem,newItem]);
    setItem('')
    }
    // 2. Filter the items list based on the search term before rendering
  const filteredItems = listItem.filter((obj) =>
    obj.text.toLowerCase().includes(search.toLowerCase())
  );
    
  return (
    <div>
      <h1 className='font-semibold'>hello this is list </h1>
      <form onSubmit={handleAddItem}>
        <input type="text" 
       className=' border p-2 m-4'
       placeholder='type anything .....'
       value={item}
       onChange={(e)=>setItem(e.target.value)}/>
       <button type='submit'>submit</button>
        </form>
       
           <input 
        type="text" 
        placeholder='Search here....'
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        className=' border p-2 m-4'
         />
         
      <ul>
        {
            filteredItems.map((things)=>(
                <li key={things.id} >{things.text}</li>
            ))
        }
      </ul>
        {/* Optional: Show a message if nothing matches the search */}
      {filteredItems.length === 0 && listItem.length > 0 && (
        <p className='text-gray-500'>No items match your search.</p>
      )}

    </div>
  )
}

export default SearchList
