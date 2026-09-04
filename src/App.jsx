import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from "./Pages/Home.jsx"
import Counter from './componants/Counter.jsx'
import SearchList from './Pages/SearchList.jsx'
import ModeChange from './Pages/ModeChange.jsx'
import TodoList from './Pages/TodoList.jsx'
import Dropdown from './Pages/Dropdown.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/counter' element={<Counter/>}/>
      <Route path='/list' element={<SearchList/>}/>
      <Route path='/mode' element={<ModeChange/>}/>
      <Route path='/todo' element={<TodoList/>}/>
      <Route path='/dropdown' element={<Dropdown/>}/>
    </Routes>
    
  )
}

export default App
