import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

const iconSize = 24;        
const SocialMediaData = [
    {
        id: 1,
        icon: <FaFacebook size={iconSize} />,
        link: 'https://www.facebook.com/people/AncyFriz-frizerski-studio/100088513466883/',
        title: 'Facebook'
        
    },
    {
        id: 2,
        icon: <FaInstagram size={iconSize}/>,
        link: 'https://www.instagram.com/ancyfriz_frizerski_studio/',
        title: 'Instagram'
    },
    
    {
        id: 5,
        icon: <FaTiktok size={iconSize}/>,
        link: 'https://www.tiktok.com/@ancyfriz',
        title: 'TikTok'
    },
];

export default SocialMediaData;