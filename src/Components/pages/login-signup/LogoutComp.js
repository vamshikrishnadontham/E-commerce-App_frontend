import React, { useEffect } from 'react'
import axios from 'axios'

function LogoutComp() {
const token=localStorage.getItem("mahesh")
useEffect(()=>{
if(!token)
{
    return <div>You are already logged out</div>
}
else{
    // localStorage.removeItem("mahesh");
    axios.post("http://localhost:5000/logoutuser",{headers:{authorization:token}})
 .then((res)=>res.data)
}
return ()=>localStorage.removeItem("mahesh")
},[token])

    return (
        <>
        </>
    )
}

export default LogoutComp
