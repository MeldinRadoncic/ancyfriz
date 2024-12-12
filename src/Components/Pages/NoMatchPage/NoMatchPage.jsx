import React from "react";

import Section from "../../Section";
import ReusableBanner from "../../ReusableBanner";
import SecondaryTitle from "../../Titles/SecondaryTitle";
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
        <Button className='px-8 py-3 text-lg font-semibold bg-yellow-500 text-gray-800 rounded-sm shadow-lg hover:bg-yellow-600 transition duration-300'>
          <a href='/'>
            Vrati se na početnu
          </a>
        </Button>
      </Section>
    </>
  );
};

export default NoMatchPage;
