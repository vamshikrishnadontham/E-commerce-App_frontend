
import { NavLink } from "react-router-dom";
import menuButton from "./images.png";
import cart from "../assets/Home/shopping-cart.png";
import shopify from "../assets/Home/shopifylogo.png";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Navbar = (props) => {
  const [cartCount, setCartCount] = useState(props.cartCount);
  console.log("props",cartCount);
  // const [loginval, setLogin] = useState(0);
const [count,setCount]=useState(0);

  const navigate = useNavigate();
  let cnt = 1;

  // ... Other code ...
  function menubox(){
    let menu= document.getElementById('menu_list');
    if((cnt%2)!==0){
       menu.style.display='block';
       cnt++;
    }
    else{
    menu.style.display='none'
    cnt++;
    }

}

const handleClose2=()=>{
    console.log("iam closed")
     let log_sign=document.getElementsByClassName('log_sign')[0]
   
    log_sign.style.display='none';
}

  // useEffect to update login status
  useEffect(() => {
    // Retrieve username from local storage when the component mounts
    
    // localStorage.setItem('loginid',0)
    const storedUsername = localStorage.getItem("username");
    const logval = localStorage.getItem("loginid");
    const email = localStorage.getItem("email");
    console.log(email);
    // setLogin(email);
    // 
    if(logval){
      document.getElementById("loginbtn").style.display="none"
      document.getElementById('logoutbtn').style.display="block"
      document.getElementById("loginbtn2").style.display="none"
      document.getElementById('logoutbtn2').style.display="block"
    }
    if (storedUsername) {
      document.getElementById("username").textContent = storedUsername;
      document.getElementById("username2").textContent = storedUsername;
    }

    let token = localStorage.getItem('mahesh');
    axios
      .get('https://e-commerce-app-6v8f.onrender.com/getcartdetails', {
        headers: { authorization: token },
      })
      .then((res) => res.data)
      .then((data) => {
        localStorage.setItem('email', data[0].userEmail);
        setCartCount(data[0].cart.length) // Add quantity property to each product
      })
      .catch((err) => {
        console.log('error', err);
      });


  }, []); // Empty dependency array means this effect runs once, when the component mounts

  const HandleCart = () => {
   
const loginid=localStorage.getItem('loginid');
if(cartCount<1)
navigate('/orderplaced')
    else if (loginid) {
      // User is logged in, navigate to the cart page
      navigate("/cart", { state: { cartCount},setCartCount });
    } else {
     
       // User is not logged in, show an alert
      alert("Please log in first");
     
    }
  };

  const submitlogout = () => {
    const email = localStorage.getItem("email");
    axios
      .post(`https://e-commerce-app-6v8f.onrender.com/logoutuser/${email}`)
      .then((res) => res.data)
      .then((res) => {
       
        localStorage.clear();
        // Set login state to 0 (not logged in)
        document.getElementById("username").innerHTML ="";
        document.getElementById("username2").innerHTML = "";
         alert(res.msg);
         setCount(count+1)
         document.getElementById("loginbtn").style.display="block"
         document.getElementById('logoutbtn').style.display="none"
         document.getElementById("loginbtn2").style.display="block"
         document.getElementById('logoutbtn2').style.display="none"
       
      })
      .catch((err) => console.log("error", err));
   
    
    navigate("/");

  };

  return (
    <div className="linkprnt">
      {/* ... Other code ... */}
      <div id='tittle'>
           <img id='shopify' src={shopify} alt="not"  width='50px'/>
           <span id="username2"> </span>
            <button id='menu_button' onClick={menubox} >
               <img src={menuButton} alt="notfound" width='30px' />
            </button>
           
           </div>
           <div className="menu">
           <span id='menu_list'>
           <div className="dashboard">
          
       
       <button id="loginbtn2">
           <Link to="/login" style={{color:"black"}}>Login</Link>
         </button>
         <button id="logoutbtn2" onClick={submitlogout}style={{fontSize:"2rem", padding:"5px"}}>Logout</button>
        <button onClick={HandleCart}><b style={{color:"red", fontSize:"1rem"}}>{cartCount}</b>
         <img src={cart} alt="not" height="40px" width="45px" />
       </button>
      
     </div>
         
     <hr></hr>
     <div className="searchbar">
        <input type="text" placeholder="search here.." className="search"/>
        </div>
        <div className="log_sign">
        <button  id='close' onClick={handleClose2}>X</button><br></br>
        <li>< Link  to='/signup' onClick={()=>{
          let log_sign=document.getElementsByClassName('log_sign')[0]
          log_sign.style.display="none"
        }}>Signup</ Link></li>
        <li>< Link  to='/login' onClick={()=>{
          let log_sign=document.getElementsByClassName('log_sign')[0]
          log_sign.style.display="none"
        }} >login</ Link></li>
        <li style={{color:"black", fontSize:"1.5rem"}}onClick={submitlogout}>Logout</li>
        </div>
            {/* <ul> */}
                <li> <NavLink  to='/'>Home</NavLink></li> 
                <li><NavLink to='/mobiles'>Mobile</NavLink></li>
                <li><NavLink to='/watches'>Watches</NavLink></li>
                <li><NavLink to='/headset'>Headset</NavLink></li>
                <li> <NavLink to='/laptop'>Laptop</NavLink></li>
            {/* </ul> */}
            </span>
           </div>
           
         <div id='navbar'>
        <div className="nav2">
         <img id='shopify' src={shopify} alt="not" height='40px' width='50px'/>
       
        <div className="searchbar">
        <input type="text" placeholder="search here.." className="search"/>
       
        </div>
      <div>
        
       <h4 id="username"> </h4>
           </div>
      <div className="dashboard">
      <button id="loginbtn">
           <Link to="/login" style={{color:"black"}}>Login</Link>
         </button>
         <button id="logoutbtn" onClick={submitlogout}style={{fontSize:"2rem", padding:"5px"}}>Logout</button>
       
         <button onClick={HandleCart}><b style={{color:"red", fontSize:"1rem"}}>{cartCount}</b>
          <img src={cart} alt="not" height="40px" width="45px" />
        </button>
       
      </div>
      </div>
      <div className="componentLink">
         <li> <NavLink to='/'>Home</NavLink></li>  

         <li><NavLink to='/mobiles'>Mobile</NavLink>
         <ul className="dropdown">
            <li><NavLink className='dropdownlink' to= "/vivo"> Vivo</NavLink></li>
            <li><NavLink className='dropdownlink' to= "/realme"> Realme</NavLink></li>
            <li><NavLink className='dropdownlink' to= "/samsung"> Samsung</NavLink></li>
            <li><NavLink className='dropdownlink' to= "/oneplus">One plus </NavLink></li>
         </ul>
         </li>
        <li><NavLink to='/watches'>Watches</NavLink>
        <ul className="dropdown">
           
            <li><NavLink className='dropdownlink' to= "/noisewatch">Noise </NavLink></li>
            <li><NavLink className='dropdownlink' to= "/boatwatch">Boat </NavLink></li>
            <li><NavLink className='dropdownlink' to= "/applewatch"> Apple</NavLink></li>
           <li><NavLink className='dropdownlink' to= "/samsungwatch">Samsung </NavLink></li>
         </ul>
        </li>
        <li><NavLink to='/headset'>Headset</NavLink>
        <ul className="dropdown">
          
            <li><NavLink className='dropdownlink' to= "/boatheadset"> Boat</NavLink> </li>
            <li><NavLink className='dropdownlink' to= "/miviheadset">Mivi </NavLink> </li>
            <li><NavLink className='dropdownlink' to= "/oneplusheadset">one plus </NavLink></li>
            <li>  <NavLink className='dropdownlink' to= "/appleheadset">Apple</NavLink></li>
           
         </ul>
        </li>
        <li> <NavLink to='/laptop'>Laptop</NavLink>
        <ul className="dropdown">
            <li><NavLink className='dropdownlink' to= "/applelaptop">Apple </NavLink></li>
            <li><NavLink className='dropdownlink' to= "/lenovolaptop"> Lenovo</NavLink> </li>
            <li><NavLink className='dropdownlink' to= "/delllaptop"> Dell </NavLink></li>
            <li><NavLink className='dropdownlink' to= "/hplaptop">HP </NavLink></li>
         </ul>
        </li>
         </div>
      {/* ... Other code ... */}
      </div>
    </div>
  );
};

export default Navbar;


