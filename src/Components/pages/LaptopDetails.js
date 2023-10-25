import {useLocation } from "react-router-dom"
import axios from "axios";
import { useState } from "react";
const LaptopDetails=()=>{
    const item=useLocation().state.index;
    console.log("itme_id",item);
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
      } catch (err) {
        console.error("Error:", err);
      }
    };
    return(
        <div className="singleproduct">
            <div className="p_image">
        <img className="p_image3" src={item.image} alt="not" /></div>
<div className="highlights"><h1>{item.product_tittle}</h1>
<h1 className="price">Price: ₹{item.price}</h1>
        <p>{item.highlights.slice(0,800)}</p>
        <button className="btn btn2" onClick={submit}>
          Add To Cart
        </button>
</div>
        </div> 
    )
}
export default LaptopDetails