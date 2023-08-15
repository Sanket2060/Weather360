import { NavLink,BrowserRouter } from "react-router-dom"
import { Link } from "react-router-dom"
function Nav({setdropdownclick,dropdownclick}) {
 const dropdownfunction=()=>{
    setdropdownclick(!dropdownclick);


 }
    return (
        <>
            <header>
                <span className="namedintro">

                    <i className="fa-regular fa-cloud"></i>
                    <span className="named text-blue-300">  Weather360</span>
                </span>
                <i class="fa-solid fa-bars hover:cursor-pointer" onClick={dropdownfunction}></i>           
               
            </header>
        </>
    )
}

export default Nav
