import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import { useEffect } from 'react'
import Searchandmore from './components/Searchandmore'
import News from './components/News'
import axios from 'axios'
// import { Home } from '@material-ui/icons'
import Home from './Pages/Home'
import Description from './Pages/Description'

function App() {
  
  return (
    <>
      <Nav />
      <BrowserRouter>
        <Routes>
        <Route path='home' element={<Home/>}/>  
        <Route path='*' element={<Home/>}/>  
          <Route path='/' element={<Home/>}/>   
          <Route path='description' element={<Description/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
