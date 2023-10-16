import "./CarouselStyles.css";
import SliderMenu from "./SliderData";
import { useState ,useEffect} from "react";
function SliderComp(){
    let [currentIndex, setIndex]=useState(0);
    const updateSilder=(val)=>{
          let n=SliderMenu.length;
         setIndex(currentIndex=>(currentIndex+val+n)%n);
    }
// auto slide
useEffect(()=>{
    const interval=  setInterval(()=>{   
        updateSilder(1);
},5000);
return ()=>clearInterval(interval);
},[currentIndex]);
  
// slide to right 
 function toForward(){
   updateSilder(1);
 }
// slide to left 
 function toBackward(){
    updateSilder(-1);
 }
//  console.log("slider",SliderMenu[currentIndex]);
return(
    <>   
    <div className="sliders"> 
        <span className="image">
        <img src={SliderMenu[currentIndex].imageSrc} alt={SliderMenu[currentIndex].imageAlt} className="silderImages" id={SliderMenu[currentIndex].imageId} />
        <button className="backward" onClick={toBackward}>  {`<`} </button>
    <button className="forward" onClick={toForward}>{'>'} </button>
        </span>
      </div>
           </>
       )}
export default SliderComp;