import GenericComp from "./GenericComp";
import { useEffect,useState } from "react";
import axios from "axios"
const Headset=()=>{
    const [value,setValue]=useState("");
    useEffect(()=>{
       axios.get("http://localhost:5000/headset")
       .then((data)=>setValue(data.data)) 
      .catch((e)=>console.log("eeror",e))
  },[])
     console.log("use effect",value)
  
      return(
          <>
          <div>watches page</div> 
          <GenericComp data={value}/>
          </>
      )
}
export default Headset