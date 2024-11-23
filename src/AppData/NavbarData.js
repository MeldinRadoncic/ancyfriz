import React from 'react';
import { FaHome, FaUser, FaCut, FaPhone } from 'react-icons/fa';

const iconSize = 15;

const NavbarData = [
    {

        id: 1,
        title: 'Home',
        link: '/',
        icon: <FaHome size={iconSize} />   
    },
    {
        id: 2,
        title: 'About',
        link: '/about',
        icon: <FaUser size={iconSize} />
    },
    {
        title: 'Services',
        link: '/services',
        icon: <FaCut size={iconSize}/> 
    },
    {
        id: 3,
        title: 'Contact',
        link: '/contact',
        icon: <FaPhone size={iconSize}/>
    },
]

export default NavbarData;