import React from 'react'
import SingleProductComp from '../../SingleProductComp'
const AppleWatch=()=> {
   const product="applewatch"
    const category="watches"
    return (
        <div>
            <SingleProductComp value={category} product={product}/>
        </div>
    )
}

export default AppleWatch