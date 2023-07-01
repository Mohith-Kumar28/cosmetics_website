import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CustomIndicator from './slider/CustomIndicator';
import { Compare } from './slider/Compare';
import NailPolish from './slider/NailPolish';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
    console.log(index)
  };

  return (
    <div className="relative overflow-hidden ">
      <Carousel
        autoPlay
        infiniteLoop
     
        swipeable={true}
        showStatus={false}
        showThumbs={false}
        interval={2000}
        transitionTime={500}
        showIndicators={false}
        selectedItem={currentIndex}
        onChange={(index) => setCurrentIndex(index)}
      >
        <div key={0}>
       <Compare/>
       </div>
       <div key={1}>
       <NailPolish/>
       </div>
      </Carousel>
      <div className='absolute z-10 bottom-32 left-10'>
      <CustomIndicator currentIndex={currentIndex} totalSlides={2} onClick={handleIndicatorClick} />
      </div>
    </div>
  );
};

export default Hero;
