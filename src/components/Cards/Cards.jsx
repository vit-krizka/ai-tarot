import { Link } from 'react-router-dom';

import Header from './../Header/Header';
import Card from './../Card/Card';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import cardsData from '../../data/cards';

import './cards.scss';

function Cards() {
    const majorArcana = cardsData.filter(card => card.type === "Velká Arkána");
    const minorArcana = cardsData.filter(card => card.type === "Malá Arkána");

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1700,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <>
            <Header />
            <main className="cards-wrapper">
                <div className="cards">
                    <h1>Tarotové karty</h1>
                    <h2>Velká arkána</h2>
                    <div className="cardsSlider">
                        <Slider {...settings}>
                            {majorArcana.map(card => (
                                <Card key={card.id} card={card} />
                            ))}
                        </Slider>
                    </div>

                    <h2>Malá arkána</h2>
                    <div className="cardsSlider">
                        <Slider {...settings}>
                            {minorArcana.map(card => (
                                <Card key={card.id} card={card} />
                            ))}
                        </Slider>
                    </div>

                    <Link className='close' to="/">×</Link>
                </div>
            </main>
        </>
    );
}

export default Cards;
