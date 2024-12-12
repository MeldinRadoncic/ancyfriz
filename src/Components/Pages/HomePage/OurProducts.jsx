import React from "react";

import OurProductsData from "../../../AppData/OurProductsData";
import Section from "../../Section";
import SecondaryTitle from "../../Titles/SecondaryTitle";
import ThirdTitle from "../../Titles/ThirdTitle";

const OurProducts = () => {
  return (
    <Section className='bg-ourproducts relative'>
      {/* Title */}
      <div className='max-w-screen-xl mx-auto px-6 lg:px-16 flex flex-col py-12 '>
      <div className='text-center'>
      <SecondaryTitle
        title='Samo Najbolje za Vašu Kosu'
        className='text-neutral-gray text-center'
      />
      </div>
      <div className='mx-auto w-full lg:w-3/4 lg:px-4 z-50'>
      <p className='paragraph text-neutral-gray text-center'>
      Koristimo pažljivo odabrane, profesionalne proizvode renomiranih brendova kako bismo osigurali savršene rezultate za njegu i stiliziranje vaše kose.

      </p>
      </div>
      </div>

      {/* Products Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 px-4 px-6 sm:px-12 md:px-0  lg:px-12 xl:px-24'>
        {OurProductsData.map(
          (product, index) => (
            <div
              key={index}
              className='relative rounded-lg shadow-xl overflow-hidden transition-transform hover:scale-105'>
              {/* Product Image */}
              <div
                className='relative group'
                animation='fade-up'>
                <img
                  src={product.img}
                  alt={product.title}
                  className='w-full h-64 object-cover'
                />
                {/* Hover Effect (Eye Icon) */}
                {/* <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <a
                  href={product.link}
                  className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md"
                  aria-label="View Product"
                >
                  <HiEye className="text-primary-charcoal text-2xl" />
                </a>
              </div> */}
              </div>
              {/* Product Title */}
              <div className='mt-2 drop-shadow-md'>
                <ThirdTitle
                  title={product.title}
                  className='text-neutral-gray uppercase'
                />
                <p className='paragraph text-neutral-gray'>
                  {product.description}
                </p>
              </div>
            </div>
          ),
        )}
      </div>
    </Section>
  );
};

export default OurProducts;
