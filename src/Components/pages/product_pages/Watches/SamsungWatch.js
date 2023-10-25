import React from 'react'
import SingleProductComp from '../../SingleProductComp'
const SamsungWatch=()=> {
   const product="samsungwatch"
    const category="watches"
    return (
        <div>
            <SingleProductComp value={category} product={product}/>
        </div>
    )
}

export default SamsungWatch