import React, {  useEffect, useState } from 'react'
import axios from "axios"
import './cart.css'

import { Link } from 'react-router-dom'
const Cart=()=>{
   
    const [counter,setCounter]=useState(1);
    const [data,setData]=useState(''); 
  useEffect(()=>{
    const token=localStorage.getItem("mahesh")
    axios.get("http://localhost:5000/getcartdetails",{headers:{authorization:token}})
    .then((res)=>res.data)
    .then((data)=>setData(data[0].cart))
    .catch((err)=>{
        console.log("error",err)
    },[])
  },[])
   console.log("data=========",data);
   let price=0
    return (
        <>
       
         <h1>My Cart</h1>
         <div className='cartcontainer'>
         <div className='cart'>
            <div className='cart-products'>
            {
            data&&data.map((item,index)=>{
             
                price=price+item.price;

                
                return(
                    <>
                    <div key={index} className='card'>
                        <img src={item.image} alt='not' height='200px'/>
                        <div>
                            <h2>{item.product_tittle}</h2>
                            <h3 className='price'>₹{item.price}</h3>
                            <div className='item_quantity'><b>quantity</b> <button className="cntr_btn" onClick={()=>setCounter(counter-1)}>-</button>
            <b id="counter">{counter}</b>
            <button className='cntr_btn' onClick={()=>setCounter(counter+1)}>+</button>
           
           </div>
           
                        </div>
                        
                    </div>
                    <hr></hr>
                    </>
                )
            })
        }
          
            </div>
            <Link to="/orderplaced">
                <button id="order" className='btn' 
                onClick={()=>alert("order placers successfull")}
                
                >Place Order
                </button>
                </Link>
        </div>
        <div className='totalprice-container'>
            <h4>Price:₹{price}</h4>
            <h4>Discount:₹{price/10}</h4>
            <h4>Deliver charges:₹40</h4>
            <hr/>
            <h3 id="tprice">Total Price:₹{(price-(price/10)+40)}</h3>
        </div>
         </div>

      
        </>
    )
}

export default Cart
