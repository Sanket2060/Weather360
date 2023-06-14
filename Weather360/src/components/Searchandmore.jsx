import Square from "./Square";
function Searchandmore() {


  return (
    <>
      <div className="primarybox">

        <span className="searchbox">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" className="inputbox" placeholder="Search" />
          <span className="text">Location</span>
        </span>
        <div style={{ marginTop: "30px" }}>HOTTEST LOCATIONS</div>
        <Square city="Nepalgunj"/>
        <Square city="Dhangadi"/>
        

      </div>

    </>
  )
}

export default Searchandmore;
