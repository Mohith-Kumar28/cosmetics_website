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
  <div>
    {/* <Portrait /> */}
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center  h-screen" >
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
        <br className="hidden lg:inline-block"/>readymade gluten
      </h1>
      <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
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
