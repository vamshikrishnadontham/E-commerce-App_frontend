import Home from "./Home"
import Headset from "./Headset"
import Watches from "./Watches"
import Mobiles from "./Mobiles"
import Laptop from "./Laptop"
import LoginComp from './login-signup/LoginComp'
import RegisterComp from './login-signup/RegisterComp'
import { Route,Routes } from "react-router-dom"
import ProfileComp from "./login-signup/ProfileComp"
import GenericComp from "./GenericComp"
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

            <Route path="/vivo" element ={<GenericComp/>}/>
            <Route path="/realme" element ={<GenericComp/>}/>
            <Route path="/oneplus" element ={<GenericComp/>}/>
            <Route path="/samsung" element ={<GenericComp/>}/>

            <Route path="/applewatches" element ={<GenericComp/>}/>
            <Route path="/noise" element ={<GenericComp/>}/>
            <Route path="/boatwathes" element ={<GenericComp/>}/>
            <Route path="/samsungwatches" element ={<GenericComp/>}/>
             
            <Route path="/applebuds" element ={<GenericComp/>}/>
            <Route path="/boatbuds" element ={<GenericComp/>}/>
            <Route path="/oneplusbuds" element ={<GenericComp/>}/>
            <Route path="/mivi" element ={<GenericComp/>}/>

            <Route path="/applelaptops" element ={<GenericComp/>}/>
            <Route path="/lenovo" element ={<GenericComp/>}/>
            <Route path="/dell" element ={<GenericComp/>}/>
            <Route path="/hp" element ={<GenericComp/>}/>
        </Routes>
        </>
    )
}
export default RouteComp