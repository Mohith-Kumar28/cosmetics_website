import Pricing from '@/components/Pricing'
import Footer from '@/components/layout/Footer'
import NavBar from '@/components/layout/NavBar'
import React from 'react'

const pricing = () => {
  return (
    <div className='bg-white'>
        <NavBar/>
        <div className='py-20'>
        <Pricing/>
        </div>
        <Footer/>
    </div>
  )
}

export default pricing