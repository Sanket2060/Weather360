import { useContext, useState } from "react";
import Square from "./Square";
import { searchcontext } from "../App";
function Searchandmore({setsearchtried,searchtried}) {
  const {setsearchinput}=useContext(searchcontext);
  
  return (
    
    <>
      <div className="primarybox">

        <span className="searchbox">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" className="inputbox focus:outline-none" placeholder="Search" onChange={(event)=>setsearchinput(event.target.value)}/>
          <span className="text hover:cursor-pointer" onClick={()=>setsearchtried(!searchtried)}>Location</span>
        </span>
        <div style={{ marginTop: "30px" }}>HOTTEST LOCATIONS</div>
        <Square city="Nepalgunj"/>
        <Square city="Dhangadhi"/>
        

      </div>

    </>
  )
}

export default Searchandmore;
