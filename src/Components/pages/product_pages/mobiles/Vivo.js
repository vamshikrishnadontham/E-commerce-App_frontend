import React from 'react'
import SingleProductComp from '../../SingleProductComp'
function Vivo() {
    const product="vivo"
    const category="mobiles"
    return (
        <div>
           
            <SingleProductComp value={category} product={product}/>
        </div>
    )
}

export default Vivo
