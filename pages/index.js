import Image from 'next/image'
import { Inter } from 'next/font/google'
import NailPolish from '@/components/slider/NailPolish'
import { Compare } from '@/components/slider/Compare'
import Hero from '@/components/Hero'
import NavBar from '@/components/layout/NavBar'
import Services from '@/components/Services'
import Pricing from '@/components/Pricing'
import Team from '@/components/Team'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/layout/Footer'
import ContactUs from '@/components/ContactUs'
import Blog from '@/components/Blog'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`bg-white min-h-screen  ${inter.className}`}
    >
      <NavBar/>
      <Hero/>
      <Services/>
      <Pricing/>
      <Team/>
      <ContactUs/>
      <Testimonials/>
      <Blog/>
      <Footer/>
      {/* <Compare/>
    <NailPolish/> */}
    </main>
  )
}
