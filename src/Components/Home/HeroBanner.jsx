import React from 'react';
import Section from '../Section';
import Button from '../Button';

const HeroBanner = () => {
  return (
    <Section
      className="relative flex items-center bg-cover bg-center  bg-no-repeat"
      style={{
        backgroundImage: `url('/images/landing/hero.jpg')`, // Background image
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-primary-charcoal opacity-40" // Overlay with 0.4 opacity
        aria-hidden="true"
      ></div>

      {/* Content */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mx-auto px-6 sm:px-12 md:px-0  lg:px-24">
        {/* Left Side - Title */}
        <div className="flex flex-col items-center lg:items-start text-white text-center lg:text-left justify-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-md">
            Salon gdje savršena frizura postaje stvarnost!
          </h1>

          {/* Buttons for Large Devices */}
          <div className="hidden lg:flex space-x-4 mt-8">
            <Button className="bg-black">Zakažite termin</Button>
            <Button className="bg-primary-charcoal">Pozovite Nas</Button>
          </div>
        </div>

        {/* Right Side - Subtitle */}
        <div className="flex flex-col items-center lg:items-start text-white text-center lg:text-left justify-center">
          <p className="text-lg sm:text-xl lg:text-2xl bg-black/40 p-4 rounded-lg shadow-md">
            Prepustite se stručnim rukama naših profesionalaca i uživajte u modernim, stilizovanim frizurama koje odražavaju vašu jedinstvenu ličnost. Vaša kosa zaslužuje najbolje!
          </p>
        </div>
      </div>

      {/* Buttons for Small Devices */}
      <div className="flex lg:hidden mt-24 justify-around px-4 space-x-4">
        <Button className="bg-black">Zakažite termin</Button>
        <Button className="bg-primary-charcoal">Pozovite Nas</Button>
      </div>
    </Section>
  );
};

export default HeroBanner;
