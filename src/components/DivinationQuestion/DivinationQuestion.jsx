import { useState, useEffect } from 'react';

import { useTypewriterEffect } from './../../hooks/useTypewriterEffect'; // Předpokládá, že hook je uložen v souboru useTypewriterEffect.js

import './divinationQuestion.scss';

function DivinationQuestion({ question, onQuestionChange }) {
    const placeholders = [
        "Je vhodné začít podnikat?",
        "Najdu letos životního partnera?",
        "Měl bych změnit zaměstnání?",
        "Je vhodné začít studovat?",
        "Mám se letos přestěhovat?",
        "Mám si pořídit psa?",
        "Je vhodná doba na nákup nemovitosti?",
        "Mám si pořídit nové auto?",
        "Najdu si letos nové přátele?",
        "Máme si pořídit dítě?"
    ];
    const placeholder = useTypewriterEffect(placeholders, 5000);

    return (
        <div className='divination-question'>
            <input
                id='divination-question-input'
                type='text'
                placeholder={placeholder}
                value={question}
                onChange={onQuestionChange}
            />
        </div>
    );
}

export default DivinationQuestion;
