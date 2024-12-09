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
          title='Zakažite svoj termin još danas!'
          className='leading-tight'
        />
        <div className=' mx-auto my-4 lg:w-1/2 lg:px-24'>
        <p className='paragraph mb-8'>
        Doživite vrhunski tretman u AncyFriz salonu i otkrijte svoje novo, savršeno izdanje. Kontaktirajte nas odmah i rezervišite svoj termin!
        </p>
        </div>
        <div className='flex mx-auto justify-center gap-8 items-center py-2 w-full  lg:w-1/2'>
        <a href="tel:+38762741146">
          <Button className='px-8 py-3 text-lg font-semibold bg-yellow-500 text-gray-800 rounded-sm shadow-lg hover:bg-yellow-600 transition duration-300'>
            Pozovite Nas
          </Button>
          </a>
          <a href="/kontakt">
          <Button className='px-8 py-3 text-lg font-semibold bg-black text-neural-gray rounded-sm shadow-lg hover:bg-white hover:text-primary-charcoal transition duration-300'>
            Pisite Nam
          </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CTA;