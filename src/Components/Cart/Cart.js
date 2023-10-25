
import React, { useEffect, useState} from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import axios from 'axios';
import './cart.css';
const Cart = (props) => {
  const navigate=useNavigate();
  const [data, setData] = useState([]);
  let [temp,setTemp]=useState(0);
 
  const location = useLocation();
  let cartCount = location.state ? location.state.cartCount || 0 : 0; 
  
  // Check for null or undefined before accessing cartCount
  useEffect(() => {
    let token = localStorage.getItem('mahesh');
    
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
      // console.log("data ...........=====",data.length);
      // localStorage.setItem("cartCount",data.length);
      
  }, [temp]);

  const updateQuantity = (index, newQuantity) => {
    const updatedData = [...data];
    updatedData[index].quantity = newQuantity;
    setData(updatedData);
  };

  let price = 0;
  async function displayRazorpay(){
    
  let response=await axios.post("https://e-commerce-app-6v8f.onrender.com/checkout",{"amount":(price-(price/10)+40)*100})
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
    setTemp(temp+1)
    alert('Order placed successfully');
    // navigate('/orderplaced')
    navigate("/")
    window.location.reload()
    const paymentOption={
      razorpay_payment_id:response.razorpay_payment_id,
      razorpay_order_id:response.razorpay_order_id,
      razorpay_signature:response.razorpay_signature
    }
    axios.post("https://e-commerce-app-6v8f.onrender.com/paymentverification",paymentOption)
   },
  //  callback_url:"http://localhost:5000/paymentverification",
   prefill:{ 
    name:"mahesh",
    email:"mahesh@gmail.com", 
    contact:9347884154 
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
  setTemp(temp+1)
  
 }
// totalprice=(price-(price/10)+40)
  return (
    <>
   {}
    <h1>My Cart</h1>
    <div id="cartempty"><h1>Cart is Empty</h1></div>
    {/* {(data&&data)? <div>hi</div>:<p>hello</p>} */}
    {
      
      (cartCount===0||0)? (<div><h1>Cart is empty</h1></div>):
      <div className="cartcontainer">
        <div className="cart">
          <div className="cart-products">
            {data &&
              data.map((item, index) => {
                price = price + (item.price*item.quantity);
                return (
                  <div key={index} style={{ border: '2px solid grey' }}>
                    <div className="card">
                      <img src={item.image} alt="not" className='cart_image' />
                      <div className='product_info'>
                        <h2 className='product_tittle'>{item.product_tittle}</h2>
                        <h3 className="price">Price: ₹{item.price}</h3>
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
                        <br></br>
                        <button
                        className="btn rm_btn"
                        onClick={() => {
                          const token = localStorage.getItem('mahesh');
                          axios
                            .delete(`https://e-commerce-app-6v8f.onrender.com/removefromcart/${item._id}`, {
                              headers: { authorization: token },
                            })
                            .then((res) => res.data)
                            .then((res) => {
                              alert("item removed succesfully")

                              // window.location.reload()
                              return setTemp(temp+1)
                              })
                            .catch((err) => console.log('error', err));
                            return console.log('removed item===')
                        }}
                      >
                        Remove
                      </button>
                      </div>
                    </div>
                    <div>
                    </div>
                  </div>
                );
              })}
          </div>
          
            <button
             style={{backgroundColor:"yellow", color:"black"}}
              id="orderMobile_view"
              className="btn"
              onClick={displayRazorpay}
            >
              Place Order
            </button> 
        </div>
        <div className="totalprice-container">
          <div style={{backgroundColor:"lightgrey"}}>
          <h4>Price: ₹{price}</h4>
          <h4>Discount: ₹{price / 10}</h4>
          <h4>Delivery charges: ₹40</h4>
          <p id="tprice">Total Price: ₹{price - price / 10 + 40}</p>
          </div>

       
          <button
              id="order"
              className="btn"
              onClick={displayRazorpay}
              style={{backgroundColor:"yellow", color:"black"}}
            >
              Place Order
            </button>
            </div>
        </div>
}
  
    </>
  )
};

export default Cart;




