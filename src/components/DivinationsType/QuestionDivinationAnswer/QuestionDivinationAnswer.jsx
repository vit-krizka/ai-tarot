import { useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import Header from '../../Header/Header';
import { useAnimateBar } from '../../../hooks/useAnimateBar';

import gptService from '../../../services/gptService';

import './questionDivinationAnswer.scss';

function QuestionDivinationAnswer() {
    const location = useLocation();
    const { question, cards } = location.state || {};
    const [answer, setAnswer] = useState(null);

    useEffect(() => {
        const savedAnswer = localStorage.getItem('divinationAnswer');
        if (savedAnswer) {
            setAnswer(JSON.parse(savedAnswer));
        } else {
            const fetchData = async () => {
                try {
                    const prompt = `
                    Potřebuji pomoc s věštbou tarotových karet. Moje otázka zní: ${question}.
                    Jako první kartu, která značí minulost, jsem vytáhl ${cards[0].name}.
                    Jako druhou kartu, která značí přítomnost, jsem vytáhl kartu ${cards[1].name}.
                    Jako třetí kartu, která značí budoucnost, jsem vytáhl kartu ${cards[2].name}.

                    Vrať mi JSON tohoto formátu:
                    {
                        "vyznamPrvniKarty": "Zde obecně popiš význam první karty a poté vysvětli, jaký význam může tato karta mít v kontextu položené otázky.",
                        "vyznamDruheKarty": "Zde obecně popiš význam druhé karty a poté vysvětli, jaký význam může tato karta mít v kontextu položené otázky.",
                        "vyznamTretiKarty": "Zde obecně popiš význam třetí karty a poté vysvětli, jaký význam může tato karta mít v kontextu položené otázky.",
                        "celkovyVyznam": "Zde vyvěšti odpověď na položenou otázku ze všech vyložených karet. Vycházej výhradně z vyložených karet.",
                        "skalaAnoNe": "Zde uveď číslo od 0 do 1, a to na škále od 0 (NE) do 1 (ANO) podle toho, jak moc je odpověď ANO nebo NE pravděpodobná dle vyložených karet.",
                        "shrnuti": "Zde stručně shrň svou výše uvedenou odpověď.",
                        "doplnujiciOtazka": "Zde vymysli stručnou otázku na věštce týkající se této věštby, na kterou lze odpovědět ano, či ne, která by mohla tazatele dále zajímat.",
                        "odpovedNaDoplnujiciOtazku": "Zde vyvěšti odpověď na doplňující otázku dle daných karet.",
                        "druhaDoplnujiciOtazka": "Zde vymysli stručnou otázku ve stylu, co když neuposlechnu rady dle věštby. Např. pokud jsem se ptal na to, zda se mám rozvést a věštba mi radí, že ne, zeptej se, co se stane, když se rozvedu.",
                        "odpovedNaDruhouDoplnujiciOtazku": "Zde vyvěšti odpověď na druhou doplňující otázku dle daných karet."
                    }`;

                    const response = await gptService.sendData("Jsi věštec, který se soustředí na položenoou otázku a snaží se odpovědět co nejjasněji. Většina věšteb je příliš pozitivních a motivačních; ty se skutečně snažíš být více realistický.", prompt);
                    const jsonString = response.choices[0].message.content.trim();
                    localStorage.setItem('divinationAnswer', jsonString);
                    setAnswer(JSON.parse(jsonString));
                } catch (error) {
                    console.error('Chyba při získávání odpovědi od API', error);
                }
            };

            fetchData();
        }
    }, [question, cards]);

    // TODO #3: barvy nefungují dobře
    const decisionValueRef = useRef(null);
    useAnimateBar(answer, decisionValueRef, "#27ae60");

    function translateDecisionScale(value) {
        if (value >= 0 && value <= 0.2) {
            return "Ne";
        } else if (value > 0.2 && value <= 0.4) {
            return "Spíše ne";
        } else if (value > 0.4 && value <= 0.6) {
            return "Budoucnost je nejistá";
        } else if (value > 0.6 && value <= 0.8) {
            return "Spíše ano";
        } else if (value > 0.8 && value <= 1) {
            return "Ano";
        } else {
            return "Budoucnost je nejistá";
        }
    }

    const renderMeaningWithBoldName = (meaning, cardName) => {
        return meaning.split(new RegExp(`(${cardName})`, 'gi')).map((part, index) =>
            part.toLowerCase() === cardName.toLowerCase() ? <strong key={index}>{part}</strong> : part
        );
    };

    return (
        <>
            <Header />
            <main className="divination-answer-wrapper">
                <div className="divination-answer">
                    <h1 className="question">{question}</h1>
                    <div className="cards-interpretation">
                        {/* TODO #2: toto předělat na komponenty */}
                        <div className="card-interpretation">
                            <img className="image" src={`/cards/${cards[0].image}`} />
                            <div className="position">Minulost</div>
                            <div className="name">{cards[0].name}</div>
                            {answer ? (
                                <div className="meaning">
                                    {renderMeaningWithBoldName(answer.vyznamPrvniKarty, cards[0].name)}
                                </div>
                            ) : (
                                <div className="meaning loader">Věštba se připravuje</div>
                            )}
                        </div>
                        <div className="card-interpretation">
                            <img className="image" src={`/cards/${cards[1].image}`} />
                            <div className="position">Přítomnost</div>
                            <div className="name">{cards[1].name}</div>
                            {answer ? (
                                <div className="meaning">
                                    {renderMeaningWithBoldName(answer.vyznamDruheKarty, cards[1].name)}
                                </div>
                            ) : (
                                <div className="meaning loader">Věštba se připravuje</div>
                            )}
                        </div>
                        <div className="card-interpretation">
                            <img className="image" src={`/cards/${cards[2].image}`} />
                            <div className="position">Budoucnost</div>
                            <div className="name">{cards[2].name}</div>
                            {answer ? (
                                <div className="meaning">
                                    {renderMeaningWithBoldName(answer.vyznamTretiKarty, cards[2].name)}
                                </div>
                            ) : (
                                <div className="meaning loader">Věštba se připravuje</div>
                            )}
                        </div>
                    </div>
                    <div className="answer">
                        {answer ? (
                            <>
                                <div>{answer.celkovyVyznam}</div>
                                <div className="decision">
                                    <div className="decision-max"></div>
                                    <div className="decision-value" ref={decisionValueRef}></div>
                                    <div className="decision-number">{translateDecisionScale(answer.skalaAnoNe)}</div>
                                </div>
                                <div>{answer.shrnuti}</div>
                                {/* <button className="additional-question">{answer.doplnujiciOtazka}</button>
                                <button className="additional-question">{answer.druhaDoplnujiciOtazka}</button> */}
                            </>
                        ) : (
                            <div className="loader">Věštba se připravuje</div>
                        )}
                    </div>
                </div>
            </main>
        </>
    )
}

export default QuestionDivinationAnswer;