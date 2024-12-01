import React from "react";
import { FaClock, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

import Section from "../../Section";
import ReusableBanner from "../../ReusableBanner";
import SecondaryTitle from "../../Titles/SecondaryTitle";
import ThirdTitle from "../../Titles/ThirdTitle"; 
import CTA from "../../../Components/Pages/HomePage/CTA";  

const AboutPage = () => {
    return (
        <>
            <ReusableBanner
                title="O nama"
                description="Ovdje možete saznati sve o nama."
                className="bg-primary-charcoal"
                
            />

            <Section>
                <div className="container mx-auto px-8 lg:px-24">
                    {/* Introduction Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div className="flex flex-col justify-center items-start">
                            <SecondaryTitle title="Ko smo mi?" className="text-accent-rose-gold" />
                            <p className="paragraph mt-4">
                            AncyFriz je moderan Beauty salon smješten u Sarajevu, osnovan s misijom pružanja vrhunske usluge šišanja, bojanja i njege kose za žene, muškarce, djecu i starije. Naš tim čini grupa iskusnih i kreativnih profesionalaca posvećenih svakom klijentu, osiguravajući toplu dobrodošlicu i jedinstveno iskustvo.
                            </p>
                        </div>
                        <img
                            src="https://via.placeholder.com/500x300"
                            alt="Salon team"
                            className="rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Services Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
                        <img
                            src="https://via.placeholder.com/500x300"
                            alt="Salon services"
                            className="rounded-lg shadow-lg"
                        />
                        <div className="flex flex-col justify-center items-start">
                            <SecondaryTitle title="Šta radimo?" className="text-accent-rose-gold" />
                            <p className="paragraph mt-4">
                            Pružamo širok spektar frizerskih usluga, uključujući personalizirana šišanja, stiliziranje, farbanje, tretmane za zdravlje kose i savjetovanje. Naš prioritet je zadovoljiti želje klijenata, koristeći visokokvalitetne proizvode i najnovije tehnike u svijetu frizerstva.
                                                             </p>
                        </div>
                    </div>

                    {/* Working Hours and Contact Section */}
                    <div className="mt-16 bg-gray-100 py-12 rounded-lg shadow-md">
                        <SecondaryTitle title="Radno Vrijeme i Kontakt" className="text-accent-rose-gold text-center" />
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 text-center">
                            {/* Working Hours */}
                            <div className="flex flex-col items-center bg-primary-charcoal py-8 rounded-md">
                                <FaClock className="text-2xl text-accent-rose-gold" />
                                <ThirdTitle
                                title="Radno Vrijeme"
                                animation="fade-up"
                                className="mt-4 font-semibold text-accent-rose-gold"/>
                                <p className="paragraph text-neutral-gray mt-2">Ponedeljak - Subota: 09:00 - 18:00</p>
                                <p className="paragraph text-neutral-gray">Nedelja: 10:00 - 14:00</p>
                                <p className="paragraph text-neutral-gray">Utorak: ZATVORENO</p>
                            </div>
                            {/* Address */}
                            <div className="flex flex-col items-center bg-primary-charcoal py-8 rounded-md">
                                <FaMapMarkerAlt className="text-2xl text-accent-rose-gold" />
                                <ThirdTitle
                                title="Adresa"
                                animation="fade-up"
                                className="mt-4 font-semibold text-lg text-accent-rose-gold"/>
                                <p className="paragraph text-neutral-gray mt-2">Ulica Primjera 123</p>
                                <p className="paragraph text-neutral-gray">Sarajevo, Bosna i Hercegovina</p>
                            </div>
                            {/* Contact */}
                            <div className="flex flex-col items-center bg-primary-charcoal py-8 rounded-md">
                                <FaPhone className="text-2xl text-accent-rose-gold" />
                                <ThirdTitle
                                title="Kontakt"
                                animation="fade-up"
                                className="mt-4 font-semibold text-lg text-accent-rose-gold"/>
                                <p className="paragraph text-neutral-gray mt-2">+387 33 123 456</p>
                                <p className="paragraph text-neutral-gray">info@primjer.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                        <CTA />
            </Section>
        </>
    );
};

export default AboutPage;
