import { useState, useEffect } from 'react';
import './divinationQuestion.scss';

function DivinationQuestion() {
    const [question, setQuestion] = useState('');
    const [placeholder, setPlaceholder] = useState('Mám si pořídit psa?');
    const placeholders = ["Je vhodné začít podnikat?", "Najdu letos životního partnera?", "Mám se přestěhovat?", "Mám si pořídit psa?"];
    let placeholderIndex = 0;

    useEffect(() => {
        const interval = setInterval(() => {
            setPlaceholder(placeholders[placeholderIndex]);
            placeholderIndex = (placeholderIndex + 1) % placeholders.length;
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const handleQuestionChange = (event) => {
        setQuestion(event.target.value);
    };

    return (
        <div className='divination-question'>
            <input
                id='divination-question-input'
                type='text'
                placeholder={placeholder}
                value={question}
                onChange={handleQuestionChange}
            />
        </div>
    );
}

export default DivinationQuestion;
