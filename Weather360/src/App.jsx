import Nav from './components/Nav'
import { useEffect } from 'react'
import './App.css'
import Searchandmore from './components/Searchandmore'
import News from './components/News'
import axios from 'axios'


function App() {
  const fetchdata=async()=>{
    const fetcheddata=await axios.get("https://google-news-api1.p.rapidapi.com/search",{
      headers: {
        'X-RapidAPI-Key': '6ebac47261msh4bfff5ffd07d7b9p18536djsn30b866d3084f',
        'X-RapidAPI-Host': 'google-news-api1.p.rapidapi.com'
      },
      params: {
        language: 'EN',
        q: 'weather and nepal',
        sort: 'date:desc',
        limit: '3'
      } 

    });
    console.log(fetcheddata.data);


  }
  useEffect((()=>{
    fetchdata();

  }),[]);
  return (
    <>
      <Nav/>
      <main className='main'>
      <Searchandmore/>
      </main>
      <div className="news" style={{backgroundColor:"black"}}>
      <News newstitle="Continuous rain in Nepal" newsimg="https://as2.ftcdn.net/v2/jpg/01/76/80/43/1000_F_176804344_cVgrFLEi0tB1SeP0xJ6YufQAaUhQ3TjW.jpg"/>
      </div>
      
    </>
  )
}

export default App
