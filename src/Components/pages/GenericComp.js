// import mobile from '../assets/mobiles/Apple Watch 21-1.png'
const GenericComp=(props)=>{
   
    let {data}=props;
   console.log("props",data)
    return(
        
        <div  className="main_cotainer">
            <div className="container1"></div>
            <div className="container2">
            {
             data&&data.map((item,index)=>{
                return (
                    <div className="gen" key={index}>
                    <img src={item.image} alt='not' width='200px' height='200px' />
                    <h2>{item.Pruduct_tittle}</h2>
                <h3>Price:{item.price}</h3>
                <button className='btn'>Add To Cart</button>
                    </div>
                )
            }) 
                     
            }
            </div>
        </div>
    ) 
}
export default GenericComp