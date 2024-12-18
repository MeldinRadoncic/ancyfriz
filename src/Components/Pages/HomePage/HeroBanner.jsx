import React from "react";

import Section from "../../Section.jsx";
import Button from "../../Button.jsx";
import MainTitle from "../../Titles/MainTitle.jsx";

const HeroBanner = () => {
  return (
    <Section
      className='relative flex items-center bg-cover  bg-center  bg-no-repeat'
      style={{
        backgroundImage: `url('/images/landing/hero.webp')`, // Background image
      }}>
      {/* Overlay */}
      <div
        className='absolute inset-0 bg-primary-charcoal/10'
        aria-hidden='true'></div>

      {/* Content */}
      <div className='relative z-10 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mx-auto px-6 sm:px-12 md:px-0  lg:px-12 xl:px-24'>
        {/* Left Side - Title */}
        <div className='flex flex-col items-center lg:items-start text-white text-center lg:text-left justify-center'>
          <MainTitle title='Beauty Salon Vaš izbor za ljepotu'
          className='drop=shadow-lg'
          />

          {/* Buttons for Large Devices */}
          <div className='hidden lg:flex space-x-2 mt-12 w-full lg:w-3/4'>
          <Button
          title='Pozovite Nas'
          link='tel:+38762741146'
          className='bg-button-yellow text-primary-charcoal'
          />
          <Button
          title='Pišite Nam'
          link='/kontakt'
          className='bg-button-black'
          />
          </div>
        </div>

        {/* Right Side - Subtitle */}
        <div className='flex flex-col items-center lg:items-start text-white text-center lg:text-left justify-center lg:hidden'>
          <p className='text-lg sm:text-xl lg:text-2xl inset-0 bg-primary-charcoal/10 p-4 rounded-lg shadow-md'>
          Želiš li otkriti svoju unikatnu ljepotu u srcu Sarajeva? Posjeti naš Beauty Salon gdje naš stručni tim s predanošću stvara nezaboravno iskustvo ističući tvoj jedinstveni stil.
          </p>
        </div>
      </div>

      {/* Buttons for Small Devices */}
      <div className='flex lg:hidden mt-24 justify-around px-4 space-x-4 z-20'>
      <Button
      title='Pozovite Nas'
      link='tel:+38762741146'
      className='bg-button-yellow text-primary-charcoal'
      />
         
          <Button
          title='Pišite Nam'
          link='/kontakt'
          className='bg-button-black text-white'
           />
            
          
         
      </div>
    </Section>
  );
};

export default HeroBanner;
