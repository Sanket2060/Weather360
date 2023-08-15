import { useEffect, useState } from "react";
import axios, { Axios } from "axios";
import { BsFillCloudFill } from "react-icons/bs";
import { BsCircle } from "react-icons/bs";

const Square = ({ city }) => {
  const [fetcheddata,setfetcheddata]=useState({});
  useEffect(()=>{
    fetch();
    },[])
  const fetch = async () => {
    const fetcheddata = await axios.get('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather', {
      headers: {
        'X-RapidAPI-Key': '6ebac47261msh4bfff5ffd07d7b9p18536djsn30b866d3084f',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
      },
      params:{
        city:city
      }
   
    });
    // console.log(fetcheddata.data);
    setfetcheddata(fetcheddata.data);
    // console.log(fetcheddata);
    }

    return (
    <>
      <span className="square" style={{ marginTop: "17px", display: "inline-block" }}>
        {city}

        <br />
        <BsFillCloudFill size={"35px"} style={{ marginTop: "15px" }} />
        <span className="tempreature">{fetcheddata.temp}</span>
        <BsCircle size={"8px"} style={{ position: "relative", top: "-25px", left: "12px" }} />
        <div className="celcius">C</div>
        <div className="informativetext">Real feel {fetcheddata.feels_like}</div>
      </span>


    </>






  )

}
export default Square;