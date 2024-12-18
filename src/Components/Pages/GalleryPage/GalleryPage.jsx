import React from "react";

import Layout from "../../Layout/Layout";
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
      <Layout>
      <Section>
        <ImageLightbox
          images={GalleryPageData}
          className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 rounded-lg shadow-lg px-6 sm:px-12 md:px-0  lg:px-12 xl:px-24'
        />
      </Section>
      </Layout>
    </>
  );
};

export default GalleryPage;
