import React from 'react'
import Navbar from '../pages/Navbar'
import emptycart from './EmptyCart_.png'
import { Link } from 'react-router-dom'
import './cart.css'
function Orderplaced() {
    return (
        <div>
            <Navbar/>
            <div><Link to='/'>
            <img  className='cartisempty' src={emptycart} alt='not found'/> </Link></div>
           
        </div>
    )
}

export default Orderplaced
