import React from 'react'
import SingleProductComp from '../../SingleProductComp'
const BoatHeadset=()=> {
   const product="boatheadset"
    const category="headset"
    return (
        <div>
           
            <SingleProductComp value={category} product={product}/>
        </div>
    )
}

export default BoatHeadset
