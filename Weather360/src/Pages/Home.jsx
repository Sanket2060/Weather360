import { useEffect, useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import '../App.css'
import Searchandmore from '../components/Searchandmore'
import News from '../components/News'
import axios from 'axios'
import { searchcontext } from '../App'
import { useContext } from 'react'
import Description from './Description'
// import { Home } from '@material-ui/icons'



const Home=()=>{
    const {searchinput}=useContext(searchcontext);
    const [searchtried,setsearchtried]=useState(false);
    useEffect(()=>{
      console.log(searchtried);

    },[searchtried])
    // const fetchdata = async () => {
    //     const fetcheddata = await axios.get("https://google-news-api1.p.rapidapi.com/search", {
    //       headers: {
    //         'X-RapidAPI-Key': '6ebac47261msh4bfff5ffd07d7b9p18536djsn30b866d3084f',
    //         'X-RapidAPI-Host': 'google-news-api1.p.rapidapi.com'
    //       },
    //       params: {
    //         language: 'EN',
    //         q: 'weather and nepal',
    //         sort: 'date:desc',
    //         limit: '3'
    //       }
    
    //     });
    //     console.log(fetcheddata.data);
    
    
    //   }
    //   useEffect((() => {
    //     fetchdata();
    
    //   }), []);
    
  return(
    <>
        <main className='main'>
    <Searchandmore setsearchtried={setsearchtried} searchtried={searchtried}/>
  </main>
  {
    (searchtried)?<Description searchtried={searchtried} />:
    

      <div className="news" style={{ backgroundColor: "black", display: 'flex', justifyContent: 'space-around' }}>
      <News newstitle="Continuous rain in Nepal" newsimg="https://as2.ftcdn.net/v2/jpg/01/76/80/43/1000_F_176804344_cVgrFLEi0tB1SeP0xJ6YufQAaUhQ3TjW.jpg" />
      <News newstitle="Chances of heavy rain and amids floods" newsimg="https://www.arc.int/sites/default/files/inline-images/Flood.png" />
      <News newstitle="Prices of yarshagumba peaked" newsimg="https://www.swotahtravel.com/images/blogs/cover/himalayan%20Yarsagumba.jpg" />
  </div >
    }
  
 
</>
    

  )



}
export default Home;