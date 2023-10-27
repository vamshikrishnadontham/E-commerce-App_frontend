import axios from "axios";

import { useNavigate,Link } from "react-router-dom";
import Navbar from "../Navbar";

const LoginComp=()=>{

    const navigate=useNavigate();

    const userData={
        email:'',
        password:''
    }
    const handleChange=(e)=>{
        e.preventDefault(e);
  userData[e.target.name]=e.target.value;
    }
 
  
   
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
      };
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