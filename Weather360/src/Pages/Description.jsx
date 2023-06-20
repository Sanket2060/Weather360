import { useContext, useEffect, useState } from "react";
import { searchcontext } from "../App";

const Description=()=>{
const {searchinput}=useContext(searchcontext);
  // console.log(searchinput);
  

  return (
  <>
     <h1>This is the searched thing:{searchinput}</h1>
  </>     
  )
}
export default Description;