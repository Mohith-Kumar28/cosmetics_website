import React from 'react';

const CustomIndicator = ({ currentIndex, totalSlides, onClick }) => {
  const indicators = [];
  for (let i = 0; i < totalSlides; i++) {
    indicators.push(
      <span
        key={i}
        onClick={() => onClick(i)}
        className={`inline-block w-8 h-2 mx-1 cursor-pointer rounded-full ${
          i === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
        }`}
      />
    );
  }

  return <div className="flex mt-4">{indicators}</div>;
};

export default CustomIndicator;
