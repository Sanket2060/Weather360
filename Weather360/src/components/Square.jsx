import { BsFillCloudFill } from "react-icons/bs";
import { BsCircle } from "react-icons/bs";
const Square=({city})=>{

   return (
     <>
     <span className="square" style={{marginTop:"17px",display:"inline-block"}}>
         {city}

         <br/>
         <BsFillCloudFill size={"35px"} style={{marginTop:"15px"}}/>
         <span className="tempreature">45</span>
         <BsCircle size={"8px"} style={{position:"relative",top:"-25px",left:"12px"}}/>
         <div className="celcius">C</div>
         <div className="informativetext">Real feel</div>
     </span>

     
     </>






   )

}
export default Square;