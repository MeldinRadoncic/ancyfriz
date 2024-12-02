import React from "react";
import { FaCut, FaBrush, FaSpa, FaLeaf, FaHandHoldingHeart } from "react-icons/fa";



const iconSize = 20;
const iconColor = '#B78E74';    // accent-rose-gold

const ServicePageData = [
    {
        id: 1,
      icon: <FaCut size={iconSize} color={iconColor}/>,
      title: "Šišanje",
      description: "Nudimo šišanje za žene, muškarce, djecu i starije osobe s fokusom na stil i preciznost.",
     
    },
    {
        id: 2,
      icon: <FaBrush size={iconSize} color={iconColor} />,
      title: "Bojanje",
      description: "Kvalitetne tehnike bojanja kose, uključujući balayage, pramenove i kompletno bojanje.",
      
    },
    {
        id: 3,
      icon: <FaSpa size={iconSize} color={iconColor} />,
      title: "Tretmani za Kosu",
      description: "Tretmani za hidrataciju, rekonstrukciju i zdravlje kose s najboljim proizvodima na tržištu.",
      
    },
    {
        id: 4,
      icon: <FaLeaf size={iconSize} color={iconColor} />,
      title: "Styling",
      description: "Svečane frizure, feniranje i druge usluge stiliziranja kose za svaku priliku.",
     
    },
    {
        id: 5,
      icon: <FaHandHoldingHeart size={iconSize} color={iconColor}/>,
      title: "Savjetovanje",
      description: "Individualni savjeti za njegu kose i odabir stilova koji najbolje odgovaraju vama.",
      
    },
    {
        id: 6,
      icon: <FaHandHoldingHeart size={iconSize} color={iconColor}/>,
      title: "Usluge za Mlade",
      description: "Posebni tretmani za mlade, uključujući šišanje i styling za sve uzraste.",
      
    },
  ];

  export default ServicePageData;