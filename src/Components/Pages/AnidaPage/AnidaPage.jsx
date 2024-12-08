import React from "react";

import Section from "../../Section";
import AnidaPageData from "../../../AppData/AnidaPageData";
import ReusableBanner from "../../ReusableBanner";
import ImageTextBlock from "../../ImageTextBlock";
import CTA from "../../../Components/Pages/HomePage/CTA";
import Meta from "../../Meta";

const AnidaPage = () => {
  return (
    <>
      <Meta
        title='Anida Imamovic'
        description='Ovdje možete saznati sve o Anidi Imamović.'
      />
      <ReusableBanner
        title='Ja sam Anida'
        description='Lorem Lorem Lorem Lorem'
      />

      <Section>
        <div className='container mx-auto px-8 lg:px-32  w-full'>
          {/* Image and Text Section */}
          {AnidaPageData.map((data) => (
        <ImageTextBlock
          key={data.id}
          imageSrc={data.imageSrc}
          altText={data.altText}
          title={data.title}
          description={data.description}
          className='text-primary-charcoal'
          reverse={data.id % 2 === 1} // Dynamically set reverse based on id, so every odd id will have reverse
        />
      ))}
        </div>
       

        {/* CTA Section */}
        <div className='mt-16 text-center'></div>

        <CTA />
      </Section>
    </>
  );
};

export default AnidaPage;
