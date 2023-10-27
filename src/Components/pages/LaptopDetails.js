import {useLocation, useNavigate } from "react-router-dom"
import axios from "axios";
import { useState } from "react";
import Navbar from "./Navbar";
const LaptopDetails=()=>{
    const item=useLocation().state.index;
    console.log("itme_id",item);
    const navigate=useNavigate();
    const token = localStorage.getItem("mahesh");
    const [resdata, setResdata] = useState("");
    const submit = async () => {
      if (!token) {
        alert("Please log in to add the item to the cart.");
        return;
      }
      try {
        const response = await axios.post("https://e-commerce-app-6v8f.onrender.com/addtocart",item, {
          headers: { authorization: token }
        });
        setResdata(response.data);
        console.log(resdata);
        alert(response.data.msg);
        navigate(`/${item.brand}`)
      } catch (err) {
        console.error("Error:", err);
      }
    };
    return(
      <>
      <Navbar/>
        <div className="singleproduct">
            <div className="p_image">
        <img className="p_image3" src={item.image} alt="not" /></div>
<div className="highlights">
  <h2>{item.product_tittle}</h2>
<h3 className="price">Price: ₹{item.price}</h3>
        <p>{item.highlights.slice(0,550)}</p>
        <button className="btn btn2" onClick={submit}>
          Add To Cart
        </button>
</div>
        </div> 
        </>
    )
}
export default LaptopDetails