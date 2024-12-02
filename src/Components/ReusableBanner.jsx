import React from "react";

import MainTitle from "./Titles/MainTitle"; 


const ReusableBanner = ({title, description, className='text-accent-rose-gold bg-primary-charcoal'}) => {
    return (
        <div className={`flex flex-col items-center justify-center py-12 md:py:16 lg:py-24 text-center ${className}`}>
            <MainTitle
                title={title}
            className={className}
/>
            <p className='paragraph text-neutral-pearl'>{description}</p>
        </div>
    );
}

export default ReusableBanner;