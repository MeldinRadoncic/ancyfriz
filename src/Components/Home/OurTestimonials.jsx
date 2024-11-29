import React from 'react';
import Slider from 'react-slick';

import OurTestimonialsData from '../../AppData/OurTestimonialsData'
import Section from '../Section';
import SecondaryTitle from '../Titles/SecondaryTitle';
import ThirdTitle from '../Titles/YhirdTitle';
import RatingStars from '../RatingStarts';




const OurTestimonials = () => {
  // Slick carousel settings
  const settings = {
    infinite: true,  // Loop the slides
    speed: 500,      // Transition speed in ms
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true,  // Auto-scroll the slides
    autoplaySpeed: 3000,  // Time between auto-scrolling in ms
    dots: true,      // Display navigation dots
    arrows: false    // Hide next/prev arrows (optional)
  };

  return (
    <Section className="bg-primary-charcoal flex justify-center">
        <div className='container '>
            <div>
                <SecondaryTitle
                title='Sta drugi kazu o nama'
                className='text-center text-neutral-gray'
                />
            </div>
            <div className='px-6 sm:px-12 md:px-0  lg:px-24 lg:w-3/4 xlg:w-1/2 mx-auto'>

         
      
      <Slider {...settings}>
        {OurTestimonialsData.map(testimonial => (
          <div key={testimonial.id} className="text-center">
            
            <p className="paragraph text-neutral-gray">"{testimonial.description}"</p>
            <ThirdTitle
            title={testimonial.name}
            className="text-accent-rose-gold"
            />
            <p className="text-neutral-gray">{testimonial.title}</p>
            <RatingStars rating={testimonial.stars}/>
          </div>
        ))}
      </Slider>
      </div>
      </div>
    </Section>
  );
};

export default OurTestimonials;
