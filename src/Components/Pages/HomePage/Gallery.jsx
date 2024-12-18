import React from "react";

import Section from "../../Section";

const Gallery = () => {
  return (
    <Section className='flex justify-center items-center'>
      <div className='container mx-auto max-w-screen-lg'>
        <div className='grid grid-cols-2 gap-4'>
          {/* Left Side */}
          <div className='flex flex-col gap-4'>
            {/* Full Image 1 */}
            <img
              className='object-cover w-full h-2/3 rounded-lg shadow-lg'
              src='./images/landing/hair1.webp'
              alt='Long Hair First Image'
            />
            {/* Image 5 */}
            <img
              className='object-cover object-top w-full h-1/3 rounded-lg shadow-lg'
              src='./images/landing/men.jpg'
              alt='Image of the Man'
            />
          </div>

          {/* Right Side */}
          <div className='flex flex-col gap-4'>
            <div className='grid grid-rows-2 gap-4'>
              {/* Image 4 */}
              <img
                className='object-cover w-full h-full rounded-lg shadow-lg'
                src='./images/landing/hair2.webp'
                alt='Short Hair 2'
              />
              {/* Image 3 */}
              <img
                className='object-cover w-full h-full rounded-lg shadow-lg'
                src='./images/landing/hair4.webp'
                alt='Long Hair 4'
              />
            </div>
            {/* Full Height Last Image */}
            <img
              className='object-cover w-full h-full rounded-lg shadow-lg'
              src='./images/landing/hair5.webp'
              alt='Long Hair 5'
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Gallery;
