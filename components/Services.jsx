import React from 'react'

const Services = () => {
  return (
    <div className='max-w-6xl w-full mx-auto'>



{/* brands */}
<div className="bg-white pt-36 pb-20 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Trusted by the world’s most innovative teams
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
            alt="Transistor"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
            alt="Reform"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
            alt="Tuple"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
            alt="SavvyCal"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
            alt="Statamic"
            width={158}
            height={48}
          />
        </div>
      </div>
    </div>








<section className="text-gray-600 body-font ">
  <div className=" px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Our Services</h1>
        <div className="h-1 w-20 bg-red-500 rounded"></div>
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
    </div>
    <div className="flex flex-wrap justify-center">
      <div className=" p-4 max-w-lg">
        <div className="bg-gray-100 p-6 rounded-lg flex flex-col md:flex md:flex-row gap-4">
          <img className="h-40 mr-5 rounded  object-contain object-center" src="/assets/enterprice.png" alt="content"/>
          <div >
          <h3 className="tracking-widest text-red-500 text-xs font-medium title-font mt-4">SUBTITLE</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font md:mb-4">Enterprise</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art </p>
          </div>
        </div>
      </div>
      <div className=" p-4 max-w-lg">
        <div className="bg-gray-100 p-6 rounded-lg flex-col md:flex md:flex-row gap-4">
          <img className="h-40 mr-5 rounded  object-contain object-center" src="/assets/onlineServices.png" alt="content"/>
          <div >
          <h3 className="tracking-widest text-red-500 text-xs font-medium title-font mt-4">SUBTITLE</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font md:mb-4">Online Services</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art </p>
          </div>
        </div>
      </div>
      {/* <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/721x401" alt="content"/>
          <h3 className="tracking-widest text-red-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Colosseum Roma</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div> */}
 </div>
    </div>

</section>
    </div>
  )
}

export default Services