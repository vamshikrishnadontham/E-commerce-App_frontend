import React from "react";

export const CarouselItem = ({ item, width }) => {
  return (
    <div className="carousel-item" style={{ width: "99vw" }}>
      {/* <div></div> */}
      <img className="carousel-img" src={item.icon} width='95vw' height='370px' alt="not"/>
      
    </div>
  );
};