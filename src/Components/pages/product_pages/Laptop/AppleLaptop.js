import React from 'react'
import SingleProductComp2 from '../SingleProductComp2'
const AppleLaptop=()=> {
   const product="applelaptop"
    const category="laptop"
    return (
        <div>
            
            <SingleProductComp2 value={category} product={product}/>
        </div>
    )
}

export default AppleLaptop
