import axios from "axios";
import {useState } from "react"
import { useNavigate,Link } from "react-router-dom";
import Navbar from "../Navbar";
// import Global from "../../../Global";
const LoginComp=()=>{
    // const [token,setToken]=useState('');
    const navigate=useNavigate();
//    const Gdata=useContext(Global);
    const userData={
        email:'',
        password:''
    }
    const handleChange=(e)=>{
        e.preventDefault(e);
  userData[e.target.name]=e.target.value;
    }
 
    // const  submit= async (e)=>{ 
    //     e.preventDefault(e);
    //     // document.getElementById("loginbtn").style.display="none"
    //     // document.getElementById('logoutbtn').style.display="block"
    // const data= await axios.post('https://e-commerce-app-6v8f.onrender.com/login',userData)
    // .then((res)=>res.data)
    // .then((res)=>{
    // localStorage.setItem("email",res.email)
    // localStorage.setItem("islogin",res.islogin);
    // localStorage.setItem("loginid",1)
    // localStorage.setItem("mahesh",res.token)
    //  localStorage.setItem("username",res.username)
    // document.getElementById('username').innerHTML=res.username
    // document.getElementById('username2').innerHTML=res.username
    // alert(res.msg)
    //     return res})
    // .catch((err)=>console.log({error:err}))
        
     

    //     // var datainfo={...Gdata,"token":token,"username":data.username,"islogin":data.islogin}
    //     // Gdata.updateGdata(datainfo) 
    // setToken(data.token)
    
   
    // console.log("username",data.username,"islogin",data.islogin);
    // navigate("/");
    // // window.location.reload();
    // }
   
    const submit = async (e) => {
        e.preventDefault(e);
      
        const data = await axios
          .post('https://e-commerce-app-6v8f.onrender.com/login', userData)
          .then((res) => res.data)
          .then((res) => {
            if (res.msg === 'user is not registered') {
              // Redirect to the signup component
              alert(res.msg);
              navigate('/signup');
            } 
             else if(res.msg === 'user password is wrong'){
                alert(res.msg);
             }
            else {
              localStorage.setItem('email', res.email);
              localStorage.setItem('islogin', res.islogin);
              localStorage.setItem('loginid', 1);
              localStorage.setItem('mahesh', res.token);
              localStorage.setItem('username', res.username);
              document.getElementById('username').innerHTML = res.username;
              document.getElementById('username2').innerHTML = res.username;
              alert(res.msg);
              navigate('/');
              return res;
            }
          })
          .catch((err) => console.log({ error: err }));
      
        if (data && data.token) {
          localStorage.setItem('mahesh', data.token);
        }
      
        // navigate('/');
      };
      
    // if(token&&token){
    //     // console.log("token:",token); 
    //     localStorage.setItem("mahesh",token);
    //     // const dd=localStorage.getItem("mahesh");
    //     // console.log("local storage token:mahesh ",dd);
    // }
   
    return(
        <> 
        <Navbar/>
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
        <p className='alreadylog'>no account ? <Link style={{color:"blue"}} to="/signup">Sign up</Link></p>
        </div>
       
        </div>
        </div>
       
        </div>
       
        </>
    )
} 
export default LoginComp