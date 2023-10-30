import React from 'react'
import SingleProductComp from '../../SingleProductComp'
const MiviBuds=()=> {
   const product="miviheadset"
    const category="headset"
    return (
        <div>
           
            <SingleProductComp value={category} product={product}/>
        </div>
    )
}

export default MiviBuds
