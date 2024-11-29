import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const iconSize = 18;        
const SocialMediaData = [
    {
        id: 1,
        icon: <FaFacebook size={iconSize} />,
        link: 'https://www.facebook.com',
        title: 'Facebook'
        
    },
    {
        id: 2,
        icon: <FaInstagram size={iconSize}/>,
        link: 'https://www.instagram.com',
        title: 'Instagram'
    },
    {
        id: 3,
        icon: <FaTwitter size={iconSize}/>,
        link: 'https://www.twitter.com',
        title: 'Twitter'
    },
    {
        id: 4,
        icon: <FaYoutube size={iconSize}/>,
        link: 'https://www.youtube.com',
        title: 'Youtube'
    }
];

export default SocialMediaData;