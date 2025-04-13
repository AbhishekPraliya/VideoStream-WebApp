import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import Video from "./Pages/Videos/Video.jsx"
import Dropdown from './Components/Dropdown/Dropdown.jsx'
const App = () => {
  const [sidebar, setSidebar] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [category, setCategory] = useState(0);
  const [dropdownDisable, setDropdownDisable] = useState(true);
  return (
    <>
      <div onClick={()=>!dropdownDisable?setDropdownDisable(true):""}>
        <Navbar setSidebar={setSidebar} darkMode={darkMode} setDropdownDisable={setDropdownDisable} setDarkMode={setDarkMode}/>
        <Routes>
          <Route exact path='/'element={<Home category={category} setCategory={setCategory} sidebar={sidebar} darkMode={darkMode} />}/>
          <Route path='/video/:categoryId/:videoId'element={<Video darkMode={darkMode} />}/>
        </Routes>
      </div>
      <Dropdown dropdownDisable={dropdownDisable} darkMode={darkMode} setDarkMode={setDarkMode} category={category} setCategory={setCategory}/>
    </>
  )
}
export default App
