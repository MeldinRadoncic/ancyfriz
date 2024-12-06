import React from "react";

import Section from "../../Section";
import ReusableBanner from "../../ReusableBanner";
import SecondaryTitle from "../../Titles/SecondaryTitle";
import CTA from "../../../Components/Pages/HomePage/CTA";
import ImageTextBlock from "../../../Components/ImageTextBlock";
import Card from "../../../Components/Card";
import ServicePageData from "../../../AppData/ServicePageData";
import Meta from "../../Meta";

const ServicesPage = () => {
  return (
    <>
      <Meta
        title='Naše Usluge'
        description='Otkrijte širok spe
ktar usluga koje nudimo za vašu ljepotu i njegu kose.'
      />
      
      {/* Reusable Banner Section */}
      <ReusableBanner
        title='Naše Usluge'
        description='Otkrijte širok spektar usluga koje nudimo za vašu ljepotu i njegu kose.'
      />

      <Section>
        <div className='container mx-auto px-8 lg:px-24'>
          {/* Image and Text Section */}
          <ImageTextBlock
            imageSrc='https://via.placeholder.com/500x300'
            altText='Salon services overview'
            title='Naše Usluge'
            description='U AncyFriz salonu nudimo personalizirane tretmane za njegu kose i ljepotu. Svaka usluga je prilagođena vašim potrebama, s naglaskom na kvalitetu i profesionalnost.'
            className='text-primary-charcoal'
          />

          {/* Service Cards */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-16'>
            {ServicePageData.map(
              (service) => (
                <Card
                  key={service.id}
                  icon={service.icon}
                  title={service.title}
                  description={
                    service.description
                  }
                  className='service-card flex flex-col text-accent-rose-gold items-center bg-primary-charcoal py-8 rounded-md shadow-lg'
                />
              ),
            )}
          </div>

          {/* CTA Section */}
          <div className='mt-16 text-center'></div>
        </div>
        <CTA />
      </Section>
    </>
  );
};

export default ServicesPage;
