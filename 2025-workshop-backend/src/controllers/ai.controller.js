// import { generateText } from '../services/openai.service.js';
 import { generateText } from '../services/ollama.service.js';

export const generateAIResponse = async (req, res) => {
    try {
        const { prompt } = req.body;
        
        // Validación básica
        if (!prompt) {
            return res.status(400).json({ message: "El prompt es obligatorio" });
        }

        const aiResponse = await generateText(prompt);
        res.status(200).json({ response: aiResponse });
    } catch (error) {
        // ¡IMPORTANTE! Imprime el error en la consola para verlo
        console.error("Error en OpenAI:", error); 
        
        res.status(500).json({ 
            message: 'Internal server error',
            error: error.message // Opcional: enviar el error al frontend para debug
        });
    }
};