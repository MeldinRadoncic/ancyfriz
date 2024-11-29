import React from "react";

import SocialMediaData from "../../../AppData/SocialMediaData";
import NavbarData from "../../../AppData/NavbarData";

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-8'>
      <div className='container mx-auto flex flex-col lg:flex-row lg:justify-between text-center lg:text-left'>
        {/* Visit Us Section */}
        <div className='mb-6 lg:mb-0 flex flex-col'>
          <h3 className='text-lg font-semibold mb-2 uppercase'>
            Visit Us
          </h3>
          <p className='text-base'>
            Paromlinska 33
          </p>
          <p className='text-base'>
            Dolac Malta
          </p>
          <p className='text-base'>
            Sarajevo
          </p>
          <p className='text-base'>
            71000
          </p>
          <a
            href='tel:+38762741146'
            className='text-blue-400 hover:underline'>
            +387 62 741-146
          </a>
          <a
            href='mailto:info@ancyfriz.com'
            className='text-blue-400 hover:underline'>
            info@ancyfriz.com
          </a>
        </div>

        {/* Working Hours Section */}
        <div className='mb-6 lg:mb-0'>
          <h3 className='text-lg font-semibold mb-2 uppercase'>
            Working Hours
          </h3>
          <p>
            Ponedljak - Subota: 9:00 -
            18:00
          </p>
          <p>Nedelja: 10:00 - 14.00</p>
          <p>Utorak: ZATVORENO</p>
        </div>

        {/* Pages Section */}
        <div className='mb-6 lg:mb-0'>
          <h3 className='text-lg font-semibold mb-2 uppercase'>
            Pages
          </h3>
          <ul className='space-y-2'>
            {NavbarData.map((page) => (
              <li key={page.title}>
                <a
                  href={page.link}
                  className='text-blue-400 hover:underline'>
                  {page.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Follow Us Section */}
        <div>
          <h3 className='text-lg font-semibold mb-2 uppercase'>
            Follow Us
          </h3>
          <div className='flex justify-center lg:justify-start space-x-4'>
            <ul className='flex gap-2'>
              {SocialMediaData.map(
                (social) => (
                  <li>
                    <a
                      href={social.link}
                      key={social.id}
                      title={
                        social.title
                      }>
                      {social.icon}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
