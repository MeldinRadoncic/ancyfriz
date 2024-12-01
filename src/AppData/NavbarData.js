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
        title: 'O nama',
        link: '/onama',
        icon: <FaUser size={iconSize} />
    },
    {
        title: 'Usluge',
        link: '/usluge',
        icon: <FaCut size={iconSize}/> 
    },
    {
        id: 3,
        title: 'Kontakt',
        link: '/kontakt',
        icon: <FaPhone size={iconSize}/>
    },
]

export default NavbarData;