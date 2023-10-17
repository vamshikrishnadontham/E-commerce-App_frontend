import {useLocation } from "react-router-dom"
import axios from "axios";
import { useState } from "react";
// import { Link } from "react-router-dom";
const ProductDetails=()=>{
    const item=useLocation().state.index;
    console.log("itme_id",item);
   const [resdata,setResdata]=useState();
    const submit= async()=>{
        const token=localStorage.getItem("mahesh");
    console.log("token",token);
    console.log("item",item);
 await axios.post("https://e-commerce-app-6v8f.onrender.com/addtocart",item,{headers:{authorization:token}})
.then((res)=>setResdata(res.data)).catch((err)=>{
    console.log("error",err);
})
await alert("added to cart succesfully")
// console.log("response data",resdata.msg);
    }
    // 
    return(
        <div className="singleproduct"> 
            <div className="p_image">
        <img src={item.image} alt="not" width='400px' height='400px' /></div>
<div className="highlights"><h1>{item.product_tittle}</h1>
<h3  className="price">Price:₹{item.price}</h3>
                
<h4>
    {item.highlights}
</h4>
 <button className='btn btn2' onClick={submit}>Add To Cart</button>
</div>
        </div> 
    )
}
export default ProductDetails