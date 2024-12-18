import React from "react";

import Layout from "../../Layout/Layout";
import Section from "../../Section";
import ReusableBanner from "../../ReusableBanner";
import CTA from "../../../Components/Pages/HomePage/CTA";
import ImageTextBlock from "../../../Components/ImageTextBlock";
import Card from "../../../Components/Card";
import {ServicePageData, ServicePageDataCards} from "../../../AppData/ServicePageData/ServicePageData";
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
  <Layout>
      <Section className=' overflow-auto'>
        <div className='container mx-auto px-8 lg:px-24'>
          {/* Image and Text Section */}
          {ServicePageData.map((data) => (
        <ImageTextBlock
          key={data.id}
          imageSrc={data.imageSrc}
          altText={data.altText}
          title={data.title}
          description={data.description}
          className='text-primary-charcoal'
          reverse={data.id % 2 === 1} // Dynamically set reverse based on id
        />
      ))}

          {/* Service Cards */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-16'>
            {ServicePageDataCards.map(
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
    </Layout>
    </>
  );
};

export default ServicesPage;
