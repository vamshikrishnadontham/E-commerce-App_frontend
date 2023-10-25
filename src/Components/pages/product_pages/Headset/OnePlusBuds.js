import React from 'react'
import SingleProductComp from '../../SingleProductComp'
const OnePlusBuds=()=> {
   const product="oneplusheadset"
    const category="headset"
    return (
        <div>
            <SingleProductComp value={category} product={product}/>
        </div>
    )
}

export default OnePlusBuds