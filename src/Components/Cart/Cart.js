// import React, {  useEffect, useState } from 'react'
// import axios from "axios"
// import './cart.css' 
// // import HocComp from '../../HOC/HocComp'
// import { Link } from 'react-router-dom'
// const Cart=(props)=>{ 
   
//     const [counter,setCounter]=useState(1);
//     const [data,setData]=useState(''); 
//   useEffect(()=>{
//     const token=localStorage.getItem("mahesh")
//     axios.get("https://e-commerce-app-6v8f.onrender.com/getcartdetails",{headers:{authorization:token}})
//     .then((res)=>res.data)
//     .then((data)=>{
//         localStorage.setItem("email",data[0].userEmail)
//         return setData(data[0].cart)
//     })
//     .catch((err)=>{
//         console.log("error",err)
//     })
//   },[data])
// //    console.log("data=========",data);
//    let price=0
//     return (
//         <>
       
//          <h1>My Cart</h1>
//          <div className='cartcontainer'>
//          <div className='cart'>
//             <div className='cart-products'>
//             {
//             data&&data.map((item,index)=>{
             
//                 price=price+item.price;

//                 // console.log("props.count",props.count);
//                 return(
//                     <div key={index} style={{border:"2px solid grey"}}>
//                     <div  className='card'>
//                         <img src={item.image} alt='not' height='200px'/>
//                         <div>
//                             <h2>{item.product_tittle}</h2>
//                             <h3 className='price'>₹{item.price}</h3>
//                             <div className='item_quantity'><b>quantity</b> <button className="cntr_btn" onClick={()=>setCounter(counter-1)}>-</button>
//             <b id="counter">{counter}</b>
//             <button className='cntr_btn' onClick={()=>setCounter(counter+1)}>+</button>
           
//            </div>
         
//                         </div>
                        
//                     </div>
//                     <div > <button className='btn' onClick={()=>{
                        
//                         const token=localStorage.getItem("mahesh");
//                         axios.delete(`https://e-commerce-app-6v8f.onrender.com/removefromcart/${item._id}`,{headers:{authorization:token}})
//                         .then((res)=>res.data)
//                         .then((res)=>console.log("removed item===",res))
//                         .catch((err)=>console.log("error",err))
//                     }}>Reomove</button></div>
                    
//                     </div>
//                 ) 
//             })
//         }
          
//             </div>
//             <Link to="/orderplaced">
//                 <button id="order" className='btn' 
//                 onClick={()=>{
//                     const token=localStorage.getItem("mahesh");
//                     const email=localStorage.getItem("email");
//                     axios.post(`http://localhost:5000/placeOrder/${email}`,{headers:{authorization:token}})
//                     .then((res)=>res.data)
//                     .then((res)=>console.log("removed item===",res))
//                     .catch((err)=>console.log("error",err))

//                     alert("order placers successfull")}}
                
//                 >Place Order
//                 </button>
//                 </Link>
//         </div>
//         <div className='totalprice-container'>
//             <h4>Price:₹{price}</h4>
//             <h4>Discount:₹{price/10}</h4>
//             <h4>Deliver charges:₹40</h4>
//             <hr/>
//             <h3 id="tprice">Total Price:₹{(price-(price/10)+40)}</h3>
//         </div>
//          </div>

      
//         </>
//     )
// }

// export default  Cart


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './cart.css';
import { Link } from 'react-router-dom';

const Cart = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('mahesh');
    axios
      .get('https://e-commerce-app-6v8f.onrender.com/getcartdetails', {
        headers: { authorization: token },
      })
      .then((res) => res.data)
      .then((data) => {
        localStorage.setItem('email', data[0].userEmail);
        setData(data[0].cart.map((item) => ({ ...item, quantity: 1 }))) // Add quantity property to each product
      })
      .catch((err) => {
        console.log('error', err);
      });
  }, [data]);

  const updateQuantity = (index, newQuantity) => {
    const updatedData = [...data];
    updatedData[index].quantity = newQuantity;
    setData(updatedData);
  };

  let price = 0;

  return (
    <>
      <h1>My Cart</h1>
      <div className="cartcontainer">
        <div className="cart">
          <div className="cart-products">
            {data &&
              data.map((item, index) => {
                price = price + (item.price*item.quantity);

                return (
                  <div key={index} style={{ border: '2px solid grey' }}>
                    <div className="card">
                      <img src={item.image} alt="not" height="200px" />
                      <div>
                        <h2>{item.product_tittle}</h2>
                        <h3 className="price">₹{item.price}</h3>
                        <div className="item_quantity">
                          <b>quantity</b>
                          <button
                            className="cntr_btn"
                            onClick={() => {
                              if (item.quantity > 1) {
                                updateQuantity(index, item.quantity - 1);
                              }
                            }}
                          >
                            -
                          </button>
                          <b id="counter">{item.quantity}</b>
                          <button
                            className="cntr_btn"
                            onClick={() => updateQuantity(index, item.quantity + 1)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <div>
                      <button
                        className="btn"
                        onClick={() => {
                          const token = localStorage.getItem('mahesh');
                          axios
                            .delete(`https://e-commerce-app-6v8f.onrender.com/removefromcart/${item._id}`, {
                              headers: { authorization: token },
                            })
                            .then((res) => res.data)
                            .then((res) => console.log('removed item===', res))
                            .catch((err) => console.log('error', err));
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
          <Link to="/orderplaced">
            <button
              id="order"
              className="btn"
              onClick={() => {
                const token = localStorage.getItem('mahesh');
                const email = localStorage.getItem('email');
                axios
                  .post(`http://localhost:5000/placeOrder/${email}`, {}, { headers: { authorization: token } })
                  .then((res) => res.data)
                  .then((res) => console.log('removed item===', res))
                  .catch((err) => console.log('error', err));

                alert('Order placed successfully');
              }}
            >
              Place Order
            </button>
          </Link>
        </div>
        <div className="totalprice-container">
          <h4>Price: ₹{price}</h4>
          <h4>Discount: ₹{price / 10}</h4>
          <h4>Delivery charges: ₹40</h4>
          <hr />
          <h3 id="tprice">Total Price: ₹{price - price / 10 + 40}</h3>
        </div>
      </div>
    </>
  );
};

export default Cart;
