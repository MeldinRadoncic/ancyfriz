import React from 'react';

import Section from '../Section';
import SecondaryTitle from '../Titles/SecondaryTitle';
import Card from '../Card'
import OurServicesData from '../../AppData/OurServicesData'


const OurServices = () => {

    return (
        <Section>
            <div className='w-full px-16 flex flex-col'>
            <div className='w-full'>
                <SecondaryTitle 
                title='Usluge'
                className='text-center'
                />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            {OurServicesData.map(service => (
                <div className='flex justify-around px-4 py-4'>
 <Card 
                key={service.id}
                title={service.title}
                description={service.description}
                icon = {service.icon}
                />
                </div>
               
            ))}
            </div>
            </div>
        </Section>
    )
}

export default OurServices;