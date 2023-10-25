import React from 'react'
import SingleProductComp from '../../SingleProductComp'
const AppleBuds=()=> {
   const product="appleheadset"
    const category="headset"
    return (
        <div>
            <SingleProductComp value={category} product={product}/>
        </div>
    )
}

export default AppleBuds