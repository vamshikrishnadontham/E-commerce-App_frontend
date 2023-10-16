import React from 'react'
import SingleProductComp from '../../SingleProductComp'
const Mivi=()=> {
   const product="miviheadset"
    const category="headset"
    return (
        <div>
            <SingleProductComp value={category} product={product}/>
        </div>
    )
}

export default Mivi
