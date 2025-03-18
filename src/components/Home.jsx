import React from 'react'
import homeImage from '../assets/work.webp'
// import homeImage2 from '../assets/work2.webp'
import homeImage3 from '../assets/work3.webp'
const Home = () => {
  return (
    <div>
        <div className='homeSection p-15 pr-5 pt-35 pb-40 flex justify-around flex-wrap bg-gradient-to-b from-blue-200  to-white min-h-screen bg-fixed gap-3'>
            <div className='pt-30 homeText '>
            <h1 className='text-5xl font-bold'> <span className='bg-gradient-to-r from-blue-600 via-purple-500 to-purple-600 text-transparent bg-clip-text'>AI</span>-Powered Automation <br /><span className='pl-30 smarterWalla'>for <strong>Smarter</strong> Workflows!</span></h1>
            <p className='text-xl p-2  font-semibold mt-7 '>Automate repetitive tasks, <span className='text-amber-400 font-bold'>collaborate</span> seamlessly, and <br />make data-driven decisions with FlowSync.</p>
            <div className="buttonswalla flex gap-8 mt-5 justify-self-center p-5">
                <button className='py-1 px-4  text-white rounded text-lg  font-semibold cursor-pointer bg-purple-500 hover:bg-purple-700 hover:scale-105 transition-all duration-300 ease-in-out'><a href="#pricing">Try for free</a></button>

            <button className='border-2 py-1 px-4 border-purple-400  rounded text-lg  cursor-pointer hover:scale-103 hover:border-2 hover:border-green-300 transition-all duration-300 ease-in'><a href="#root">Watch Demo</a></button>
            </div>
            
            </div>
            <div className='mt-30 relative'>
                <img src={homeImage} alt="" className='w-lg transition-all hover:scale-105 hover:drop-shadow-2xl  relative z-50 cursor-pointer '/>
                <img src={homeImage3} alt="" className='w-xl transition-all hover:scale-105 hover:drop-shadow-2xl absolute bottom-40 right-10 z-10 hover:z-70 cursor-pointer '/>
            </div>
        </div>
    </div>
  )
}

export default Home