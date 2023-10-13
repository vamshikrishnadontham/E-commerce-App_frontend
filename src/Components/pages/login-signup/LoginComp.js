import axios from "axios";
import { useState } from "react";
import { Link,useLocation } from "react-router-dom";
const LoginComp=()=>{
    const [token,setToken]=useState('');
    const setUsername=useLocation().state.username
    // let arr=[];
    const userData={
        email:'',
        password:''
    }
    const handleChange=(e)=>{
        e.preventDefault(e);
  userData[e.target.name]=e.target.value;
    }
 
    const  submit= async (e)=>{ 
        e.preventDefault(e);
      
        console.log(userData); 
    const data= await axios.post('http://localhost:5000/login',userData)
    .then((res)=>res.data).catch((err)=>console.log({error:err}))
    alert(data.msg)
    setToken(data.token)
    setUsername(data.username)
    // let temp=document.getElementsByTagName('h3')[0]
   
    // temp.innerHTML=username
    console.log("username",data.username);
    }
   
    if(token&&token){
        console.log("token:",token); 
        localStorage.setItem("mahesh",token);
        const dd=localStorage.getItem("mahesh");
        console.log("local storage token:mahesh ",dd);
    }
   
    return(
        <> 
        <div className="body">
        <button><Link className="prfLink lf" to='/profile'>X</Link></button>
        <header className='header'><h1>Login Page</h1></header>
        <div className="parent">
        <div className="reg"> 
        <div className='reg1'>
            <div className='register'>
            <h1 > Signup Shopify before login</h1>
            </div>
         
        </div>
        <div className='reg2'>
        <div>
        <input type="text" name="email" placeholder="enter email" onChange={handleChange}/>
        </div>
        <div>
        <input type="password" name="password" placeholder="enter password" onChange={handleChange}/>
        </div>
        <div>
        <button className="btn" onClick={submit}>login</button>
        </div>
        <p className='alreadylog'>Don't have an account ? Sign up</p>
        </div>
       
        </div>
        </div>
       
        </div>
        </>
    )
} 
export default LoginComp