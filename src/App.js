

// import {useState } from 'react';
// import './App.css';
// import './Components/pages/EStyles.css'
// import Footer from './Components/pages/Footer';
// import Navbar from './Components/pages/Navbar';
// import RouteComp from './Components/pages/RouterComp';
// import Global from './Global'
// import { PayPalScriptProvider} from "@paypal/react-paypal-js";
// // import { PayPalButtons } from '@paypal/react-paypal-js';
// import PayPalApis from "./Components/Paypal/PaypalApi";
// function App() {

//   const initialOptions = {
//     clientId: "AQCwXveabS3N2dUOnQVsSJlj2-h9QH9lTa5xPuO5w4u791xYV11w8ic9HJr2FCs0LEXTLZJBvFxaaFsU",
//     currency: "USD",
//     intent: "capture",
//   };

//   const updateGdata=(data)=>
// setGdata({...Gdata,...data})
  
//   const [Gdata,setGdata]=useState({"islogin":false,"email":'',"username":'',"token:":'',"updateGdata":updateGdata,"cartcount":0,});
 
//   return (
//     <PayPalScriptProvider options={initialOptions}>
//     <div className="App">
//       <Global.Provider value={Gdata}>
//       <Navbar/>
//     <RouteComp/>
//      <Footer/> 
//       </Global.Provider>
//     <PayPalApis/>
//     </div>
// </PayPalScriptProvider>
//   );
// }

// export default App;
import React, { useState } from 'react';
import './App.css';
import './Components/pages/EStyles.css';
import Footer from './Components/pages/Footer';
import Navbar from './Components/pages/Navbar';
import RouteComp from './Components/pages/RouterComp';
import Global from './Global';
function App() {

  const updateGdata = (data) =>
    setGdata({ ...Gdata, ...data });

  const [Gdata, setGdata] = useState({
    "islogin": false,
    "email": '',
    "username": '',
    "token": '',
    "updateGdata": updateGdata,
    "cartcount": 0,
  });

  return (
  
      <div className="App">
        <Global.Provider value={Gdata}>
          <Navbar />
          <RouteComp />
          
          <Footer />
        </Global.Provider>
      
      </div>
  );
}

export default App;
