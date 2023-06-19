import { useContext } from "react";
const Description=()=>{
  const {searchinput}=useContext(searchcontext);

  return (
  <>
     <h1>{searchinput}</h1>
  </>     
  )
}
export default Description;