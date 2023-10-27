import axios from 'axios'
import { Link,useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
const RegisterComp=()=>{
    const navigate=useNavigate();
    let arr=[];
    const userData={
        name:'',
        phone:'',
        email:'',
        password:''
    }
    const handleChange=(e)=>{
        e.preventDefault(e);
  userData[e.target.name]=e.target.value;
    }
 
    const  submit=(e)=>{ 
        e.preventDefault(e);
        arr.push(userData)
        console.log(userData); 
    axios.post('https://e-commerce-app-6v8f.onrender.com/register',userData)
    .then((res)=>{alert(res.data.msg)
        return navigate('/login') }).catch((err)=>console.log(err)) 
    
    }
    console.log(arr);
    console.log(userData);
    return(
        <>
        <Navbar/>
        <div className="body">
        <header className='header'><h1>Register</h1></header>
        <div className='parent'>
        <div className="reg">
        <div className='reg1'>
            <div className='register'>
            <h1 >Looks like you are new to Shopify </h1>
            </div>
         
        </div>
        <div className='reg2'>
        <div>
        <input type="text" name='name' placeholder="enter name"  onChange={handleChange}/>
        </div> 
        <div>
        <input type="number" name="phone" placeholder="enter phone number" onChange={handleChange}/>
        </div>
        <div>
        <input type="text" name="email" placeholder="enter email" onChange={handleChange}/>
        </div>
        <div>
        <input type="password" name="password" placeholder="enter password" onChange={handleChange}/>
        </div>
        <div>
        <button className="btn" onClick={submit}>Sign up</button>
        </div>
        <p className='alreadylog'>Already have an account ?<Link style={{color:"blue"}} to="/login">login</Link></p>
        </div>
       
        </div>
        </div>
       
        </div>
  
        </>
    )
}
export default RegisterComp







