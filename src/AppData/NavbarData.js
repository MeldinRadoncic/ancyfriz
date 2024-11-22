import React from 'react';
import { FaHome, FaUser, FaCut, FaPhone } from 'react-icons/fa';

const NavbarData = [
    {

        id: 1,
        title: 'Home',
        link: '/',
        icon: <FaHome size={15} />   
    },
    {
        id: 2,
        title: 'About',
        link: '/about',
        icon: <FaUser size={15} />
    },
    {
        title: 'Services',
        link: '/services',
        icon: <FaCut size={15}/> 
    },
    {
        id: 3,
        title: 'Contact',
        link: '/contact',
        icon: <FaPhone size={15}/>
    },
]

export default NavbarData;