import {  Link } from "react-router-dom"
const ProfileComp=()=>{
    return(
        <div className='profile'>
           <button><Link className="prfLink lf" to='/'>X</Link></button>
            {/* <header><h1>login/signup</h1></header> */}
           
            <h2>< Link className='prfLink' to='/signup'>Signup</ Link></h2>
            <h2>< Link className='prfLink' to='/login'>login</ Link></h2>
           
        </div>
    )
}
export default ProfileComp