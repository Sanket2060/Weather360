import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import { createContext } from 'react'
import { useEffect } from 'react'
import Searchandmore from './components/Searchandmore'
import News from './components/News'
import axios from 'axios'
// import { Home } from '@material-ui/icons'
import Home from './Pages/Home'
import Description from './Pages/Description'
export const searchcontext = createContext();

function App() {
  const [searchinput, setsearchinput] = useState("");
  
  return (
    <>
      <Nav />
      <BrowserRouter>
          <searchcontext.Provider value={{ searchinput, setsearchinput }}>
        <Routes>
            <Route path='home' element={<Home />} />
            <Route path='*' element={<Home />} />
            <Route path='/' element={<Home />} />
            <Route path='description' element={<Description />} />
        </Routes>
          </searchcontext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App
