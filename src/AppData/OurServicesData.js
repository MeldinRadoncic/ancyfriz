import React from 'react';
import { FaCut, FaTint, FaBrush, FaSun, FaMale, FaUserTie } from 'react-icons/fa';

const iconSize = 24;
const iconColor = '#A7A284'; // Accent Olive from tailwind.config.js

const WhyChooseUsData = [
    {
        id: 1,
        title: "Balayage",
        description: "Balayage je moderna tehnika farbanja koja stvara prirodan, osunčani izgled kose. Idealna je za klijente koji žele suptilne prijelaze boja i luksuzan stil, uz korištenje visokokvalitetnih proizvoda.",
        icon: <FaTint size={iconSize} color={iconColor} />,
    },
    {
        id: 2,
        title: "Svečane Frizure",
        description: "Svečane frizure kreirane s pažnjom prema detaljima, idealne za vjenčanja, proslave i posebne prilike. Naš tim pruža personalizirani pristup kako biste zasjali u svakoj prilici.",
        icon: <FaCut size={iconSize} color={iconColor} />,
    },
    {
        id: 3,
        title: "Farbanje",
        description: "Profesionalno farbanje kose uz upotrebu premium boja koje osiguravaju dugotrajan sjaj i njegu. Prilagođavamo nijanse vašim željama i tipu kose za savršene rezultate.",
        icon: <FaBrush size={iconSize} color={iconColor} />,
    },
    {
        id: 4,
        title: "Pramenovi",
        description: "Pramenovi koji naglašavaju volumen i dimenziju vaše kose, pružajući svjež i moderan izgled. Koristimo najsavremenije tehnike za prirodan efekt.",
        icon: <FaSun size={iconSize} color={iconColor} />,
    },
    {
        id: 5,
        title: "Muško Šišanje",
        description: "Precizno muško šišanje koje prati najnovije trendove i stilove. Naš tim se fokusira na profesionalan izgled koji odgovara vašoj ličnosti.",
        icon: <FaMale size={iconSize} color={iconColor} />,
    },
    {
        id: 6,
        title: "Farbanje Brade",
        description: "Farbanje brade uz korištenje visokokvalitetnih boja koje pružaju prirodan izgled i ističu vaš stil. Savršeno za muškarce koji žele uredan i atraktivan izgled.",
        icon: <FaUserTie size={iconSize} color={iconColor} />,
    },
];

export default WhyChooseUsData;
