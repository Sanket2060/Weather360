import { useState} from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Nav from './components/Nav'
import { createContext } from 'react'
import { useEffect } from 'react'
import Searchandmore from './components/Searchandmore'
import News from './components/News'
import axios from 'axios'
// import { Home } from '@material-ui/icons'
import Home from './Pages/Home'
import Description from './Pages/Description'
import Aboutus from './Pages/Aboutus'
import Contactus from './Pages/Contactus'
export const searchcontext = createContext();

function App() {
  const [searchinput, setsearchinput] = useState("");
  const [dropdownclick,setdropdownclick]=useState(false);
   useEffect(() => {
      let elem=document.getElementsByClassName("dropdownmenu")[0];
      elem.classList.toggle("invisible");
    
    
      
  },[dropdownclick]);
  return (
    <>
      <div className="positionedrelative relative ">
        <Nav setdropdownclick={setdropdownclick} dropdownclick={dropdownclick}/>
        <BrowserRouter>
          <div className="dropdownmenu flex flex-col justify-between text-lg absolute top-[65px] left-[1145px] text-white bg-black visible hover:cursor-pointer">
            <Link to="/Home"><div className="Home p-4  text-inherit hover:bg-white hover:text-black">Home</div></Link>
            {/* <Link to="/Description"> <div className="Description p-4 text-inherit  hover:bg-white hover:text-black">Description</div></Link> */}
            <Link to="/Aboutus"> <div className="Aboutus p-4 text-inherit  hover:bg-white hover:text-black">About us</div></Link>
            <Link to="/Contactus">   <div className="Contactus p-4 text-inherit  hover:bg-white hover:text-black">Contact us</div></Link>
          </div>

          <searchcontext.Provider value={{ searchinput, setsearchinput }}>
            <Routes>
              <Route path='home' element={<Home />} />
              <Route path='*' element={<Home />} />
              <Route path='/' element={<Home />} />
              <Route path='description' element={<Description />} />
              <Route path='aboutus' element={<Aboutus />} />
              <Route path='contactus' element={<Contactus />} />

            </Routes>
          </searchcontext.Provider>
        </BrowserRouter >
      </div>
    </>
  )
}

export default App
