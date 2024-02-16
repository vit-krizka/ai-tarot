const BASE_URL = 'https://api.openai.com/v1/chat/completions';

const gptService = {
    sendData: async (context, prompt) => {
        const requestData = {
            // "model": "gpt-3.5-turbo",
            // "model": "gpt-4",
            "model": "gpt-3.5-turbo-0125",
            "response_format": { "type": "json_object" },
            "messages": [
                { "role": "system", "content": context },
                { "role": "user", "content": prompt }
            ]
        };

        try {
            const response = await fetch(BASE_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
                },
                body: JSON.stringify(requestData)
            });

            if (!response.ok) {
                console.error('Chyba při komunikaci s API');
                throw new Error('Chyba při komunikaci s API');
            }

            const responseData = await response.json();
            return responseData;
        } catch (error) {
            console.error('Chyba při komunikaci s GPT API', error);
            throw new Error('Chyba při komunikaci s GPT API');
        }
    }
};

export default gptService;
