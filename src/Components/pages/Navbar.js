
import { NavLink} from "react-router-dom"
import menuButton from './images.png'
import profile from '../assets/Home/profile_icon.svg'
import cart from '../assets/Home/shopping-cart.png'
import favorite from '../assets/Home/favorite2.svg'
import search from '../assets/Home/search_icon.svg'
import shopify from '../assets/Home/shopifylogo.png'
import { Link,useNavigate } from "react-router-dom"
import {  useEffect, useState } from "react"

import axios from "axios"

const Navbar=()=>{
 
// localStorage.setItem("loginid",0)
    const navigate=useNavigate()
const [details,setDetails]=useState('');
    let cnt=1;

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
const handleClose=()=>{
    // console.log("iam closed")
     let profile=document.getElementsByClassName('profile')[0]
    //  console.log(profile)
    profile.style.display='none';
}
const handleClose2=()=>{
    console.log("iam closed")
     let log_sign=document.getElementsByClassName('log_sign')[0]
    //  console.log(log_sign)
    log_sign.style.display='none';
}
const handelClick=()=>{
     let profile=document.getElementsByClassName('profile')[0]
    //  console.log(profile)
    profile.style.display='block';
}
const handelClick2=()=>{
    let log_sign=document.getElementsByClassName('log_sign')[0]
    // console.log(log_sign)
   log_sign.style.display='block';

}
const [count,setCount]=useState(0)
useEffect(() => {
    // Retrieve username from local storage when the component mounts
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      document.getElementById('username').textContent = storedUsername;
    }
  }, []); // Empty dependency array means this effect runs once, when the component mounts

  console.log("details", details);

console.log("details",details);

const HandleCart=()=>{
// setCount(count+1);
// useEffect(()=>{
//     const islogin=localStorage.getItem('islogin')
//     const loginid=localStorage.getItem('loginid')
//     console.log(islogin);
//     if(loginid==0){
//         alert(" please login first ")
//     }
//     else if(loginid==1){
//         // console.log("islogin",localStorage.getItem("islogin"));
//         navigate('/cart')
//     }
//     },[count])
       
const loginid = localStorage.getItem('loginid');

if (loginid === '0') {
  // User is not logged in, show an alert
  alert('Please log in first');
} else {
  // User is logged in, navigate to the cart page
  navigate('/cart');
}
   
}
const submitlogout=()=>{
    // localStorage.setItem("islogin",false)
    // setLogin(false)
    const email=localStorage.getItem("email");
   axios.post(`http://localhost:5000/logoutuser/${email}`)
 .then((res)=>res.data).then((res)=>{
   
        localStorage.setItem("islogin",false)
        localStorage.setItem("mahesh",'')
        localStorage.setItem("email",'')
        localStorage.setItem("loginid",0)
        let profile=document.getElementsByClassName('profile')[0]

        profile.style.display='none';
       return  alert(res.msg)
    
 })
 .catch((err)=>console.log("error",err))
 document.getElementById('username').innerHTML=''
navigate("/")

console.log("logout sumit");
}


// console.log("islogin========",islogin);

    return(
       
        <div className="linkprnt">
           <div id='tittle'>
           <img id='shopify' src={shopify} alt="not" height='40px' width='50px'/>
            <button id='menu_button' onClick={menubox} >
               <img src={menuButton} alt="notfound" width='30px' height='30px'/>
            </button>
           
           </div>
           <div className="menu">
           <span id='menu_list'>
           <div className="dashboard">
    <img src={cart} alt='not' height='35px' width='30px'/>
    <img src={favorite} alt='not' height='35px'/>
   
    <button onClick={handelClick2}><img src={profile} alt='not' height='35px'/></button>
     </div>
     <hr></hr>
     <div className="searchbar">
        <input type="text" placeholder="search here.." className="search"/>
        
        </div>
        <div className="log_sign">
        <button  id='close' onClick={handleClose2}>X</button><br></br>
        <li>< Link  to='/signup'>Signup</ Link></li>
        <li>< Link  to='/login' >login</ Link></li>
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
        
         <img id='shopify' src={shopify} alt="not" height='40px' width='50px'/>
         <div className="componentLink">
         <li> <NavLink to='/'>Home</NavLink></li> 

         <li><NavLink to='/mobiles'>Mobile</NavLink>
         <ul className="dropdown">
            <li><NavLink to= "/samsung"> Samsung</NavLink></li>
            <li><NavLink to= "/vivo"> Vivo</NavLink></li>
            <li><NavLink to= "/realme"> Realme</NavLink></li>
            <li><NavLink to= "/oneplus">One plus </NavLink></li>
         </ul>
         </li>
        <li><NavLink to='/watches'>Watches</NavLink>
        <ul className="dropdown">
            <li><NavLink to= "/applewatches"> Apple</NavLink></li>
            <li><NavLink to= "/noise">Noise </NavLink></li>
            <li><NavLink to= "/boatwatch">Boat </NavLink></li>
           <li><NavLink to= "/samsungwatches">Samsung </NavLink></li>
         </ul>
        </li>
        <li><NavLink to='/headset'>Headset</NavLink>
        <ul className="dropdown">
            <li>  <NavLink to= "/applebuds">Apple</NavLink></li>
            <li><NavLink to= "/boatbuds"> Boat</NavLink> </li>
            <li><NavLink to= "/oneplusbuds">one plus </NavLink></li>
            <li><NavLink to= "/mivi">Mivi </NavLink> </li>
         </ul>
        </li>
        <li> <NavLink to='/laptop'>Laptop</NavLink>
        <ul className="dropdown">
            <li><NavLink to= "/applelaptops">Apple </NavLink></li>
            <li><NavLink to= "/lenovo"> Lenovo</NavLink> </li>
            <li><NavLink to= "/dell"> Dell </NavLink></li>
            <li><NavLink to= "/hp">HP </NavLink></li>
         </ul>
        </li>
         </div>
        <div className="searchbar">
        <input type="text" placeholder="search here.." className="search"/>
        <img src={search} alt="not"  className="searchicon"/>
        </div>
      <div>
        
       <h4 id="username">.</h4>
           </div>
 
<div className="dashboard"> 
  <button onClick={HandleCart}>
    <img src={cart} alt='not' height='40px' width='45px'/></button>

 <button onClick={handelClick}><img src={profile} alt='not' height='35px'/></button> 
</div>
 
        </div>
        <div className='profile'>
           <button onClick={handleClose}>X</button>
            <h2>< Link className='prfLink' to='/signup' onClick={()=>{
                  let profile_div=document.getElementsByClassName("profile")[0]
                  profile_div.style.display="none"
            }} >Signup</ Link></h2>
            <h2>< Link className='prfLink' to='/login'onClick={()=>{
                let profile_div=document.getElementsByClassName("profile")[0]
                profile_div.style.display="none"
                document.getElementsByClassName()
            }}  >login</ Link></h2>
        <h2 onClick={submitlogout}>Logout</h2>
        </div>
       
        </div>
        
      
    )
}

export default Navbar