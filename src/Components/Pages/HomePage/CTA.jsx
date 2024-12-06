import React from "react";
import Section from "../../Section";
import SecondaryTitle from "../../Titles/SecondaryTitle";
import Button from "../../Button";

const CTA = () => {
  return (
    <div className='bg-gradient-to-r from-primary-charcoal to-neutral-olive py-20 text-center text-white relative px-12'>
      <div className='absolute inset-0 bg-black opacity-40'></div>
      <div className='relative z-10'>
        <SecondaryTitle
          title='ZOVITE NAS'
          className='leading-tight'
        />
        <p className='text-lg mb-8'>
          Transform your look with our
          expert stylists. Book your
          appointment today and
          experience the difference!
        </p>
        <div className='grid grid-cols-2 gap-8 w-full lg:w-1/2 mx-auto'>
        <a href="tel:+1234567899">
          <Button className='px-8 py-3 text-lg font-semibold bg-yellow-500 text-gray-800 rounded-sm shadow-lg hover:bg-yellow-600 transition duration-300'>
            Pozovite Nas
          </Button>
          </a>
          <a href="/kontakt">
          <Button className='px-8 py-3 text-lg font-semibold bg-yellow-500 text-gray-800 rounded-sm shadow-lg hover:bg-yellow-600 transition duration-300'>
            Pisite Nam
          </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CTA;