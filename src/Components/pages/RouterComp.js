import Home from "./Home"
import Headset from "./Headset"
import Watches from "./Watches"
import Mobiles from "./Mobiles"
import Laptop from "./Laptop"
import LoginComp from './login-signup/LoginComp'
import RegisterComp from './login-signup/RegisterComp'
import { Route,Routes } from "react-router-dom"

import Realme from "./product_pages/mobiles/Realme"
import Vivo from "./product_pages/mobiles/Vivo"
import BoatWatch from "./product_pages/Watches/BoatWatch"
import Noise from "./product_pages/Watches/Noise"
import BoatHeadset from "./product_pages/Headset/BoatHeadset"
import AppleLaptop from "./product_pages/Laptop/AppleLaptop"
import Lenovo from "./product_pages/Laptop/Lenovo"
import ProductDetails from "./ProductDetails.js"

import LaptopDetails from "./LaptopDetails"
import Cart from "../Cart/Cart"
import Orderplaced from "../Cart/Orderplaced"
import OnePlus from "./product_pages/mobiles/OnePlus"
import Samsung from "./product_pages/mobiles/Samsung"
import AppleBuds from "./product_pages/Headset/AppleBuds"
import OnePlusBuds from "./product_pages/Headset/OnePlusBuds"
import AppleWatch from "./product_pages/Watches/AppleWatch"
import SamsungWatch from "./product_pages/Watches/SamsungWatch"
import Dell from "./product_pages/Laptop/Dell"
import Hp from "./product_pages/Laptop/Hp"
import MiviBuds from "./product_pages/Headset/MiviBuds"
const RouteComp=()=>{
    return(
        <>
        <Routes>
             <Route path="/" element={<Home/>}/>
            <Route path="/headset" element={<Headset/>}/> 
            <Route path="/watches" element={<Watches/>}/>
            <Route path="/mobiles" element={<Mobiles/>}/>
            <Route path="/laptop" element={<Laptop/>}/>
            <Route path="/login" element={<LoginComp/>}/>
            <Route path="/signup" element={<RegisterComp/>}/>
            
            
            <Route path="/productdetails" element={<ProductDetails/>}/>
            <Route path='/laptopdetails' element={<LaptopDetails/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/orderplaced" element={<Orderplaced/>}/>

            <Route path="/vivo" element ={<Vivo/>}/>
            <Route path="/realme" element ={<Realme/>}/>
            <Route path="/oneplus" element ={<OnePlus/>}/>
            <Route path="/samsung" element ={<Samsung/>}/>

            <Route path="/applewatch" element ={<AppleWatch/>}/>
            <Route path="/noisewatch" element ={<Noise/>}/>
            <Route path="/boatwatch" element ={<BoatWatch/>}/>
            <Route path="/samsungwatch" element ={<SamsungWatch/>}/>
             
            <Route path="/appleheadset" element ={<AppleBuds/>}/>
            <Route path="/boatheadset" element ={<BoatHeadset/>}/>
            <Route path="/oneplusheadset" element ={<OnePlusBuds/>}/>
            <Route path="/miviheadset" element ={<MiviBuds/>}/>

            <Route path="/applelaptop" element ={<AppleLaptop/>}/>
            <Route path="/lenovolaptop" element ={<Lenovo/>}/>
            <Route path="/delllaptop" element ={<Dell/>}/>
            <Route path="/hplaptop" element ={<Hp/>}/>
        </Routes>
        </>
    )
}
export default RouteComp