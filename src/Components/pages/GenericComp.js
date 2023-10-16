
import axios from "axios"
import { useEffect,useState } from "react"
import { Link } from "react-router-dom";
const GenericComp=(props)=>{
   const [value,setValue]=useState("");
   useEffect(()=>{
      axios.get(`http://localhost:5000/${props.data}`)
      .then((data)=>setValue(data.data)) 
     .catch((e)=>console.log("eeror",e))
 },[props.data])
    console.log("use effect",value)

    return( 
        
        <div  className="main_cotainer">
            <div className="container2">
            {
             value&&value.map((item,index)=>{
                return (
                    <div className="gen" key={index}> 
                   <Link to='/productdetails' state={{index:item}} ><img src={item.image} alt='not' width='200px' height='200px' /></Link>
                    <h2>{item.product_tittle}</h2>
                <h3  className="price">Price:₹{item.price}</h3>
                <Link  className="addtocartbtn" to='/productdetails' state={{index:item}} ><button className='btn'>Add To Cart</button>
                </Link>
                    </div>
                )
            }) 
                     
            }
            </div>
        </div>
    ) 
}
export default GenericComp