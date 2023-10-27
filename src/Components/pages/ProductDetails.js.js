
import { useLocation,useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import { useState } from "react";
// import { useState } from "react";

const ProductDetails = () => {
  const navigate=useNavigate();
  const item = useLocation().state.index;
  console.log("item=========== product details",item);
  // const [resdata, setResdata] = useState("");
  
  const token = localStorage.getItem("mahesh");
  const submit = async () => {
    if (!token) {
      alert("Please log in to add the item to the cart.");
      return;
    }

    try {
      const response = await axios.post("https://e-commerce-app-6v8f.onrender.com/addtocart",item, {
        headers: { authorization:token }
      })

      // setResdata(response.data.msg);
      console.log("resdata======",response.data.msg);
      // setTemp(temp+1)
      alert(response.data.msg);
      navigate(`/${item.brand}`);
      // window.location.reload();
    } catch (err) {
      console.error("Error:",err);
    }
  };

  return ( 
    <>
    <Navbar/>
    <div className="singleproduct"> 
      <div className="p_image">
        <img className="p_image2" src={item.image} alt="not" />
      </div>
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
  );
};

export default ProductDetails;
