import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const NailPolish = () => {
    
    const nailPolishOptions = ['1', '2', '3','4']; // List of nail polish options
    const [selectedOption, setSelectedOption] = useState(nailPolishOptions[0]);
  const autoplayInterval = 1000; // Autoplay time gap in milliseconds

  useEffect(() => {
    let currentIndex = 0;

    const autoplay = setInterval(() => {
      setSelectedOption(nailPolishOptions[currentIndex]);
      currentIndex = (currentIndex + 1) % nailPolishOptions.length;
    }, autoplayInterval);

    return () => clearInterval(autoplay); // Cleanup the interval on component unmount
  }, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const getBackgroundImage = () => {
    // if (selectedOption === null) {
    //   return `/assets/nailPolish/nailPolishBig/nail_big_1.png`;
    // }

    // Assuming you have images named 'red.jpg', 'blue.jpg', 'green.jpg', etc.
    return `/assets/nailPolish/nailPolishBig/nail_big_${selectedOption}.png`;
  };
  const getSmallImage = (option) => {
    if (selectedOption === null) {
      return `/assets/nailPolish/nailPolishSmall/nail_small_1.png`;
    }

    // Assuming you have images named 'red.jpg', 'blue.jpg', 'green.jpg', etc.
    return `/assets/nailPolish/nailPolishSmall/nail_small_${option}.png`;
  };

  return (
    <div className='text-gray-700 bg-yellow-50'>
   
  
    
    
      <section className="text-gray-600 body-font">
  <div className=" mx-auto flex pl-5 pt-20 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Express Your Style with AR Nail Polish Try-On
      
      </h1>
      <p className="mb-8 leading-relaxed">Say goodbye to indecision and embrace the vibrant world of nail polish with our AR nail polish try-on. No more guessing if a shade will complement your skin tone or outfit. Try on an array of colors, finishes, and nail art designs virtually, and see how they look on your nails in real-time. </p>
      <div className="flex justify-center">
      <Link href='mailto:viktoras@mysticbeauty.botique'>   <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Contact Us</button></Link>
        {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          


          {/* nailpolish options */}
    <div className='relative'>
        <div className=''> 
      <img src={getBackgroundImage()} alt="" />
      </div>

      <div className="space-x-4 flex absolute bottom-10 right-10">
        {nailPolishOptions.map((option) => (
      
        <div  key={option}
        className={`cursor-pointer w-16 md:w-28  rounded-lg drop-shadow-lg ${
          selectedOption === option ? 'border-b-4 border-red-500' : ''
        }`}
        onClick={() => handleOptionClick(option)}>
        <img 
           className='rounded-lg'
        src={getSmallImage(option)} alt="" />
        </div>
        ))}
      </div>
      </div>
    



    </div>
  </div>
</section>
    
    
    
    
    </div>
  );
};

export default NailPolish;
