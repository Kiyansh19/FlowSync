import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Features from './components/Features'
import Pricing from './components/pricingSection'
import Testimonials from './components/Testimonials'
import ContactWalla from './components/Contact'

const App = () => {
  return (
    <>
    <Navbar/>
    <Home/>
   <Features/>
   <Pricing/>
   <Testimonials/>
    <ContactWalla/>
    </>
  )
}

export default App