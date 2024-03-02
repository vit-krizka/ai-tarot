import Header from './../Header/Header';
import DivinationDescription from './../DivinationDescription/DivinationDescription';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './divinations.scss';


function Divinations() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>
            <Header />
            <main className="main-wrapper">
                <div className="main">
                    <h1>Věštby</h1>
                    <div className="divinationsSlider">
                        <Slider {...settings}>
                            <DivinationDescription
                                name="Odpovědi na ANO/NE otázky"
                                image='src/assets/question-divination.webp'
                                description="Položte věštci otázku, na kterou lze odpovědět ano, či ne. Na základě tří tarotových karet se věštec pokusí jasně odpovědět."
                                link="/question-divination"
                            />
                            <DivinationDescription
                                name="Minulost, přítomnost a budoucnost"
                                image='src/assets/future-divination.webp'
                                description="Zjistěte, co vás čeká v nejbližší budoucnosti. Můžete si vybrat oblast života, např. práce, vztahy či zdraví"
                                link="/future-divination"
                            />
                            <DivinationDescription
                                name="Maltézský kříž"
                                description="Položte věštci otázku, na kterou lze odpovědět ano, či ne. Na základě tří tarotových karet se věštec pokusí jasně odpovědět."
                                link="/"
                            />
                        </Slider>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Divinations;