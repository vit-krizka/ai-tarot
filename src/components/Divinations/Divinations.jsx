import Header from './../Header/Header';
import DivinationDescription from './../DivinationDescription/DivinationDescription';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './divinations.scss';

import questionDivinationImage from './../../assets/divination-types/question-divination.webp';
import futureDivinationImage from './../../assets/divination-types/future-divination.webp';
import dreamMeaningImage from './../../assets/divination-types/dream-meaning.webp';
import oracleBallImage from './../../assets/divination-types/oracle-ball.webp';
import dayHoroscopeImage from './../../assets/divination-types/day-horoscope.webp';
import yearHoroscopeImage from './../../assets/divination-types/year-horoscope.webp';

function Divinations() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        // TODO: Udělat komponenty pro šipky
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };


    return (
        <>
            <Header />
            <main className="main-wrapper">
                <div className="main">
                    <div className="divinationsSlider">
                        <Slider {...settings}>
                            <DivinationDescription
                                name="Źivotní rozhodnutí"
                                type="Tarot"
                                image={questionDivinationImage}
                                description="Položte věštci otázku, na kterou lze odpovědět ano, či ne. Na základě tarotových karet věštec poskytne odpověď."
                                button="Vyložit karty"
                                link="/question-divination"
                            />
                            <DivinationDescription
                                name="Minulost, přítomnost a budoucnost"
                                type="Tarot"
                                image={futureDivinationImage}
                                description="Zjistěte, co vás čeká v nejbližší budoucnosti. Můžete si vybrat oblast života, např. pracovní vztahy či osobní život."
                                button="Vyložit karty"
                                link="/future-divination"
                                tag="only-login"
                            />
                            <DivinationDescription
                                name="Výklad snů"
                                type="Snář"
                                image={dreamMeaningImage}
                                description="Popište věštci sen, který se vám zdál. Věštec vám pomůže porozumět významu vašeho snu."
                                button="Vyložit sen"
                                link="/dream-meaning"
                                tag="coming-soon"
                            />
                            <DivinationDescription
                                name="Věštecká koule"
                                type="Věštecká koule"
                                image={oracleBallImage}
                                description="Zeptejte se věštecké koule na otázku, na kterou potřebujete odpověď. Věštecká koule vám poskytne odpověď."
                                button="Pozřít do koule"
                                link="/oracle-ball"
                                tag="coming-soon"
                            />
                            <DivinationDescription
                                name="Denní horoskop"
                                type="Horoskop"
                                image={dayHoroscopeImage}
                                description="Zjistěte, co vás čeká v nejbližší budoucnosti dle vašeho znamení zvěrokruhu."
                                button="Přečíst horoskop"
                                link="/day-horoscope"
                                tag="coming-soon"
                            />
                            <DivinationDescription
                                name="Roční horoskop"
                                type="Horoskop"
                                image={yearHoroscopeImage}
                                description="Zjistěte, co vás letos čeká dle vašeho znamení zvěrokruhu."
                                button="Přečíst horoskop"
                                link="/year-horoscope"
                                tag="coming-soon"
                            />
                        </Slider>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Divinations;