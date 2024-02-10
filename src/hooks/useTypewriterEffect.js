import { useState, useEffect } from 'react';

export function useTypewriterEffect(texts, changeInterval = 5000) {
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        let typingTimeout;
        const typingDelay = 150; // Rychlost psaní/mazání
        const deletingSpeed = Math.floor(typingDelay / 3);
        const changeTextDelay = 1500; // Čas před změnou textu

        if (deleting) {
            if (text.length > 0) {
                // Mazání textu
                typingTimeout = setTimeout(() => {
                    setText(text.slice(0, text.length - 1));
                }, deletingSpeed);
            } else {
                // Po smazání nastavit na psaní nového textu
                setDeleting(false);
                setIndex((prevIndex) => (prevIndex + 1) % texts.length);
            }
        } else {
            // Psaní textu
            if (text.length < texts[index].length) {
                typingTimeout = setTimeout(() => {
                    setText(texts[index].substr(0, text.length + 1));
                }, typingDelay);
            } else {
                // Po dokončení psaní počkat, než začne mazání
                typingTimeout = setTimeout(() => {
                    setDeleting(true);
                }, changeInterval + changeTextDelay);
            }
        }

        return () => clearTimeout(typingTimeout);
    }, [text, deleting, index, texts, changeInterval]);

    return text;
}