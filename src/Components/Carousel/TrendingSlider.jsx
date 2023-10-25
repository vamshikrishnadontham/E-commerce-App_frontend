
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
const TrendingSlider=()=>{
 
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 1024, min: 850 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 850, min: 480},
    items: 3
  },
  mobile: {
    breakpoint: { max: 480, min: 0 },
    items: 1
  }
}

    const data=[
      {
          product_tittle: "vivo T2x 5G (Flash Blue, 4GB RAM+128GB)",
          image:
            "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/c/s/x/-original-imagzjhwaaewgj8r.jpeg?q=70",
          price: 11999,
          highlights:
            "With the superb Vivo T2x 5G, you can take advantage of great pictures and a flawless user experience. With the Vivo T2x 5G, you can experience exceptional performance owing to its 7 nm 5G CPU, the octa-core Dimensity 6020, with a top clock speed of 2.2 GHz. Additionally, the 50 MP main camera on this smartphone beautifully catches every detail you see. Additionally, Super Night Selfie employs noise cancellation technology in conjunction with an Aura Screen Light to produce a calming light that is effective in low light. The pioneering Extended RAM 3.0 technology also uses ROM to expand RAM with a maximum capacity of 8 GB. This enables smooth app switching and allows up to 27 active applications to run in the background.",
          brand: "vivo",
      category:"mobile"
        },
        {
          product_tittle:"realme narzo 50A Prime (Flash Blue, 4GB RAM+128GB Storage)",
          image:"https://m.media-amazon.com/images/I/81WPIz1l5wL._AC_UY327_FMwebp_QL65_.jpg",
          price:12499,
          highlights:`About this item
          Display - 16.7 cm (6.6 inch) 2408*1080 FHD+ Resolution | 90.7% Screen to body Ratio | 16.7 M Screen Colors | 600nits Peak Brightness
          5000 mAh Massive Battery which brings you all day Power | Ultra Saving Mode
          Powerful Unisoc T612 processor | Boasts superb performance with an AnTuTu Benchmark Score of 214, 150 | 12 nm Process with Octa-core CPU
          50MP AI Triple Rear Camera (f/1.8 Aperture, B&W Lens f/2.8 Aperture, Macro Lens f/2.8 Aperture)| 8MP Front Camera
          4 GB RAM | 128 GB ROM`,
          brand:"realme",
          category:"mobile"
        },
        {
          product_tittle:"Apple MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage",
          image:"https://m.media-amazon.com/images/I/71TPda7cwUL._AC_UY327_FMwebp_QL65_.jpg",
          price:69990,
          highlights:`About this item
          All-Day Battery Life – Go longer than ever with up to 18 hours of battery life.
          Powerful Performance – Take on everything from professional-quality editing to action-packed gaming with ease. The Apple M1 chip with an 8-core CPU delivers up to 3.5x faster performance than the previous generation while using way less power.
          Superfast Memory – 8GB of unified memory makes your entire system speedy and responsive. That way it can support tasks like memory-hogging multitab browsing and opening a huge graphic file quickly and easily.
          Stunning Display – With a 13.3-inch/33.74 cm Retina display, images come alive with new levels of realism. Text is sharp and clear, and colors are more vibrant.`,
          brand:"applelaptop",
          category:"laptop"
        },
        {
          product_tittle:"Lenovo IdeaPad Gaming 3 AMD Ryzen 5 6600H 15.6",
          image:"https://m.media-amazon.com/images/I/61cAO0yr8nL._AC_UY327_FMwebp_QL65_.jpg",
          price:64490,
          highlights:`About this item
          Processor: 11th Gen Intel Core i3-1115G4 | Speed: 3.0 GHz (Base) - 4.1 GHz (Max) | 2 Cores | 4 Threads | 6MB Cache
          OS & Software: Windows 11 Home 64 | Office Home and Student 2021 | Xbox GamePass Ultimate 3-month subscription
          Graphics: Integrated Intel UHD Graphics | Memory: 8GB RAM DDR4-2666, Upgradable Up to 16GB | Storage: 256 GB SSD
          Display: 15.6" FHD (1920x1080) | TN Technology Display | 250Nits Brightness | Anti Glare
          Design: 4 side narrow bezel | 1.99 cm & 1.65 kg | Non-backlit Keyboard | Connectivity: Wi-Fi 5 (11ac | 2x2) | BT 5.0
          Battery Life: 3-Cell 45Wh | Upto 6 Hours | Rapid Charge (Up to 80% in 1 Hour) || Audio: 2x 1.5W Stereo Speakers | HD Audio | Dolby Audio`,
          brand:"lenovolaptop",
          category:"laptop"
        },
        {
          product_tittle:"Noise Arc 1.38 Advanced Bluetooth Calling Smart Watch, 550 NITS Brightness",
          image:"https://m.media-amazon.com/images/I/61Y5xjNO4lL._AC_UY327_FMwebp_QL65_.jpg",
          price:1099,
          highlights:`About this item
          1.38” TFT display: Featuring a vibrant round display and a stylish metallic finish, the smartwatch offers a premium on-screen experience.
          Tru SyncTM: Hassle-free pairing, stable connectivity and lower battery consumption combine to provide the most advanced calling experience.
          Noise Buzz: Manage calls directly from your wrist. Access your call logs, make calls from the dial pad and save up to 10 favourite contacts.
          Noise Health SuiteTM: Take better care of your daily health with a series of health monitoring tools – Blood oxygen monitor, Sleep monitor, 24x7 heart rate monitor, Stress measurement, Breathe practice & Female cycle tracker.
          100 sports modes: Indulge in the routine of your preference with several sports modes to choose from.`,
          brand:"noisewatch",
          category:"watch"
        },
        {
          product_tittle:"boAt Wave Call Smart Watch with Bluetooth Calling, 1.69” HD Display with 550 NITS",
          image:"https://m.media-amazon.com/images/I/61H5PEqBBAL._AC_UY327_FMwebp_QL65_.jpg",
          price:1399,
          highlights:`About this item
          1.38” TFT display: Featuring a vibrant round display and a stylish metallic finish, the smartwatch offers a premium on-screen experience.
          Tru SyncTM: Hassle-free pairing, stable connectivity and lower battery consumption combine to provide the most advanced calling experience.
          Noise Buzz: Manage calls directly from your wrist. Access your call logs, make calls from the dial pad and save up to 10 favourite contacts.
          Noise Health SuiteTM: Take better care of your daily health with a series of health monitoring tools – Blood oxygen monitor, Sleep monitor, 24x7 heart rate monitor, Stress measurement, Breathe practice & Female cycle tracker.
          100 sports modes: Indulge in the routine of your preference with several sports modes to choose from.`,
          brand:"boatwatch",
          category:"watch"
        },
        {
          product_tittle:"boAt Airdopes Atom 81 TWS Earbuds with Upto 50H Playtime, Quad Mics ENx™ Tech",
          image:"https://m.media-amazon.com/images/I/61yyQD1KLOL._AC_UY327_FMwebp_QL65_.jpg",
          price:899,
          highlights:`About this item
          Playback- Airdopes Atom 81 offer a total playtime of up to 50HRS, including up to 10HRS of playtime per earbud.
          Clear Voice Calls- Be heard clear across voice calls without those usual interruptions, with the Quad Mics ENx Tech enabled Airdopes Atom 81, that cancels out unwanted background noises during calls.
          Drivers- Delve into the boAt immersive auditory experience on Airdopes Atom 81 TWS earbuds courtesy its 13mm audio drivers. Frequency - 20Hz-20KHz
          Super Low Latency- Enjoy a lag less entertainment experience with BEAST Mode for low latency(50ms) so that your gaming sessions always stay smooth.
          ASAP Charge - Courtesy our ASAP Charge tech, the earbuds can garner up to 60Min of playtime in just 5Min of charging.
          Bluetooth Version- Its quipped with the latest Bluetooth v5.3 for faster connectivity.`,
          brand:"boatheadset",
          category:"headset"
        },
        {
          product_tittle:"Mivi DuoPods A850 AI-ENC TWS with HDCalls Technology,13mm Rich Bass Drivers,50Hrs Playtime",
          image:"https://m.media-amazon.com/images/I/71GOQJqmVJL._AC_UY327_FMwebp_QL65_.jpg",
          price:999,
          highlights:`About this item
          Product Design: MIVI DuoPods A850 TWS feature 'The Starry Night Effect' shimmer on the case & a stunning superior-grade Metallic finish on the pods.
          Call Clarity: The ear buds are powered by AI-ENC to eliminate environmental noise thus helping you deliver clear message on calls
          Powerful bass and Crisp Sound: The Electroplated 13mm drivers with custom amplifiers make DuoPods A850 a class apart in music.
          50 Hours of Combined Playtime: The Swift Charge Technology comes with Type C charging allowing you to get 500 mins of playtime in just 10 minutes of charging.
          Gaming Mode: The ultra low latency gaming mode ensures a lag-free unparalleled multiplayer gaming experience.
          Colors: The DuoPods A850 earbuds come in 5 unique colors. From sophisticated hues to bold and beautiful, pick the one that suits your vibe. Say NO to wired earphones and join the revolution of ground-breaking TWS earbuds.`,
          brand:"miviheadset",
          category:"headset"
        },
  
        {
          product_tittle: "vivo T1 5G (Starlight Black, 128 GB)  (6 GB RAM)",
          image:
            "https://rukminim2.flixcart.com/image/312/312/kzd147k0/mobile/d/1/b/-original-imagbe5qddy9xr6y.jpeg?q=70",
          price: 16990,
          highlights:
            "With the superb Vivo T1 5G, you can take advantage of great pictures and a flawless user experience. With the Vivo T2x 5G, you can experience exceptional performance owing to its 7 nm 5G CPU, the octa-core Dimensity 6020, with a top clock speed of 2.2 GHz. Additionally, the 50 MP main camera on this smartphone beautifully catches every detail you see. Additionally, Super Night Selfie employs noise cancellation technology in conjunction with an Aura Screen Light to produce a calming light that is effective in low light. The pioneering Extended RAM 3.0 technology also uses ROM to expand RAM with a maximum capacity of 8 GB. This enables smooth app switching and allows up to 27 active applications to run in the background.",
          brand: "vivo",
          category:"mobile"
        },
        {
          product_tittle:"realme narzo N53 (Feather Black, 4GB+64GB)",
          image:"https://m.media-amazon.com/images/I/71DSxfKzkJL._AC_UY327_FMwebp_QL65_.jpg",
          price:7999,
          highlights:`About this item
          Enjoy smooth multitasking and effortless app switching with the powerful 8GB dynamic RAM. Store all your favorite apps, photos, and files with the generous 64GB ROM
          Experience lightning-fast charging with the 33W SUPERVOOC technology, getting your device ready in no time. Say goodbye to long charging times and stay powered up for longer durations
          The slim and sleek 7.49mm design adds a touch of elegance to your device, making it comfortable to hold and carry. The feather gold design enhances the visual appeal, giving your phone a premium and luxurious look.
          Capture stunning, detailed photos with the high-resolution 50MP AI camera, bringing your memories to life.The AI-powered camera technology ensures intelligent scene recognition and enhances your photography skills.
          Stay connected and productive for extended periods with the massive 5000mAh battery, eliminating the need for frequent recharging. Enjoy long hours of entertainment, gaming, and browsing without worrying about running out of battery power.`,
          brand:"realme",
          category:"mobile"
        },
        {
          product_tittle:"Apple MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage",
          image:"https://m.media-amazon.com/images/I/71TPda7cwUL._AC_UY327_FMwebp_QL65_.jpg",
          price:69990,
          highlights:`About this item
          All-Day Battery Life – Go longer than ever with up to 18 hours of battery life.
          Powerful Performance – Take on everything from professional-quality editing to action-packed gaming with ease. The Apple M1 chip with an 8-core CPU delivers up to 3.5x faster performance than the previous generation while using way less power.
          Superfast Memory – 8GB of unified memory makes your entire system speedy and responsive. That way it can support tasks like memory-hogging multitab browsing and opening a huge graphic file quickly and easily.
          Stunning Display – With a 13.3-inch/33.74 cm Retina display, images come alive with new levels of realism. Text is sharp and clear, and colors are more vibrant.`,
          brand:"applelaptop",
          category:"laptop"
        },
        {
          product_tittle:"Lenovo IdeaPad Gaming 3 Intel Core i5-11320H 15.6 (39.62cm)",
          image:"https://m.media-amazon.com/images/I/61H5nnM7ZBL._AC_UY327_FMwebp_QL65_.jpg",
          price:49990,
          highlights:`About this item
          Processor: 11th Gen Intel Core i3-1115G4 | Speed: 3.0 GHz (Base) - 4.1 GHz (Max) | 2 Cores | 4 Threads | 6MB Cache
          OS & Software: Windows 11 Home 64 | Office Home and Student 2021 | Xbox GamePass Ultimate 3-month subscription
          Graphics: Integrated Intel UHD Graphics | Memory: 8GB RAM DDR4-2666, Upgradable Up to 16GB | Storage: 256 GB SSD
          Display: 15.6" FHD (1920x1080) | TN Technology Display | 250Nits Brightness | Anti Glare
          Design: 4 side narrow bezel | 1.99 cm & 1.65 kg | Non-backlit Keyboard | Connectivity: Wi-Fi 5 (11ac | 2x2) | BT 5.0
          Battery Life: 3-Cell 45Wh | Upto 6 Hours | Rapid Charge (Up to 80% in 1 Hour) || Audio: 2x 1.5W Stereo Speakers | HD Audio | Dolby Audio`,
          brand:"lenovolaptop",
          category:"laptop"
        },
        {
          product_tittle:"Noise Twist Round dial Smart Watch with Bluetooth Calling, 1.3 TFT Display, up-to 7 Days Battery",
          image:"https://m.media-amazon.com/images/I/61YUxOoXWAL._AC_UY327_FMwebp_QL65_.jpg",
          price:1299 ,
          highlights:`About this item
          1.38” TFT display: Featuring a vibrant round display and a stylish metallic finish, the smartwatch offers a premium on-screen experience.
          Tru SyncTM: Hassle-free pairing, stable connectivity and lower battery consumption combine to provide the most advanced calling experience.
          Noise Buzz: Manage calls directly from your wrist. Access your call logs, make calls from the dial pad and save up to 10 favourite contacts.
          Noise Health SuiteTM: Take better care of your daily health with a series of health monitoring tools – Blood oxygen monitor, Sleep monitor, 24x7 heart rate monitor, Stress measurement, Breathe practice & Female cycle tracker.
          100 sports modes: Indulge in the routine of your preference with several sports modes to choose from.`,
          brand:"noisewatch",
          category:"watch"
        },
        {
          product_tittle:"boAt Wave Style Call Smart Watch with Advanced BT Calling Chip,DIY Watch Face Studio",
          image:"https://m.media-amazon.com/images/I/61rJhMxiusL._AC_UY327_FMwebp_QL65_.jpg",
          price:1099,
          highlights:`About this item
          1.38” TFT display: Featuring a vibrant round display and a stylish metallic finish, the smartwatch offers a premium on-screen experience.
          Tru SyncTM: Hassle-free pairing, stable connectivity and lower battery consumption combine to provide the most advanced calling experience.
          Noise Buzz: Manage calls directly from your wrist. Access your call logs, make calls from the dial pad and save up to 10 favourite contacts.
          Noise Health SuiteTM: Take better care of your daily health with a series of health monitoring tools – Blood oxygen monitor, Sleep monitor, 24x7 heart rate monitor, Stress measurement, Breathe practice & Female cycle tracker.
          100 sports modes: Indulge in the routine of your preference with several sports modes to choose from.`,
          brand:"boatwatch",
          category:"watch"
        },
        {
          product_tittle:"boAt Nirvana 751 ANC Hybrid Active Noise Cancelling Bluetooth Wireless Over Ear Headphones with Up to 65H",
          image:"https://m.media-amazon.com/images/I/71ISIssoVFL._AC_UY327_FMwebp_QL65_.jpg",
          price:4049,
          highlights:`About this item
          Active Noise Cancellation- Say adios to the chaos with Active Noise Cancellation feature and elevate the vibe to a whole new level of pleasure with Nirvanaa 751ANC, delivering up to 33dB Hybrid ANC.
          Battery Time- Stay connected to your playlist for mammoth durations, every day with up to 54 hours of playtime in ANC mode and up to 65 hours in normal playback mode.
          ASAP Charge- This headphone comes equipped with our ASAP Charge technology that helps it garner 10 hours of playtime in just 10 min of charge.
          Driver Size- Exhilarate your senses with crystal clear sound reproduction via 40mm drivers, delivering you the boAt immersive experience.
          Ambient Mode- It comes equipped with Ambient Sound Mode that lets the listener stay aware of the sounds in the ambience even while the playback is on. Frequency Range 20Hz -20kHz`,
          brand:"boatheadset",
          category:"headset"
        },
          {
      product_tittle:"Mivi Commando Q9 Gaming TWS with Aurora Light, Dual RGB,13mm Electro-Dynamic Drivers",
      image:"https://m.media-amazon.com/images/I/71gf8hedVdL._AC_UY327_FMwebp_QL65_.jpg",
      price:1699,
      highlights:`About this item
      Product Design: MIVI DuoPods A850 TWS feature 'The Starry Night Effect' shimmer on the case & a stunning superior-grade Metallic finish on the pods.
      Call Clarity: The ear buds are powered by AI-ENC to eliminate environmental noise thus helping you deliver clear message on calls
      Powerful bass and Crisp Sound: The Electroplated 13mm drivers with custom amplifiers make DuoPods A850 a class apart in music.
      50 Hours of Combined Playtime: The Swift Charge Technology comes with Type C charging allowing you to get 500 mins of playtime in just 10 minutes of charging.
      Gaming Mode: The ultra low latency gaming mode ensures a lag-free unparalleled multiplayer gaming experience.
      Colors: The DuoPods A850 earbuds come in 5 unique colors. From sophisticated hues to bold and beautiful, pick the one that suits your vibe. Say NO to wired earphones and join the revolution of ground-breaking TWS earbuds.`,
      brand:"miviheadset",
      category:"headset"
    },
  ]
return(
  <div style={{ margin:"10px"}}>
    <h1>Trending Products</h1>
<Carousel responsive={responsive}>
  {data.map((item) => (
  <div className="card2" style={{backgroundColor:"light-grey"}} >
    <div >
    <p><img className="product--image" src={item.image}  alt="not"/></p>
    <h2>{item.product_tittle.slice(0,50)}</h2>
    <p className="price">Price:₹{item.price}</p>
    <Link  className="addtocartbtn" to='/productdetails' state={{index:item}} >
      <button className='btn '>Add To Cart</button>
      </Link>
    </div>
  </div>))}
 
  
</Carousel> 
  </div>
)
}
export default TrendingSlider