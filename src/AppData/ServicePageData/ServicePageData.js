import React from "react";
import {
  FaCut,
  FaBrush,
  FaSpa,
  FaLeaf,
  FaHandHoldingHeart,
} from "react-icons/fa";

const iconSize = 20;
const iconColor = "#B78E74"; // accent-rose-gold

// ServicePageData data
const ServicePageData = [
  {
    id: 1,
    imageSrc:
      "./images/ServicePage/Zensko-sisanje.webp",
    altText: "Šišanje za Žene",
    title: "Šišanje za Žene",
    description:
      "U AncyFriz salonu nudimo personalizirane tretmane za njegu kose i ljepotu. Svaka usluga je prilagođena vašim potrebama, s naglaskom na kvalitetu i profesionalnost.",
  },
  {
    id: 2,
    imageSrc:
      "./images/ServicePage/Musko-sisanje.webp",
    altText: "Šišanje za Muškarce",
    title: "Šišanje za Muškarce",
    description:
      "Svaki muškarac zaslužuje frizuru koja odražava njegov stil i osobnost. U AncyFr",
  },
  {
    id: 3,
    imageSrc:
      "./images/ServicePage/Balayage.webp",
    altText: "Balayage",
    title: "Balayage",
    description:
      "Balayage je tehnika bojanja kose koja stvara prirodan izgled s preljevima boje. U AncyFriz salonu koristimo najbolje proizvode za postizanje savršenog balayage efekta.",
  },
];

// ServicePageDataCards data
const ServicePageDataCards = [
  {
    id: 1,
    icon: (
      <FaCut
        size={iconSize}
        color={iconColor}
      />
    ),
    title: "Šišanje",
    description:
      "Nudimo šišanje za žene, muškarce, djecu i starije osobe s fokusom na stil i preciznost.",
  },
  {
    id: 2,
    icon: (
      <FaBrush
        size={iconSize}
        color={iconColor}
      />
    ),
    title: "Bojanje",
    description:
      "Kvalitetne tehnike bojanja kose, uključujući balayage, pramenove i kompletno bojanje.",
  },
  {
    id: 3,
    icon: (
      <FaSpa
        size={iconSize}
        color={iconColor}
      />
    ),
    title: "Tretmani za Kosu",
    description:
      "Tretmani za hidrataciju, rekonstrukciju i zdravlje kose s najboljim proizvodima na tržištu.",
  },
  {
    id: 4,
    icon: (
      <FaLeaf
        size={iconSize}
        color={iconColor}
      />
    ),
    title: "Styling",
    description:
      "Svečane frizure, feniranje i druge usluge stiliziranja kose za svaku priliku.",
  },
  {
    id: 5,
    icon: (
      <FaHandHoldingHeart
        size={iconSize}
        color={iconColor}
      />
    ),
    title: "Savjetovanje",
    description:
      "Individualni savjeti za njegu kose i odabir stilova koji najbolje odgovaraju vama.",
  },
  {
    id: 6,
    icon: (
      <FaHandHoldingHeart
        size={iconSize}
        color={iconColor}
      />
    ),
    title: "Usluge za Mlade",
    description:
      "Posebni tretmani za mlade, uključujući šišanje i styling za sve uzraste.",
  },
];

export {
  ServicePageData,
  ServicePageDataCards,
};
