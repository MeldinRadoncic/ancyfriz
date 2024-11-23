import React from "react";

import ThirdTitle from './Titles/YhirdTitle'

const Card = ({
  title,
  description,
  icon,
  className='border-2 border-primary-charcoal',
}) => {
  return (
    <div className={`flex px-12 shadow-md flex-col space-y-8 py-6 justify-center items-center rounded-lg mt-8 ${className}`}>
      <div className='flex justify-center border-4 border-accent-rose-gold py-4 px-4 rounded-full'>
        {icon}
        </div>
   <div className='w-full'>
 
        <ThirdTitle title={title} className='text-center'/>
   </div>
     <div className='w-full text-center'>

        <p className="text-xl">{description}</p>
     </div>
      </div>
  );
};

export default Card;
