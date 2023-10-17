import React, { useState } from 'react'

function HocComp(wrappedCompenent) {
    let  [count,setCount]=useState(1);
    function addfunctionalty(){
        const increment=()=>{
            setCount(count+1);
            }
            const decrement=()=>{
            setCount(count-1)
            }
    
    return (
        <>
        <wrappedComponent count={count} increment={increment} decrement={decrement}/>
        </>
    )
}
 return addfunctionalty
}
export default HocComp
