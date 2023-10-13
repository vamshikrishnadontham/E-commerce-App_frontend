import React, { useState } from "react";
import { CarouselItem } from "./CarouselItem";
import leftarrow from './Media/left arrow2.png'
import rightarrow from './Media/right arrow.2png.png'
import radiochecked from './Media/radiochecked.png'
export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
     
      icon: require("./Media/iphone.webp"),
    },
    {
     
      icon: require("./Media/carousel1.jpg123.jpg"),
    },
    {
     
      icon: require("./Media/624f9293b94ee221.webp"),
    },
  ];
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
  };
  return (
    <div className="carousel">
      <div
        className="inner"
        style={{ transform: `translate(-${activeIndex * 100}%)`
     }}
      >
        {items.map((item) => {
          return <CarouselItem item={item} width={"100%"} />;
        })}
      </div>

      <div className="carousel-buttons">
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <span class="material-symbols-outlined"> <img className="arrows" src={leftarrow} alt='not'/></span>{" "}
        </button>
        <div className="indicators">
          {items.map((item, index) => {
            return (
              <button
                className="indicator-buttons"
                onClick={() => {
                  updateIndex(index);
                }}
              >
                <span 
                  className={`material-symbols-outlined  radio ${
                    index === activeIndex
                      ? "indicator-symbol-active"
                      : "indicator-symbol"
                  } `}
                >
                  O
                </span>
              </button>
            );
          })}
        </div>
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <span class="material-symbols-outlined"><img className="rightarrows" src={rightarrow} alt='not'/></span>
        </button>
      </div>
    </div>
  );
};