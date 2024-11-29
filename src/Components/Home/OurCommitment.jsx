
import Section from "../Section";
import SecondaryTitle from "../Titles/SecondaryTitle";
import Button from '../Button'

const OurCommitment = () => {
  return (
    <Section className='bg-ourcommitment relative flex flex-col justify-center text-center'>
      <div className='w-full py-4 text-center z-50'>
        <SecondaryTitle
          title='zvrsnost u Svakoj Usluzi'
          animation='fade-left'
          className='text-neutral-gray'
        />

        <div className='text-neutral-gray px-6 sm:px-12 md:px-0  lg:px-24 lg:w-3/4 xlg:w-1/2 mx-auto'>
          <p className='paragraph drop-shadow-md'>
          U nasem salonu ponosimo se pružanjem prilagođenih rješenja koja odgovaraju vašim jedinstvenim potrebama. Od početka do kraja, naš tim je posvećen osiguravanju najviših standarda kvalitete i zadovoljstva.

          </p>
        </div>
        
    
      <div className='mt-12 drop-shadow-md'>
      <Button className=' bg-black'>
        Saznajte Vise o Nama
        </Button>
      </div>
      </div>
      
    </Section>
  );
};

export default OurCommitment;
