import React, { useState } from 'react';
import './TrendingCarousel.css'; // You'll need to create the CSS file
import  products  from './Trendingdata'
const TrendingCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + products.length) % products.length);
  };
console.log("products",products);
  return (
    <div className="trending-carousel">
      <div className="carousel-wrapper">
        <div className="carousel">
          {products.map((product, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
            >
              <img src={product.imageSrc} alt={product.name} />
              <h3>{product.itemName}</h3>
              <p>{product.Price}</p>
            </div>
          ))}
        </div>
      </div>

      <button className="prev" onClick={prevSlide}>
        &#8249;
      </button>
      <button className="next" onClick={nextSlide}>
        &#8250;
      </button>
    </div>
  );
};

export default TrendingCarousel;
