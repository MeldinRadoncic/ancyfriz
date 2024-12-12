import React from "react";

import Section from "../../Section";
import ReusableBanner from "../../ReusableBanner";
import Button from "../../Button";
import Meta from "../../Meta"; 

const NoMatchPage = () => {
  return (
    <>
    <Meta
    index='noindex'
    follow='nofollow'
    />
      <ReusableBanner
        title='404'
        description='Stranica nije pronađena'
      />
      <Section>
        <Button
            title='Vrati me na početnu'
            link='/'
            className='w-full bg-button-black text-white'
        />
      </Section>
    </>
  );
};

export default NoMatchPage;
