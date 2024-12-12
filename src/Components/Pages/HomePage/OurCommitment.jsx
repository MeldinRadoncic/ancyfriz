
import Section from "../../Section";
import SecondaryTitle from "../../Titles/SecondaryTitle";
import Button from '../../Button'

const OurCommitment = () => {
  return (
    <Section className='bg-ourcommitment relative flex flex-col justify-center text-center'>
      <div className='max-w-screen-xl mx-auto px-6 lg:px-16 flex flex-col space-y-12'>
        <SecondaryTitle
          title='Naša Posvećenost Kvaliteti'
          animation='fade-left'
          className='text-neutral-gray'
        />

        <div className='text-neutral-gray w-full lg:px-6 lg:w-3/4 mx-auto'>
          <p className='paragraph drop-shadow-md'>
          Predani smo pružanju izvanrednih usluga koje ističu vašu ljepotu, uz vrhunsku pažnju prema detaljima i zadovoljstvo klijenata kao naš prioritet.

          </p>
        </div>
        
    
      <div className='mt-12 drop-shadow-md w-full md:w-1/2 mx-auto'>
      <Button
        title='Saznajte Više'
        link='/onama'
        className='w-full bg-button-yellow'

      />

      </div>
      </div>
      
    </Section>
  );
};

export default OurCommitment;
