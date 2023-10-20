import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const TrendingCarousel = (props) => {
  const trendingProducts = [
    // Add your trending product data here
    { id: 1, name: "Apple Ipad", image:"https://m.media-amazon.com/images/I/71JPbL+lnXL._AC_UY327_FMwebp_QL65_.jpg",
},
    { id: 2, name: "Apple watch",image:"https://m.media-amazon.com/images/I/61YUxOoXWAL._AC_UY327_FMwebp_QL65_.jpg",
},
    { id: 3, name: "Boat Headset", image:"https://m.media-amazon.com/images/I/619wdC9vcCL._AC_UY327_FMwebp_QL65_.jpg"},
    { id: 4, name: "Boat Headset", image:"https://m.media-amazon.com/images/I/61TmcMQHB+L._AC_UY327_FMwebp_QL65_.jpg"},
    { id: 5, name: "Boat Headset", image:"https://m.media-amazon.com/images/I/61l+14s5QVL._AC_UY327_FMwebp_QL65_.jpg" },
      { id: 6, name: "Boat Headset", image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/c/s/x/-original-imagzjhwaaewgj8r.jpeg?q=70"},
    // Add more products as needed
  ];
console.log("props from trending====",props.value);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of products to show at once
    slidesToScroll: 1,
  };
console.log(trendingProducts);
  return (
    <div className="trending-carousel" style={{width:"85vw"}}>
        <hr></hr>
      <h1>Trending Products</h1>
      <hr />
      
      <Slider {...settings} >
      {/* trendingProducts */}
        {props.value&&props.value.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
          </div>
        ))}
      </Slider>
      
      
    </div>
  );
};

export default TrendingCarousel;


// import React from "react";
// import './TrendingCarousel.css'
// import { Carousel, Container, Row, Col, Button } from "react-bootstrap";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const TrendingProductsCarousel = () => {
//   const products = [
//     // Add your product data here
//     { id: 1, name: "Apple Ipad", image: require("../assets/mobiles/Apple Ipad.png") },
//     { id: 2, name: "Apple watch", image: require("../assets/mobiles/Apple Watch 21-1.png") },
    
//     { id: 3, name: "Boat Headset", image: require("../assets/mobiles/beats_solo_2.png")},
//     { id: 4, name: "Boat Headset", image: require("../assets/mobiles/beats_solo_2.png")},
//     { id: 5, name: "Boat Headset", image: require("../assets/mobiles/beats_solo_2.png")},
//     { id: 6, name: "Boat Headset", image: require("../assets/mobiles/beats_solo_2.png")},
//     // Add more products as needed
//   ];

//   return (
//     <Container>
//       <Row>
//         <Col>
//           <Carousel indicators={false} slide={true} className="parent">
//             {products.map((product) => (
//               <Carousel.Item key={product.id}>
//                 <img
//                   className="d-block w-100"
//                   src={product.image}
//                   alt={product.name}
//                 />
//               </Carousel.Item>
//             ))}
//           </Carousel>
//         </Col>
//       </Row>
//       <Row className="mt-3">
//         <Col className="text-center">
//           <Button variant="outline-primary">
//             <FaChevronLeft /> Previous
//           </Button>
//           <Button variant="outline-primary" className="ml-2">
//             Next <FaChevronRight />
//           </Button>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default TrendingProductsCarousel;
