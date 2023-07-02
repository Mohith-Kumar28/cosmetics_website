import React, { useCallback } from "react";

/**
 * @see https://github.com/nerdyman/react-compare-slider
 */

import {
  ReactCompareSlider,
  ReactCompareSliderHandle,
  ReactCompareSliderImage
} from "react-compare-slider";

/** In `portrait` mode */
export const Portrait = ({ style, ...props }) => {
  const handlePositionChange = useCallback(
    (position) => console.log("[CustomHandle]", position),
    []
  );

  return (
    <ReactCompareSlider
      {...props}
      itemOne={
        <ReactCompareSliderImage
          src="https://images.unsplash.com/photo-1580458148391-8c4951dc1465?auto=format&fit=crop&w=1500&q=80"
          style={{ filter: "grayscale(1)" }}
          alt="one"
        />
      }
      itemTwo={
        <ReactCompareSliderImage
          src="https://images.unsplash.com/photo-1580458148391-8c4951dc1465?auto=format&fit=crop&w=1500&q=80"
          alt="two"
        />
      }
      onPositionChange={handlePositionChange}
      portrait
      style={{
        display: "flex",
        width: "100%",
        height: "50vh",
        ...style
      }}
    />
  );
};

/** With Customised `handle`. */
export const CustomHandle = ({ style, ...props }) => {
  const handlePositionChange = useCallback(
    (position) => console.log("[Portrait]", position),
    []
  );

  return (
    <ReactCompareSlider
      {...props}
      handle={
        <ReactCompareSliderHandle
          buttonStyle={{
            backdropFilter: undefined,
            background: "white",
            border: 0,
            color: "#333"
          }}
        />
      }
      itemOne={
        <ReactCompareSliderImage
          src="/assets/makeUp/beforeMakeUp.png"
        //   style={{ filter: "grayscale(1)" }}
          alt="one"
        />
      }
      itemTwo={
        <ReactCompareSliderImage
          src="/assets/makeUp/afterMakeUp.png"
          alt="two"
        />
      }
      onPositionChange={handlePositionChange}
      // style={{
      //   display: "flex",
      //   width: "100%",
      //   height: "50vh",
      //   ...style
      // }}
      className="flex h-full"
    />
  );
};

export const Compare = () => (
  <div className="bg-blue-50">
    {/* <Portrait /> */}
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 pt-24 pb-10 md:flex-row flex-col items-center  h-screen" >
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Discover Your Perfect Look with 
        Virtual Makeup Try-On
      </h1>
      <p className="mb-8 leading-relaxed">Experience the power of virtual makeup with our cutting-edge technology. Explore a wide range of cosmetics, from foundations to lipsticks, and effortlessly try them on in real-time. Discover your perfect shade, experiment with different looks, and confidently choose the products that suit your style.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Button</button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 h-full bg-red-200 rounded-lg">
    <CustomHandle position={50} />
    </div>
  </div>
</section>
    
  </div>
);
