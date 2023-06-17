const News=({newstitle,newsimg})=>{
  return(

    <>
   <div className="newsdiv">
      <div className="newsimgdiv"><img src={newsimg} alt="beautiful raining pic" srcset="" className="newsimg"/>

      </div>
      <div className="newsinformation">
        <div className="newstitle" style={{marginLeft:"23px"}}>{newstitle}</div>
      </div>


   </div>
  
  
  
  </>

)


}
export default News