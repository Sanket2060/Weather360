import { useContext, useEffect, useState } from "react";
import { searchcontext } from "../App";
import axios from "axios";
import Square from "../components/Square";

const Description = ({ searchtried }) => {
  const [fetchedcitydata,setFetchedcitydata]=useState("NULL");
  const { searchinput } = useContext(searchcontext);
  console.log(searchinput);
  const fetchcitydata = async () => {
    try{
    const fetchedcitydata = await axios.get('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather', {
      headers: {
        'X-RapidAPI-Key': '6ebac47261msh4bfff5ffd07d7b9p18536djsn30b866d3084f',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
      },
      params: {
        city: searchinput
      }
    });
    setFetchedcitydata(fetchedcitydata.data);
  }
  catch(err){
     console.log("Error caused by: "+err);
  }
    
    console.log("done");
    console.log(fetchedcitydata);

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
        <div className="sidebarleft mt-[17px] w-15 h-60 [&>*]:w-[15.5rem]  [&>*]:border-black [&>*]:border-b-[1px] [&>*]:mb-4 [&>*]:font-Agdasima flex flex-col justify-center">
        <div className="feelslike">Feels like:{fetchedcitydata.feels_like}</div>
          <div className="cloudpct">Cloud-pct:{fetchedcitydata.cloud_pct}</div>
          <div className="maxtemp">Max-temp:{fetchedcitydata.max_temp}</div>
          <div className="mintemp">Min-temp:{fetchedcitydata.min_temp}</div>
          </div>
        <div className="center">
          <Square city={searchinput} className="mt-0" />
        </div>
        <div className="sidebarright mt-[17px] ml-[-23px] w-15 h-60 [&>*]:w-[15.5rem]  [&>*]:border-black [&>*]:border-b-[1px] [&>*]:mb-4 [&>*]:font-Agdasima flex flex-col justify-center">
        <div className="humidity">Humidity:{fetchedcitydata.humidity}</div>
          <div className="sunrise">Sunrise:{fetchedcitydata.sunrise}</div>
          <div className="sunset">Sunset:{fetchedcitydata.sunset}</div>
          <div className="windspeed">Wind speed:{fetchedcitydata.wind_speed}</div>
        
        </div>
      </div>

    </>
  )
}
export default Description;