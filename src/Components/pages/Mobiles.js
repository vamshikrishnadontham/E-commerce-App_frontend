import GenericComp from "./GenericComp"
import axios from "axios"
import { useEffect,useState } from "react"
const Mobiles=()=>{ 
const [value,setValue]=useState("");
  useEffect(()=>{
     axios.get("http://localhost:5000/mobiles")
     .then((data)=>setValue(data.data)) 
    .catch((e)=>console.log("eeror",e))
},[])
   console.log("use effect",value)

    return(
        <>
        <div>mobiles page</div> 
        <GenericComp data={value}/>
        </>
    )
}
export default Mobiles