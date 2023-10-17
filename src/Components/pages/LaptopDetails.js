import {useLocation } from "react-router-dom"
const LaptopDetails=()=>{
    const item=useLocation().state.index;
    console.log("itme_id",item);
    return(
        <div className="singleproduct">
            <div className="p_image">
        <img className="p_image3" src={item.image} alt="not" /></div>
<div className="highlights"><h1>{item.product_tittle}</h1>
<h3  className="price">Price:₹{item.price}</h3>
                
<h4>
    {item.highlights}
</h4>
<button className='btn btn2'>Add To Cart</button>
</div>
        </div> 
    )
}
export default LaptopDetails