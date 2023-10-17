import shipping from "../assets/Home/shipping.svg";
import axios from 'axios'
import refund from "../assets/Home/refund.svg";
import support from "../assets/Home/support.svg";
import {useEffect,useState} from 'react'
import { Link } from "react-router-dom";
import SliderComp from "../Carousel/SliderComp";
const Home = () => {
  const [mobile,setMobile]=useState("");
  const [watch,setWatch]=useState("");
  const [headset,setHeadset]=useState("");
  const [laptop,setLaptop]=useState("");
   useEffect(()=>{
      axios.get(`https://e-commerce-app-6v8f.onrender.com/mobiles`)
      .then((data)=>setMobile(data.data)) 
     .catch((e)=>console.log("eeror",e))
     axios.get(`https://e-commerce-app-6v8f.onrender.com/watches`)
     .then((data)=>setWatch(data.data)) 
    .catch((e)=>console.log("eeror",e))
    axios.get(`https://e-commerce-app-6v8f.onrender.com/headset`)
    .then((data)=>setHeadset(data.data)) 
   .catch((e)=>console.log("eeror",e))
   axios.get(`https://e-commerce-app-6v8f.onrender.com/laptop`)
   .then((data)=>setLaptop(data.data)) 
  .catch((e)=>console.log("eeror",e))
 },[])
    // console.log("use effect",mobile,watch,headset,laptop)

  return (
    <>
    <SliderComp/>
      <div className="allCategory">
        <h1 style={{border:"1px solid grey",backgroundColor:"skyblue"}}>Mobiles</h1>
        <div className="container2">
          {
            mobile&&mobile.map((item,index)=>{
              
                return (
                  <div className="gen" key={index}>
                 <Link to='/productdetails' state={{index:item}} >
                  <img className="images" src={item.image} alt='not' width='200px' height='200px' /></Link>
                  <h2>{item.product_tittle}</h2>
              <h3  className="price">Price:₹{item.price}</h3>
             
                  </div>
              )
              
              
            })
          }
        </div>
        <h1 style={{border:"1px solid grey",backgroundColor:"skyblue"}}>Watches</h1>
        <div className="container2">
          {
            watch&&watch.map((item,index)=>{
              
                return (
                  <div className="gen" key={index}>
                 <Link to='/productdetails' state={{index:item}} >
                  <img className="images" src={item.image} alt='not' /></Link>
                  <h2>{item.product_tittle}</h2>
              <h3  className="price">Price:₹{item.price}</h3>
             
                  </div>
              )
              
              
            })
          }
        </div>
        <h1 style={{border:"1px solid grey",backgroundColor:"skyblue"}}>Headset</h1>
        <div className="container2">
          {
            headset&&headset.map((item,index)=>{
              
                return (
                  <div className="gen" key={index}>
                 <Link to='/productdetails' state={{index:item}} >
                  <img src={item.image} alt='not' className="images" /></Link>
                  <h2>{item.product_tittle}</h2>
              <h3  className="price">Price:₹{item.price}</h3>
             
                  </div>
              )
              
              
            })
          }
        </div>
        <h1 style={{border:"1px solid grey",backgroundColor:"skyblue"}}>Laptops</h1>
        <div className="container2">
          {
            laptop&&laptop.map((item,index)=>{
             
                return (
                  <div className="gen" key={index}>
                 <Link to='/productdetails' state={{index:item}} >
                  <img src={item.image} alt='not' className="images2"/></Link>
                  <h2>{item.product_tittle}</h2>
              <h3  className="price">Price:₹{item.price}</h3>
             
                  </div>
              )
              
              
            })
          }
        </div>
      </div>
      <div className="services">
        <div className="s-box">
          <img src={shipping} alt="not" />
          <h2>Free Shipping</h2>
          <p>
            Welcome to our online store, where shopping just got even more
            rewarding! We're excited to introduce our exclusive Free Shipping
            offer, designed to make your shopping experience truly delightful.
          </p>
        </div>
        <div className="s-box">
       
          <img src={refund} alt="not" />
          <h2>100% Refund</h2>
          <p>
            Our 100% Refund Guarantee: Your Peace of Mind, Our Promise.At
            "shopify",your satisfaction is our top priority. We understand
            that sometimes things may not go as planned, and that's why we're
            proud to offer a 100% Refund Guarantee. With this assurance. 
          </p>
        </div>
        <div className="s-box">
      
          <img src={support} alt="not" />
          <h2>Support 24/7</h2>
          <p>
            At Shopify, your satisfaction is our priority, and that's why
            we're thrilled to offer 24/7 support. We understand that your needs
            don't follow a schedule, and neither do we. With our always-on
            support, you can shop, inquire, and resolve issues whenever it's
            convenient for you.
          </p>
        </div>
      </div>
    </>
  );
};
export default Home;
