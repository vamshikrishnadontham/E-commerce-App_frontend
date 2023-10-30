import React from 'react'
import SingleProductComp from '../../SingleProductComp'
function OnePlus() {
    const product="oneplus"
    const category="mobiles"
    return (
        <div>
            
            <SingleProductComp value={category} product={product}/>
        </div>
    )
}

export default OnePlus