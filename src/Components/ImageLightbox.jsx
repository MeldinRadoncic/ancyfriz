import React, { useState } from "react";

const ImageLightbox = ({
  images,
  className = "",
}) => {
  const [isOpen, setIsOpen] =
    useState(false);
  const [
    currentIndex,
    setCurrentIndex,
  ] = useState(0);

  // Open the lightbox
  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  // Close the lightbox
  const closeLightbox = () => {
    setIsOpen(false);
  };
  // Show the previous image
  const showPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? images.length - 1
        : prevIndex - 1,
    );
  };
  // Show the next image
  const showNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1
        ? 0
        : prevIndex + 1,
    );
  };

  return (
    <div>
      {/* Display the images and allow user to see prev and next images. To use this component make sure to include className for layout(grid) */}
      <div className={className}>
        {images.map((image, index) => (
          <img
            key={image.id}
            src={image.img}
            alt={`Gallery ${index}`}
            className='cursor-pointer object-cover h-48 w-full'
            onClick={() =>
              openLightbox(index)
            }
          />
        ))}
      </div>

      {isOpen && (
        <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center z-50'>
          <button
            onClick={closeLightbox}
            className='absolute top-5 right-5 text-white text-2xl font-bold cursor-pointer'>
            &times;
          </button>
          <button
            onClick={showPrev}
            className='absolute left-5 text-white text-2xl font-bold cursor-pointer'>
            &#8249;
          </button>
          <img
            src={
              images[currentIndex].img
            }
            alt='Selected'
            className='max-h-[90%] max-w-[90%]'
          />
          <button
            onClick={showNext}
            className='absolute right-5 text-white text-2xl font-bold cursor-pointer'>
            &#8250;
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageLightbox;
