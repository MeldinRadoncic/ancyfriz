import React from "react";

import Section from "../../Section";
import ReusableBanner from "../../ReusableBanner";
import ThirdTitle from "../../Titles/ThirdTitle";
import Meta from "../../Meta";

const PrivacyPolicyPage = () => {
    return (
        <>
        <Meta
            index="noindex"
            follow="nofollow"
            />

            <ReusableBanner
                title="Politika privatnosti"
                description="Ovo je politika privatnosti web stranice"
            />
            <Section>
                <div className="max-w-screen-xl mx-auto px-6 lg:px-16 flex flex-col space-y-12">
                    
                    
                    <div>
                        <>
                            <p className="paragraph italic mb-6">Datum stupanja na snagu: 20/10/2023</p>

                            <ThirdTitle title="1. Prikupljanje ličnih podataka" />
                            <p className="paragraph mb-4">
                                Naša web stranica, AncyFriz, prikuplja određene lične podatke putem kontakt forme
                                na web stranici. Ovi podaci uključuju:
                                <ul className="mt-4 list-disc">
                                    <li>Ime</li>
                                    <li>Email adresa</li>
                                    <li>Broj telefona</li>
                                    <li>Korisničko pitanje ili komentar</li>
                                </ul>
                            </p>

                            <ThirdTitle title="2. Svrha prikupljanja podataka" />
                            <p className="paragraph mb-4">
                                Prikupljeni lični podaci koriste se isključivo za slanje odgovora na korisničke upite i
                                poboljšanje kvaliteta naše web stranice putem Google Analytics-a.
                            </p>

                            <ThirdTitle title="3. Korištenje i dijeljenje podataka" />
                            <p className="paragraph mb-4">
                                Svi prikupljeni lični podaci tretirat će se kao povjerljivi i neće biti dijeljeni s trećim
                                stranama bez izričitog pristanka korisnika. Podaci se koriste samo za potrebe
                                odgovaranja na upite i analize web stranice.
                            </p>

                            <ThirdTitle title="4. Zaštita podataka" />
                            <p className="paragraph mb-4">
                                Osiguravamo da su lični podaci korisnika zaštićeni od neovlaštenog pristupa i
                                zloupotrebe. Podaci iz kontakt forme šalju se putem sigurne veze (HTTPS) i sigurno se
                                pohranjuju.
                            </p>

                            <ThirdTitle title="5. Kolačići" />
                            <p className="paragraph mb-4">
                                Naša web stranica može koristiti kolačiće za poboljšanje korisničkog iskustva i analizu
                                prometa. Korisnici mogu upravljati postavkama kolačića u svojim preglednicima.
                            </p>

                            <ThirdTitle title="6. Korisnička prava" />
                            <p className="paragraph mb-4">
                                Korisnici imaju pravo pristupa, ispravke i brisanja svojih ličnih podataka. Također
                                imaju pravo prigovora na obradu tih podataka.
                            </p>

                            <ThirdTitle title="7. Kontakt" />
                            <p className="paragraph mb-4">
                                Za pitanja ili ostvarivanje prava vezanih za privatnost, korisnici se mogu obratiti
                                vlasnici Anidi Imamović na broj telefona +38762 741-146 ili putem emaila
                                info@ancyfriz.com
                            </p>
                        </>
                    </div>
                </div>
            </Section>
        </>
    );
};

export default PrivacyPolicyPage;
