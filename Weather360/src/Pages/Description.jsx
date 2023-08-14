import { useContext, useEffect, useState } from "react";
import { searchcontext } from "../App";
import axios from "axios";
import Square from "../components/Square";

const Description = ({ searchtried }) => {
  const { searchinput } = useContext(searchcontext);
  // console.log(searchinput);
  const fetchcitydata = async () => {
    const fetchedcitydata = await axios.get("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather", {
      Headers: {
        'X-RapidAPI-Key': '6ebac47261msh4bfff5ffd07d7b9p18536djsn30b866d3084f',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
      },
      params: {
        city: {searchinput}
      }
    });
    console.log(fetchedcitydata.data);

  }
  if (searchtried) {
    fetchcitydata();
  }

  return (
    <>
      {/* <h1 className="center">{searchinput}</h1> */}
      {/* <h1>This is the searched thing:{searchinput}</h1> */}
      <div></div>
      <div className="descriptioncontainer flex justify-evenly items-center font-Roboto Condensed h-[20.2rem]  bg-red-200">
        <div className="sidebarleft mt-[17px] w-15 h-60 [&>*]:w-[15.5rem] [&>*]:h-5 [&>*]:border-black [&>*]:border-b-[1px] [&>*]:mb-4 [&>*]:font-Agdasima flex flex-col justify-center">
          <div className="feelslike text-lg">Feels like:</div>
          <div className="cloudpct">Cloud-pct:</div>
          <div className="maxtemp">Max-temp:</div>
          <div className="mintemp">Min-temp:</div>
        </div>
        <div className="center">
          <Square city="Pokhara" className="mt-0" />
        </div>
        <div className="sidebarright mt-[17px] ml-[-23px] w-15 h-60 [&>*]:w-[15.5rem] [&>*]:h-5 [&>*]:border-black [&>*]:border-b-[1px] [&>*]:mb-4 [&>*]:font-Agdasima flex flex-col justify-center">
          <div className="feelslike">Feels like:</div>
          <div className="cloudpct">Cloud-pct:</div>
          <div className="maxtemp">Max-temp:</div>
          <div className="mintemp">Min-temp:</div>
        </div>
      </div>

    </>
  )
}
export default Description;