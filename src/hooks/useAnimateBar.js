import { useEffect } from 'react';

function hexToRgb(hex) {
    let r = 0, g = 0, b = 0;
    if (hex.length === 4) {
        r = parseInt(hex[1] + hex[1], 16);
        g = parseInt(hex[2] + hex[2], 16);
        b = parseInt(hex[3] + hex[3], 16);
    }
    else if (hex.length === 7) {
        r = parseInt(hex[1] + hex[2], 16);
        g = parseInt(hex[3] + hex[4], 16);
        b = parseInt(hex[5] + hex[6], 16);
    }
    return [r, g, b];
}

export function useAnimateBar(answer, decisionValueRef, finalColor) {
    useEffect(() => {
        if (answer && decisionValueRef.current) {
            const scaleValue = answer.skalaAnoNe * 100;
            decisionValueRef.current.style.width = '0%';
            setTimeout(() => {
                decisionValueRef.current.style.width = `${scaleValue}%`;

                if (typeof finalColor === 'string') {
                    const [r, g, b] = hexToRgb(finalColor);
                    const adjustedColor = `rgb(${Math.round(r * scaleValue / 100)}, ${Math.round(g * scaleValue / 100)}, ${Math.round(b * scaleValue / 100)})`;
                    decisionValueRef.current.style.backgroundColor = adjustedColor;
                } else {
                    decisionValueRef.current.style.backgroundColor = 'grey';
                }

            }, 10);
        }
    }, [answer, decisionValueRef, finalColor]);
}