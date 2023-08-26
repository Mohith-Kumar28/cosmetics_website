import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CustomIndicator from './slider/CustomIndicator';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleIndicatorClick = (index) => {
      setCurrentIndex(index);
      console.log(index)
    };
  return (
    <div>
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <h1 className="text-3xl font-medium title-font text-gray-900  text-center">Testimonials</h1>
    <div className='h-1 w-20 mx-auto rounded-full mt-2 bg-red-500'></div>

{/* slider */}
<div className="relative overflow-hidden ">
      <Carousel
        autoPlay
        infiniteLoop
        stopOnHover={false}
        // swipeable={true}
        // emulateTouch={true}
        showStatus={false}
        showThumbs={false}
        interval={2000}
        transitionTime={500}
        showIndicators={false}
        selectedItem={currentIndex}
        onChange={(index) => setCurrentIndex(index)}
        // className='cursor-grabbing'
      >
        <div key={0}>
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-14 mx-auto">
    <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
      </svg>
      <p className="leading-relaxed text-lg">Mystic Beauty's upcoming services have already piqued my interest. The concept of trying on hair dye and makeup virtually is exactly the kind of innovation I've been waiting for. I'm eagerly waiting to see how they bring together beauty and technology to create a new and exciting shopping experience.</p>
      <span className="inline-block h-1 w-10 rounded bg-red-500 mt-8 mb-6"></span>
      <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Sarah W</h2>
      <p className="text-gray-500">Fashion Blogger</p>
    </div>
  </div>
</section>
       </div>
       <div key={1}>
       <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
      </svg>
      <p className="leading-relaxed text-lg">As someone who loves to keep up with the latest beauty trends, Mystic Beauty has me intrigued. The idea of being able to virtually try on different makeup products and styles is incredibly appealing. I'm looking forward to their launch and can't wait to dive into the world of beauty exploration they're promising!</p>
      <span className="inline-block h-1 w-10 rounded bg-red-500 mt-8 mb-6"></span>
      <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Alex M</h2>
      <p className="text-gray-500">Tech Enthusiast</p>
    </div>
  </div>
</section>
       </div>
       <div key={2}>
       <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
      </svg>
      <p className="leading-relaxed text-lg">I can't contain my excitement for what's about to come with Mystic Beauty! The idea of virtually trying on makeup and experimenting with different styles from home sounds like a dream. I can't wait to see how their technology will revolutionize the way I explore beauty. Counting down the days!</p>
      <span className="inline-block h-1 w-10 rounded bg-red-500 mt-8 mb-6"></span>
      <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Emily</h2>
      <p className="text-gray-500">Busy Professional</p>
    </div>
  </div>
</section>
       </div>
      </Carousel>
      <div className='flex relative z-10 justify-center -mt-20'>
      {/* <div className='absolute z-10 bottom-8 left-0 right-0 m-auto text-center'> */}
      <CustomIndicator currentIndex={currentIndex} totalSlides={3} onClick={handleIndicatorClick} />
      </div>
    </div>

  </div>
</section>
    </div>
  )
}

export default Testimonials