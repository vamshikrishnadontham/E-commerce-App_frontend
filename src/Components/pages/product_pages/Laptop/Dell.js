import React from 'react'
import SingleProductComp2 from '../SingleProductComp2'
const Dell=()=> {
   const product="delllaptop"
    const category="laptop"
    return (
        <div>
           
            <SingleProductComp2 value={category} product={product}/>
        </div>
    )
}

export default Dell
