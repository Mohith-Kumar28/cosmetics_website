import React from 'react'

const Blog = () => {
  return (
    <div className='justify-center py-14 bg-gray-100 rounded-t-[150px]'>
        <h2 className='text-2xl text-gray-900 justify-center text-center'>Top 3 Blogs this week</h2>
        <div className='h-1 w-20 mx-auto rounded-full mt-4 bg-red-500'></div>
        <section className="text-gray-600 body-font">
  <div className="container px-16 py-14 mx-auto ">
    <div className="flex flex-wrap  -mx-4 -my-8">
      <div className="py-8 px-4 lg:w-1/3">
        <div className="h-full flex items-start">
          <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
            <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Jul</span>
            <span className="font-medium text-lg text-gray-800 title-font leading-none">18</span>
          </div>
          <div className="flex-grow pl-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-red-500 mb-1">BEAUTY</h2>
            <h1 className="title-font text-xl font-medium text-gray-900 mb-3">The Power of Virtual Try-On: Transforming the Beauty Industry</h1>
            <p className="leading-relaxed mb-5">In the world of beauty, trying on products before making a purchase has always been a crucial step. Traditionally, we relied on swatches, samples, and in-store testing.</p>
            <a className="inline-flex items-center">
              <img alt="blog" src="https://dummyimage.com/103x103" className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"/>
              <span className="flex-grow flex flex-col pl-3">
                <span className="title-font font-medium text-gray-900">Alper Kamu</span>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="py-8 px-4 lg:w-1/3">
        <div className="h-full flex items-start">
          <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
            <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Jan</span>
            <span className="font-medium text-lg text-gray-800 title-font leading-none">09</span>
          </div>
          <div className="flex-grow pl-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-red-500 mb-1">JEWELERY</h2>
            <h1 className="title-font text-xl font-medium text-gray-900 mb-3">Accessorize with Confidence: Augmented Reality Jewelry Try-On</h1>
            <p className="leading-relaxed mb-5">Accessories are a powerful way to express personal style and elevate any outfit. From elegant necklaces to eye-catching earrings, the right piece of jewelry can truly make a statement.</p>
            <a className="inline-flex items-center">
              <img alt="blog" src="https://dummyimage.com/102x102" className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"/>
              <span className="flex-grow flex flex-col pl-3">
                <span className="title-font font-medium text-gray-900">Holden Caulfield</span>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="py-8 px-4 lg:w-1/3">
        <div className="h-full flex items-start">
          <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
            <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Aug</span>
            <span className="font-medium text-lg text-gray-800 title-font leading-none">29</span>
          </div>
          <div className="flex-grow pl-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-red-500 mb-1">NAIL POLISH</h2>
            <h1 className="title-font text-xl font-medium text-gray-900 mb-3">Unlock Your Nail Game: The Future of AR Nail Polish Try-On</h1>
            <p className="leading-relaxed mb-5">Nail polish has always been a beloved accessory, allowing us to express our creativity and complete our look. However, finding the perfect nail polish shade can sometimes feel like a never-ending search. </p>
            <a className="inline-flex items-center">
              <img alt="blog" src="https://dummyimage.com/101x101" className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"/>
              <span className="flex-grow flex flex-col pl-3">
                <span className="title-font font-medium text-gray-900">Henry Letham</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  </div>
  )
}

export default Blog