import React from 'react';
import { FaCut } from 'react-icons/fa';

const iconSize = 24;
const iconColor = '#A7A284'; // Accent Olive from tailwind.config.js

const WhyChooseUsData = [

    {
        id: 1,
        title: "Sisanje",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc.",
        icon: <FaCut size={iconSize} color={iconColor}/>,
    },
    {
        id: 2,
        title: "Feniranje",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc.",
        icon: <FaCut size={iconSize} color={iconColor}/>,
    },
    {
        id: 3,
        title: "Farbanje",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc.",
        icon: <FaCut size={iconSize} color={iconColor}/>,
    }

]


export default WhyChooseUsData;