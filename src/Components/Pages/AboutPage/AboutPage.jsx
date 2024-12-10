import React from "react";
import Section from "../../Section";
import ReusableBanner from "../../ReusableBanner";
import SecondaryTitle from "../../Titles/SecondaryTitle";
import CTA from "../../../Components/Pages/HomePage/CTA";
import ImageTextBlock from "../../../Components/ImageTextBlock";
import Card from "../../../Components/Card";
import {AboutPageData, AboutPageDataCards} from "../../../AppData/AboutPage/AboutPageData";
import Meta from "../../Meta";

const AboutPage = () => {
  return (
    <>
      <Meta
        title="O nama"
        description="Ovdje možete saznati sve o nama."
      />
      {/* Reusable Banner Section */}
      <ReusableBanner
        title="O nama"
        description="Za Beskrajnu Ljepotu i Stil, AncyFriz – Vaša Destinacija!"
        
      />

      <Section>
        <div className="container mx-auto px-8 lg:px-24">
          {/* First Image and Text Section */}
          {AboutPageData.map((data) => (
        <ImageTextBlock
          key={data.id}
          imageSrc={data.imageSrc}
          altText={data.altText}
          title={data.title}
          description={data.description}
          className={data.className}
          reverse={data.id % 2 === 1} // Dynamically set reverse based on id so every odd id will have reverse
        />
      ))}

          {/* About Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-16">
            {AboutPageDataCards.map((aboutItem) => (
              <Card
                key={aboutItem.id}
                icon={aboutItem.icon}
                title={aboutItem.title}
                description={aboutItem.description }
                className="about-card flex flex-col text-accent-rose-gold items-center bg-primary-charcoal py-8 rounded-md shadow-lg"
              />
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center"></div>
        </div>
        <CTA />
      </Section>
    </>
  );
};

export default AboutPage;