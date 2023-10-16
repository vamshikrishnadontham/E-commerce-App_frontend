
import { useEffect,useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";
const Laptop=()=>{
    const [value,setValue]=useState("");
    useEffect(()=>{
       axios.get("http://localhost:5000/laptop")
       .then((data)=>setValue(data.data)) 
      .catch((e)=>console.log("eeror",e))
  },[])
     console.log("use effect",value)
  
      return(
        <div  className="main_cotainer">
        {/* <div className="container1"></div> */}
        <div className="container2">
        {
         value&&value.map((item,index)=>{
            return (
                <div className="laptop_container" key={index}>
              <Link to='/laptopdetails' state={{index:item}} >  <img src={item.image} alt='not' width='300px' height='200px' />
              </Link>
                <h2>{item.Pruduct_tittle}</h2>
            <h3 className="price">Price:{item.price}</h3>
            <Link className="addtocartbtn" to='/laptopdetails' state={{index:item}} >
            <button className='btn'>Add To Cart</button> </Link>
                </div>
            )
        }) 
                 
        }
        </div>
    </div>
      )
}
export default Laptop