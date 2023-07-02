import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CustomIndicator from './slider/CustomIndicator';
import { Compare } from './slider/Compare';
import NailPolish from './slider/NailPolish';
import Jewelery from './slider/Jewelery';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
    console.log(index)
  };

  return (
    <div className="relative  md:max-h-screen  ">
      <Carousel
        autoPlay
        infiniteLoop
        // emulateTouch={true}
     stopOnHover={false}
        swipeable={false}
        showStatus={false}
        showThumbs={false}
        interval={4000}
        transitionTime={500}
        showIndicators={false}
        selectedItem={currentIndex}
        onChange={(index) => setCurrentIndex(index)}
        // className='cursor-grabbing'
      >
        <div key={0}>
       <Compare/>
       </div>
       <div key={1}>
       <NailPolish/>
       </div>
       <div key={2}>
       <Jewelery/>
       </div>
      </Carousel>
      <div className='flex relative z-10 -mt-24 lg:-mt-44 ml-8'>
      {/* <div className='absolute z-10 bottom-4 left-10'> */}
      <CustomIndicator currentIndex={currentIndex} totalSlides={3} onClick={handleIndicatorClick} />
      </div>
    </div>
  );
};

export default Hero;
