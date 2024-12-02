import { FaClock, FaMapMarkerAlt, FaPhone } from "react-icons/fa";


const iconSize = 20;
const iconColor = "#B78E74"; // accent-rose-gold

const AboutPageCards = [
    {
      id: 1,
      icon: <FaClock size={iconSize} color={iconColor} />,
      title: "Radno Vrijeme",
      details: [
        "Ponedeljak - Subota: 09:00 - 18:00",
        "Nedelja: 10:00 - 14:00",
        "Utorak: ZATVORENO",
      ],
    },
    {
      id: 2,
      icon: <FaMapMarkerAlt size={iconSize} color={iconColor} />,
      title: "Adresa",
      details: [
        "Ulica Primjera 123",
        "Sarajevo, Bosna i Hercegovina",
      ],
    },
    {
      id: 3,
      icon: <FaPhone size={iconSize} color={iconColor} />,
      title: "Kontakt",
      details: [
        "+387 33 123 456",
        "info@primjer.com",
      ],
    },
  ];
  
  export default AboutPageCards;
  