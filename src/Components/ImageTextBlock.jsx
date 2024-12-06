import React from "react";
import SecondaryTitle from "./Titles/SecondaryTitle";

const ImageTextBlock = ({ imageSrc, altText, title, description, reverse = false }) => {
  return (
    <div className={`flex ${reverse ? 'flex-row-reverse' : 'flex-row'} items-start gap-12 mt-8 mb-12 flex-wrap lg:flex-nowrap`}>
      {/* Image */}
      <img
        src={imageSrc}
        alt={altText}
        className="rounded-lg shadow-lg w-full md:w-1/2 lg:w-1/2 xl:w-1/2 max-w-full"
      />
      {/* Text Section */}
      <div className="flex flex-col justify-center w-full lg:w-1/2 xl:w-1/2">
        <SecondaryTitle title={title} className="text-accent-rose-gold" />
        <p className="paragraph">{description}</p>
      </div>
    </div>
  );
};

export default ImageTextBlock;
