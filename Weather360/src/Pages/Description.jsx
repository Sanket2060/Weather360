import { useContext, useEffect, useState } from "react";
import { searchcontext } from "../App";
import axios, { Axios } from "axios";

const Description=()=>{
const {searchinput}=useContext(searchcontext);
  // console.log(searchinput);
  useEffect(()=>fetchcitydata,[searchinput]);
  const fetchcitydata=async ()=>{
    console.log("Code yeta samma pugeko ni xaina la");
    const fetchedcitydata=await axios.get("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather",{
      Headers:{
        'X-RapidAPI-Key':'6ebac47261msh4bfff5ffd07d7b9p18536djsn30b866d3084f',
        'X-RapidAPI-Host':'weather-by-api-ninjas.p.rapidapi.com'
      },
      params:{
        city:{searchinput}
      }
     });
     console.log(fetchedcitydata);
    if (fetchedcitydata.data){
      console.log("Success");
    }
   
    }



    //
  return (
  <>
     <h1>This is the searched thing:{searchinput}</h1>
  </>     
  )
}
export default Description;