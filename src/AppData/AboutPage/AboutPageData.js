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
    imageSrc: "./images/AboutPage/ancyfrizsalon.avif",
    altText: "O nama - frizerski salon AncyFriz",
    title: "Naša Priča",
    description:
      "Dobrodošli u AncyFriz, mjesto gdje se ljepota i stil susreću s profesionalnošću i predanošću. Naš salon nije samo običan frizerski prostor – to je oaza u kojoj se klijenti osjećaju opušteno, cijenjeno i inspirirano. Od trenutka kada uđete u naš salon, osjetit ćete toplu i prijateljsku atmosferu, stvorenu s ciljem da svaki posjet bude posebno iskustvo.\n\nNaša priča počela je s vizijom da pružimo najviši standard usluga za žene, muškarce, djecu i starije osobe. Kroz godine rada izgradili smo reputaciju temeljem povjerenja naših klijenata i strasti prema frizerstvu. Vjerujemo da svaka osoba zaslužuje savršenu frizuru koja ističe njen karakter i stil, stoga se naš tim posvećuje razumijevanju vaših jedinstvenih potreba i želja.\n\nSpecijalizirani smo za širok spektar usluga, uključujući šišanje, farbarnje, balayage, stiliziranje i tretmane za njegu kose. Bez obzira na to želite li klasičan izgled ili modernu transformaciju, naši frizeri koriste najnovije tehnike i trendove kako bi osigurali rezultate koji nadmašuju očekivanja. Svaka usluga počinje konsultacijom kako bismo zajedno kreirali frizuru koja najbolje odražava vašu osobnost.\n\nOsim naših vrhunskih usluga, vjerujemo i u važnost kvalitetnih proizvoda. Stoga koristimo isključivo najbolje brendove za njegu kose kako bismo osigurali zdravlje i sjaj vaših pramenova. Naš cilj je dugotrajno zadovoljstvo klijenata, što postižemo kombinacijom stručnosti, vrhunske opreme i personaliziranog pristupa.\n\nBilo da dolazite na brzinsko šišanje ili kompletnu promjenu stila, AncyFriz je mjesto gdje vaša kosa postaje umjetnost. Posjetite nas i doživite vrhunsku njegu, posvećenost detaljima i osjećaj ljepote koji traje i nakon odlaska iz salona.",
  },
  {
    id: 2,
    imageSrc: "./images/AboutPage/Products.webp",
    altText: "Pregled naših proizvoda",
    title: "Koristimo samo najbolje proizvode",
    description:
      "Za postizanje savršenih rezultata koristimo proizvode vodećih svjetskih brendova u industriji njege kose. Naša paleta uključuje visokokvalitetne preparate za farbanje, tretmane za oporavak kose i stiliziranje. Kvaliteta proizvoda odražava našu posvećenost zdravlju i ljepoti vaše kose, omogućujući trajne i blistave rezultate.",
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
    description: "Ponedeljak - Subota:\n09:00 - 18:00\nNedelja: 10:00 - 14:00\nUtorak: ZATVORENO"
      ,

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
    description: [
      "Paromlinska 33\nDolac Malta\nSarajevo",
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
    description: [
      "+38762 741 146",
      "info@ancyfriz.com",
    ],
  },
];

export {
  AboutPageData,
  AboutPageDataCards,
};
