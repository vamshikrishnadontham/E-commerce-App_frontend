import React from 'react'
import SingleProductComp from '../../SingleProductComp'
function Samsung() {
    const product="samsung"
    const category="mobiles"
    return (
        <div>
            <SingleProductComp value={category} product={product}/>
        </div>
    )
}

export default Samsung