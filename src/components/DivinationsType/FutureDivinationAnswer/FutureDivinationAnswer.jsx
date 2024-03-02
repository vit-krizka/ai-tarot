import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './../../Header/Header';

import gptService from './../../../services/gptService';

import './futureDivinationAnswer.scss';

function DivinationAnswer() {
    const location = useLocation();
    const { divinationType, cards } = location.state || {};
    const [answer, setAnswer] = useState(null);

    function nameDivinationType() {
        switch (divinationType) {
            case 'personal':
                return 'osobního života a vztahů';
            case 'love':
                return 'lásky a vztahů';
            case 'work':
                return 'práce, podnikání a pracovních vztahů';
            case 'health':
                return 'zdraví';
            case 'money':
                return 'peněz a finanční situace';
            case 'family':
                return 'rodiny a rodinných vztahů';
            case 'sex':
                return 'sexuálního života a vztahů';
            default:
                return 'budoucnosti';
        }
    }

    useEffect(() => {
        const savedAnswer = localStorage.getItem('divinationAnswer');
        if (savedAnswer) {
            setAnswer(JSON.parse(savedAnswer));
        } else {
            const fetchData = async () => {
                try {
                    const prompt = `
                    Potřebuji pomoc s věštbou tarotových karet týkající se ${nameDivinationType(divinationType)}.
                    Jako první kartu, která značí minulost, jsem vytáhl ${cards[0].name}.
                    Jako druhou kartu, která značí přítomnost, jsem vytáhl kartu ${cards[1].name}.
                    Jako třetí kartu, která značí budoucnost, jsem vytáhl kartu ${cards[2].name}.

                    Vrať mi JSON tohoto formátu:
                    {
                        "vyznamPrvniKarty": "Zde obecně popiš význam první karty a poté vysvětli, jaký význam týkající se ${nameDivinationType(divinationType)} může tato karta obecně mít.",
                        "vyznamDruheKarty": "Zde obecně popiš význam druhé karty a poté vysvětli, jaký význam týkající se ${nameDivinationType(divinationType)} může tato karta obecně mít.",
                        "vyznamTretiKarty": "Zde obecně popiš význam třetí karty a poté vysvětli, jaký význam týkající se ${nameDivinationType(divinationType)} může tato karta obecně mít.",
                        "celkovyVyznam": "Zde podrobně popiš, co plyne pro oblast ${nameDivinationType(divinationType)} ze všech vyložených karet. Vycházej výhradně z vyložených karet."
                    }`;

                    console.log(prompt);

                    const response = await gptService.sendData("Jsi věštec, který se soustředí na výklad budoucnosti otázku. Většina věšteb je příliš pozitivních a motivačních; ty se skutečně snažíš být více realistický.", prompt);
                    const jsonString = response.choices[0].message.content.trim();
                    localStorage.setItem('divinationAnswer', jsonString);
                    setAnswer(JSON.parse(jsonString));
                } catch (error) {
                    console.error('Chyba při získávání odpovědi od API', error);
                }
            };

            fetchData();
        }
    }, [divinationType, cards]);

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
                    <h1 className="type">Budoucnost týkající se {nameDivinationType(divinationType)}</h1>
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

export default DivinationAnswer;