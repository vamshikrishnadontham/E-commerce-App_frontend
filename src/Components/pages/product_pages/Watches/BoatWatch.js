import React from 'react'
import SingleProductComp from '../../SingleProductComp'
const BoatWatch=()=> {
   const product="boatwatch"
    const category="watches"
    return (
        <div>
            <SingleProductComp value={category} product={product}/>
        </div>
    )
}

export default BoatWatch
