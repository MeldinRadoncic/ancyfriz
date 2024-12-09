import {
  FaClock,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

const iconSize = 20;
const iconColor = "#B78E74"; // accent-rose-gold

// AboutPageData data
const AboutPageData = [
  {
    id: 1,
    imageSrc:
      "https://via.placeholder.com/500x300",
    altText: "About us overview",
    title: "Naša Priča",
    description:
      "Naša cjelovita oaza ljepote nudi frizerske usluge za svaki poseban trenutak. U AncyFriz salonu možete pronaći usluge friziranja za žene, muškarce, djecu i starije osobe – sve na jednom mjestu, s profesionalnošću koja nadmašuje očekivanja. S našim stručnim timom razumijemo potrebe i želje naših klijenata te se predano posvećujemo stvaranju savršenog izgleda za svakoga. Dobrodošli u AncyFriz, gdje svaka posjeta postaje čaroban frizerski trenutak",
  },
  {
    id: 2,
    imageSrc:
      "./images/AboutPage/Products.webp",
    altText: "Our services overview",
    title:
      "Mi koristimo samo najbolje produkte",
    description:
      "Pružamo širok spektar frizerskih usluga, uključujući personalizirana šišanja, stiliziranje, farbanje, tretmane za zdravlje kose i savjetovanje. Naš prioritet je zadovoljiti želje klijenata, koristeći visokokvalitetne proizvode i najnovije tehnike u svijetu frizerstva.",
  },
];

// AboutPageCards data
const AboutPageDataCards = [
  {
    id: 1,
    icon: (
      <FaClock
        size={iconSize}
        color={iconColor}
      />
    ),
    title: "Radno Vrijeme",
    details: [
      "Ponedeljak - Subota: 09:00 - 18:00",
      "Nedelja: 10:00 - 14:00",
      "Utorak: ZATVORENO",
    ],
  },
  {
    id: 2,
    icon: (
      <FaMapMarkerAlt
        size={iconSize}
        color={iconColor}
      />
    ),
    title: "Adresa",
    details: [
      "Ulica Primjera 123",
      "Sarajevo, Bosna i Hercegovina",
    ],
  },
  {
    id: 3,
    icon: (
      <FaPhone
        size={iconSize}
        color={iconColor}
      />
    ),
    title: "Kontakt",
    details: [
      "+387 33 123 456",
      "info@primjer.com",
    ],
  },
];

export {
  AboutPageData,
  AboutPageDataCards,
};
