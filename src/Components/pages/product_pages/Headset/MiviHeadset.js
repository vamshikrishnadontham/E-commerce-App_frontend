import React from 'react'
import SingleProductComp from '../../SingleProductComp'
const MiviHeadset=()=> {
   const product="miviheadset"
    const category="headset"
    return (
        <div>
            <SingleProductComp value={category} product={product}/>
        </div>
    )
}

export default MiviHeadset