

import './App.css';
import './Components/pages/EStyles.css'
import Footer from './Components/pages/Footer';
import Navbar from './Components/pages/Navbar';
import RouteComp from './Components/pages/RouterComp';
import {Carousel} from './Carousel';
// import GenericComp from './Components/pages/GenericComp';
function App() {
  return (
    <div className="App">
     <Navbar/>
     {/* <Carousel/> */}
     <RouteComp/>
     <Footer/>
     {/* <GenericComp/> */}
    </div>

  );
}

export default App;
