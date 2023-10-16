import axios from "axios";
import { useContext, useState } from "react"
import Global from "../../../Global";
const LoginComp=()=>{
    const [token,setToken]=useState('');
   const Gdata=useContext(Global);
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
    const data= await axios.post('http://localhost:5000/login',userData)
    .then((res)=>res.data).catch((err)=>console.log({error:err}))
      alert(data.msg)
        var datainfo={...Gdata,"token":token,"username":data.username,"islogin":data.islogin}
        Gdata.updateGdata(datainfo)
    setToken(data.token)
    
    console.log("username",data.username,"islogin",data.islogin);
    }
   
    if(token&&token){
        // console.log("token:",token); 
        localStorage.setItem("mahesh",token);
        // const dd=localStorage.getItem("mahesh");
        // console.log("local storage token:mahesh ",dd);
    }
   
    return(
        <> 
        <div className="body"> 
        
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
        {/* <Username value={username}/> */}
        </>
    )
} 
export default LoginComp