
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './cart.css';
const Cart = (props) => {
  const [data, setData] = useState([]);
  let [temp,setTemp]=useState(0);
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
      console.log("data ...........=====",data.length);
  }, [temp]);

  const updateQuantity = (index, newQuantity) => {
    const updatedData = [...data];
    updatedData[index].quantity = newQuantity;
    setData(updatedData);
  };

  let price = 0;
  async function displayRazorpay(){
  let response=await axios.post("http://localhost:5000/checkout",{"amount":500})
  let order_id=response.data.order.id
  console.log("orrder id",order_id);
 
const options ={
  key:"rzp_test_FaT0o1O7SAaX6o", // Enter the Test API Key ID
  amount:price*100,// Amount is in currency subunits. Hence, 20 refers to 20
   currency:"INR",
   name:"mahesh",
   description:"Tesst transaction",
   order_id:order_id,
   handler:function(response){
    alert(response.razorpay_payment_id)
    alert(response.razorpay_order_id)
    alert(response.razorpay_signature)
    const paymentOption={
      razorpay_payment_id:response.razorpay_payment_id,
      razorpay_order_id:response.razorpay_order_id,
      razorpay_signature:response.razorpay_signature
    }
    axios.post("http://localhost:5000/paymentverification",paymentOption)
   },
  //  callback_url:"http://localhost:5000/paymentverification",
   prefill:{ 
    name:"mahesh",
    email:"mahesh@gmail.com", 
    contact:9347888888 
   }
}
let rzp=new window.Razorpay(options);
rzp.open();
/**removeing all cart items */
const token = localStorage.getItem('mahesh');
const email = localStorage.getItem('email');
axios
  .post(`https://e-commerce-app-6v8f.onrender.com/placeOrder/${email}`, {}, { headers: { authorization: token } })
  .then((res) => res.data)
  .then((res) => console.log('removed item===', res))
  .catch((err) => console.log('error', err));
alert('Order placed successfully');
setTemp(temp+1)
 }

  return (
    <>
     <h1>My Cart</h1>
    {
      data.length===0? <div><h1>Cart is empty</h1></div>:
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
                        <h2 className='product_tittle'>{item.product_tittle}</h2>
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
                            .then((res) => {setTemp(temp+1)
                              return console.log('removed item===', res)})
                            .catch((err) => console.log('error', err));
                          
                        }}
                      >
                        Remove
                      </button>
            {/* <button onClick={}> Buy now</button> */}
                    </div>
                  </div>
                );
              })}
          </div>
          
            <button
              id="order"
              className="btn"
              onClick={displayRazorpay}
            >
              Place Order
            </button>
         
        </div>
        <div className="totalprice-container">
          <h4>Price: ₹{price}</h4>
          <h4>Discount: ₹{price / 10}</h4>
          <h4>Delivery charges: ₹40</h4>
          <hr />
          <h3 id="tprice">Total Price: ₹{price - price / 10 + 40}</h3>
        </div>
      </div>
}
    </>
  )
};

export default Cart;




