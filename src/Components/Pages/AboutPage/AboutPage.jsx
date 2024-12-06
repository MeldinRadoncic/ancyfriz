import React from "react";
import Section from "../../Section";
import ReusableBanner from "../../ReusableBanner";
import SecondaryTitle from "../../Titles/SecondaryTitle";
import CTA from "../../../Components/Pages/HomePage/CTA";
import ImageTextBlock from "../../../Components/ImageTextBlock";
import Card from "../../../Components/Card";
import AboutPageData from "../../../AppData/AboutPageData";
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
        description="Ovdje možete saznati sve o nama."
        
      />

      <Section>
        <div className="container mx-auto px-8 lg:px-24">
          {/* First Image and Text Section */}
          <ImageTextBlock
            imageSrc="https://via.placeholder.com/500x300"
            altText="About us overview"
            title="Ko smo mi?"
            description="AncyFriz je moderan Beauty salon smješten u Sarajevu, osnovan s misijom pružanja vrhunske usluge šišanja, bojanja i njege kose za sve uzraste. Naš prioritet je osigurati jedinstveno iskustvo za svakog klijenta."
            className="text-primary-charcoal"
          />

          {/* Second Image and Text Section */}
          <ImageTextBlock
            imageSrc="https://via.placeholder.com/500x300"
            altText="Our services overview"
            title="Šta radimo?"
            reverse={true}
            description="Pružamo širok spektar frizerskih usluga, uključujući personalizirana šišanja, stiliziranje, farbanje, tretmane za zdravlje kose i savjetovanje. Naš prioritet je zadovoljiti želje klijenata, koristeći visokokvalitetne proizvode i najnovije tehnike u svijetu frizerstva."
            className="text-primary-charcoal"
          />

          {/* About Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-16">
            {AboutPageData.map((aboutItem) => (
              <Card
                key={aboutItem.id}
                icon={aboutItem.icon}
                title={aboutItem.title}
                description={aboutItem.description}
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