import { useContext, useEffect, useState } from "react";
import { searchcontext } from "../App";

const Description=()=>{
  console.log("Hello world");
  const {searchinput}=useContext(searchcontext);
  useEffect(()=>{
    
    console.log(searchinput);
  },[searchinput]);

  return (
  <>
     <h1>This is the searched thing:{searchinput}</h1>
  </>     
  )
}
export default Description;