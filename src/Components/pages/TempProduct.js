import React, { useState } from 'react'
import ProductDetails from './ProductDetails.js';
import Navbar from './Navbar';
function TempProduct() {
    const [cartCount, setCartCount] = useState(0);
    return (
        <>
        {/* <h1>product info{item.price}</h1> */}
        <Navbar cartCount={cartCount} />
      <ProductDetails  setCartCount={setCartCount} />
        </>
    )
}
export default TempProduct
