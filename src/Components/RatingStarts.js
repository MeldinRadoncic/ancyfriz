import React from 'react';
import { FaStar } from 'react-icons/fa';

const RatingStars = ({ rating }) => {
    // Ensuring rating is a number between 0 and 5
    const validRating = Math.min(Math.max(Math.floor(rating), 0), 5);

    // Create an array of stars based on rating
    const stars = Array.from({ length: validRating }, (_, i) => (
        <FaStar key={i} color="gold" size={14} />
    ));

    return <div className='flex justify-center'>{stars}</div>;
};

export default RatingStars;
