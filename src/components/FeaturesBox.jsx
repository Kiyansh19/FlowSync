import React from 'react'; 
import { FaArrowRight } from "react-icons/fa";

const FeaturesBox = ({ icon:Icon, title, description, link }) => {
  return (
    <div>
      <div className='border-l-3 border-purple-400 p-5 pt-5 w-80 mt-10 rounded-xl flex flex-col gap-2 feature-box hover:scale-103 flex-wrap transition-all duration-200 ease-in-out shadow-md shadow-gray-200'>
        <span className='text-purple-500 text-5xl icon'>
          <Icon /> {/* Render the icon component properly */}
        </span>
        <h1 className='text-2xl font-semibold'>{title}</h1>
        <p>{description}</p>
        <a href={link} className='flex items-center gap-2 mt-3 text-blue-500'>
          Learn more <FaArrowRight />
        </a>
      </div>
    </div>
  );
}

export default FeaturesBox;
