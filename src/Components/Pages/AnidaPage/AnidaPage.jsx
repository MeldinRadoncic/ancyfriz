import React from "react";

import Section from "../../Section";
import ReusableBanner from "../../ReusableBanner";
import ImageTextBlock from "../../ImageTextBlock";
import CTA from "../../../Components/Pages/HomePage/CTA";

const AnidaPage = () => {
  return (
    <>
      <ReusableBanner
        title='Ja sam Anida'
        description='Lorem Lorem Lorem Lorem'
      />

      <Section>
        <div className='container mx-auto px-8 lg:px-32  w-full'>
          {/* Image and Text Section */}
          <ImageTextBlock
            imageSrc='./images/AboutMePage/anidaimamovicsalon.webp'
            altText='Vlasnica Salona Anida Imamovic'
            title='Anida Imamovic'
            description='Kao mala sam znala da ću se baviti ovim poslom. Jedva sam cekala da mogu da ostvarim svoj san i da imam svoj salon. Kada sam zavrsila srednju skolu upisala sam frizersku akademiju i od tada sam u ovom poslu. Volim svoj posao i trudim se da svaki dan budem bolja i da svojim klijentima pruzim naj'
            className='text-primary-charcoal'
          />
        </div>
        <div className='container mx-auto px-8 lg:px-32  w-full'>
          {/* Image and Text Section */}
          <ImageTextBlock
            imageSrc='./images/AboutMePage/anidaimamovicsalon.webp'
            reverse={true}
            altText='Vlasnica Salona Anida Imamovic'
            title='Anida Imamovic'
            description='Kao mala sam znala da ću se baviti ovim poslom. Jedva sam cekala da mogu da ostvarim svoj san i da imam svoj salon. Kada sam zavrsila srednju skolu upisala sam frizersku akademiju i od tada sam u ovom poslu. Volim svoj posao i trudim se da svaki dan budem bolja i da svojim klijentima pruzim naj'
            className='text-primary-charcoal'
          />
        </div>

        {/* CTA Section */}
        <div className='mt-16 text-center'></div>

        <CTA />
      </Section>
    </>
  );
};

export default AnidaPage;
