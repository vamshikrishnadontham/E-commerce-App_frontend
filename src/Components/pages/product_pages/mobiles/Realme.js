import React from 'react'
import SingleProductComp from '../../SingleProductComp'
const Realme=()=> {
   const product="realme"
    const category="mobiles"
    return (
        <div>
            <SingleProductComp value={category} product={product}/>
        </div>
    )
}

export default Realme
