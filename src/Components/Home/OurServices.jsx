import React from "react";

import Section from "../Section";
import SecondaryTitle from "../Titles/SecondaryTitle";
import Card from "../Card";
import OurServicesData from "../../AppData/OurServicesData";

const OurServices = () => {
  return (
    <Section className="py-16">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-16 flex flex-col space-y-12">
        {/* Title */}
        <div className="text-center">
          <SecondaryTitle
            title="Nase Usluge"
            
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {OurServicesData.map((service) => (
            <div
              key={service.id}
              className="group bg-primary-charcoal p-6 rounded-xl shadow-lg transition transform hover:scale-105 hover:shadow-2xl"
            >
              <Card
                title={service.title}
                description={service.description}
                icon={service.icon}
                className="text-accent-rose-gold"
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default OurServices;
