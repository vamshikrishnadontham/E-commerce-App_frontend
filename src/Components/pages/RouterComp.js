import Home from "./Home"
import Headset from "./Headset"
import Watches from "./Watches"
import Mobiles from "./Mobiles"
import Laptop from "./Laptop"
import LoginComp from './login-signup/LoginComp'
import RegisterComp from './login-signup/RegisterComp'
import { Route,Routes } from "react-router-dom"
import ProfileComp from "./login-signup/ProfileComp"
import Realme from "./product_pages/mobiles/Realme"
import Vivo from "./product_pages/mobiles/Vivo"
import SingleProductComp from "./SingleProductComp"
import BoatWatch from "./product_pages/Watches/BoatWatch"
import Noise from "./product_pages/Watches/Noise"
import Mivi from "./product_pages/Headset/MiviHeadset"
import BoatHeadset from "./product_pages/Headset/BoatHeadset"
import AppleLaptop from "./product_pages/Laptop/AppleLaptop"
import Lenovo from "./product_pages/Laptop/Lenovo"
import ProductDetails from "./ProductDetails.js"
import LaptopDetails from "./LaptopDetails"
import Cart from "../Cart/Cart"
import Orderplaced from "../Cart/Orderplaced"
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
            
            <Route path="/profile" element={<ProfileComp/>}/>
            <Route path="/productdetails" element={<ProductDetails/>}/>
            <Route path='/laptopdetails' element={<LaptopDetails/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/orderplaced" element={<Orderplaced/>}/>

            <Route path="/vivo" element ={<Vivo/>}/>
            <Route path="/realme" element ={<Realme/>}/>
            <Route path="/oneplus" element ={<SingleProductComp/>}/>
            <Route path="/samsung" element ={<SingleProductComp/>}/>

            <Route path="/applewatches" element ={<SingleProductComp/>}/>
            <Route path="/noise" element ={<Noise/>}/>
            <Route path="/boatwatch" element ={<BoatWatch/>}/>
            <Route path="/samsungwatches" element ={<SingleProductComp/>}/>
             
            <Route path="/applebuds" element ={<SingleProductComp/>}/>
            <Route path="/boatbuds" element ={<BoatHeadset/>}/>
            <Route path="/oneplusbuds" element ={<SingleProductComp/>}/>
            <Route path="/mivi" element ={<Mivi/>}/>

            <Route path="/applelaptops" element ={<AppleLaptop/>}/>
            <Route path="/lenovo" element ={<Lenovo/>}/>
            <Route path="/dell" element ={<SingleProductComp/>}/>
            <Route path="/hp" element ={<SingleProductComp/>}/>
        </Routes>
        </>
    )
}
export default RouteComp