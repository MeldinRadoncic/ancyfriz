import React from "react";

import ReusableBanner from "../../ReusableBanner";
import Section from "../../Section";
import GalleryPageData from "../../../AppData/GalleryPageData";
import ImageLightbox from "../../ImageLightbox";
import Meta from "../../Meta";  

const GalleryPage = () => {
  return (
    <>
      <Meta
        title='Galerija'
        description = 'Pogledajte nasu galeriju'
      />
      <ReusableBanner
        title='Galerija'
        description='Pogledajte nasu galeriju'
      />
      <Section>
        <ImageLightbox
          images={GalleryPageData}
          className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 rounded-lg shadow-lg'
        />
      </Section>
    </>
  );
};

export default GalleryPage;
