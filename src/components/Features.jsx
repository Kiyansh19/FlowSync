import React from 'react'
import featuresData from './FeaturesData'
import FeaturesBox from './FeaturesBox'
const Features = () => {
  return (
    <div className='  bg-gradient-to-b from-blue-200 via-blue-100 to-white bg-fixed pb-30 features-walla' id='features'>
        <div className="features pl-20 pt-10">
            <h1 className='text-3xl font-bold'> <span className='text-yellow-400 text-4xl pr-2'>|</span>Why FLowSync ?</h1>
        </div>
        <div className='px-30 pb-20' >
          <div className="features-container flex flex-wrap gap-6 justify-center mt-5 cursor-pointer pt-10">
        {featuresData.map((feature) => (
          <FeaturesBox 
            key={feature.id} 
            icon={feature.icon} 
            title={feature.title} 
            description={feature.description} 
            link={feature.link}
          />
        ))}
      </div>
        </div>
        

       
        
    </div>
  )
}

export default Features;