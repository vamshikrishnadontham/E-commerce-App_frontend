
import { NavLink} from "react-router-dom"
import menuButton from './images.png'
import profile from '../assets/Home/profile_icon.svg'
import cart from '../assets/Home/shopping-cart.png'
import favorite from '../assets/Home/favorite2.svg'
import search from '../assets/Home/search_icon.svg'
import shopify from '../assets/Home/shopifylogo.png'
import { Link } from "react-router-dom"
import { useState,useContext, useEffect } from "react"
import Global from "../../Global"
import axios from "axios"

const Navbar=()=>{
    // const Gdata=useContext(Global)
 const [details,setDetails]=useState('');
 const token=localStorage.getItem("mahesh");
 useEffect(()=>{
    if(token){ axios.get("http://localhost:5000/getdetails",{headers:{authorization:token}})
 .then((res)=>res.data).then((data)=>setDetails(data.details))
 }
 },[])

// let data={...Gdata,"username":details.name}
    // Gdata.updateGdata(data);
    // console.log("navbar gdta",Gdata.username,"login ststus:",Gdata.islogin);
    // console.log("email==========",details);
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
        
      { details.islogin===true? <h4 id="username">{details.name}</h4>:<h4></h4>
           }</div>
  <div className="dashboard"> 
    <Link to='/cart'><img src={cart} alt='not' height='40px' width='45px'/></Link>
   { details.islogin===true ? <div className='profile2'>
            <button>< Link className='prfLink' to='/logout'  >logout</ Link></button>
        </div>:<button onClick={handelClick}><img src={profile} alt='not' height='35px'/></button> }
    
</div>
        </div>
        <div className='profile'>
           <button onClick={handleClose}>X</button>
          
            <h2>< Link className='prfLink' to='/signup' >Signup</ Link></h2>
            <h2>< Link className='prfLink' to='/login'  >login</ Link></h2>
        </div>
       
        </div>
        
      
    )
}
export default Navbar