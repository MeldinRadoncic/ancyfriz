import React from "react";

import Section from "../../Section";
import SecondaryTitle from "../../Titles/SecondaryTitle";
import Button from "../../Button";

const AboutFounder = () => {
  return (
    <Section>
      <div className='flex flex-col md:flex-row justify-center items-center px-4 md:px-8'>
        <div className='flex flex-col items-center md:items-start text-center md:text-left md:w-1/2'>
          <SecondaryTitle
            title='Ja sam Anida'
            className='mb-4 text-2xl md:text-3xl font-semibold text-accent-rose-gold'
          />
          <p className='paragraph mb-6 text-base md:text-lg'>
          Vaša kosa u sigurnim rukama
          </p>
          <div className='mt-12 drop-shadow-md w-full lg:w-1/2 mx-auto md:mx-0'>
      
      <Button
        title='O Meni'
        link='/anidaimamovic'
        className='w-full bg-button-black text-white'
      />

      </div>

        </div>
        <div className='mt-6 md:mt-0 md:w-1/2'>
          <img
            src='/images/landing/AnidaImamovic.webp'
            alt='Anida Imamovic'
            className='w-full h-auto rounded-lg shadow-lg'
          />
        </div>
      </div>
    </Section>
  );
};

export default AboutFounder;
