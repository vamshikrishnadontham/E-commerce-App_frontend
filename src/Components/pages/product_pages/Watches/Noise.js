import React from 'react'
import SingleProductComp from '../../SingleProductComp'
const Noise=()=> {
   const product="noisewatch"
    const category="watches"
    return (
        <div>
            <SingleProductComp value={category} product={product}/>
        </div>
    )
  
}

export default Noise
