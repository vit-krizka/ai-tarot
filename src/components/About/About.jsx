import Header from './../Header/Header';
import { Link } from 'react-router-dom';

import './about.scss';

function About() {
    return (
        <>
            <Header />
            <main className="about-wrapper">
                <div className="about">
                    <h1>O aplikaci</h1>
                    <p>Tarotová aplikace, využívající technologie ChatGPT, představuje revoluční nástroj, který kombinuje starodávné umění tarotu s nejmodernějšími technologiemi umělé inteligence. Tarot má dlouhou historii, sahající až do 15. století, kdy byly tarotové karty původně vytvořeny pro hru, ale postupem času se začaly používat jako nástroj pro věštění a duchovní průvodce. Tarotové karty slouží jako zrcadlo duše, odhalující hluboké pravdy o našem vnitřním světě, ambicích, obavách a cestách, které před námi stojí.</p>
                    <p>Věštění z tarotových karet je uměním i vědou, která vyžaduje porozumění symbolice a významu jednotlivých karet, stejně jako schopnost interpretovat vzájemné vztahy mezi nimi. Každá karta v tarotovém balíčku má svůj jedinečný význam, ať už se jedná o Velké Arkána, zahrnující hlavní archetypální motivy a postavy, nebo o Menší Arkána, které se zaměřují na každodenní aspekty života. Interpretace tarotových karet může odhalit náhledy do minulosti, současnosti i možných budoucích cest.</p>
                    <p>Použití ChatGPT v tarotové aplikaci umožňuje uživatelům interagovat s tarotem na hlubší úrovni, díky pokročilému zpracování přirozeného jazyka a schopnosti AI adaptovat se na individuální dotazy a záměry uživatele. Tato interakce přináší personalizované čtení tarotu, které je přizpůsobeno specifickým potřebám a situacím jednotlivce. Uživatelé mohou klást otázky a dostávat okamžité, promyšlené odpovědi, které odrážejí významy karet vybraných právě pro ně.</p>
                    <p>Vývoj tarotové aplikace s ChatGPT také otevírá dveře k novým možnostem vzdělávání a průzkumu tarotu. Začátečníci i pokročilí uživatelé mohou prohloubit své porozumění tarotu skrze interaktivní dialogy, kde se mohou učit o významech karet, historii tarotu a různých metodách věštění. Tato aplikace může sloužit jako nástroj pro osobní růst a sebereflexi, nabízející uživatelům způsob, jak se zamyslet nad svým životem a hledat vodítka pro svou cestu vpřed.</p>
                    <p>Aplikace také zpřístupňuje tarot širšímu publiku, snižuje bariéry pro vstup do tohoto fascinujícího světa a demystifikuje proces věštění. S AI jako průvodcem se uživatelé mohou cítit podpořeni a vedeni během své tarotové cesty, což může pomoci překonat obavy nebo skeptici, kteří se k tarotu staví opatrně.</p>
                    <Link className='close' to="/">×</Link>
                </div>
            </main>
        </>
    )
}

export default About;