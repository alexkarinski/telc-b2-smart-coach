import { GoogleGenAI } from "@google/genai";
import { AIExplanation, Question, ModuleType, EssayCorrection } from "../types";

// Initialize Gemini
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
const modelId = 'gemini-2.5-flash';

export const getExplanation = async (
  question: Question,
  userAnswer: string,
  moduleType: ModuleType
): Promise<AIExplanation> => {
  
  const prompt = `
    Role: You are a strict but encouraging German B2 Exam Teacher (Telc format).
    Task: Analyze the student's answer to the following exercise.
    
    Module: ${moduleType}
    Context: ${question.contextText ? question.contextText.substring(0, 300) + "..." : "N/A"}
    Question/Gap: ${question.text}
    Student Answer: "${userAnswer}"
    Correct Answer: "${question.correctAnswer}"

    Output Requirement: Return ONLY a JSON object. Do not add markdown formatting.
    Structure:
    {
      "isCorrect": boolean,
      "explanation": "string (Explain clearly in German why the answer is right/wrong. Mention the grammar rule, e.g., 'Verben mit Präpositionen', 'Konjunktiv II'). Keep it concise (max 3 sentences).",
      "grammarTopic": "string (Short tag, e.g., 'Nominalisierung')",
      "betterAlternative": "string (Optional, if the student answer was wrong, show the correct form)"
    }
  `;

  try {
    const response = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
      config: {
        responseMimeType: "application/json"
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text) as AIExplanation;

  } catch (error) {
    console.error("Gemini API Error:", error);
    return {
      isCorrect: userAnswer === question.correctAnswer,
      explanation: "Entschuldigung, ich kann gerade keine detaillierte Erklärung abrufen. Aber die Lösung ist oben markiert.",
      grammarTopic: "Fehler",
    };
  }
};

export const translateToRussian = async (text: string): Promise<string> => {
    const prompt = `
      Task: Translate the following German text into natural, clear Russian.
      Input Text: "${text}"
      Output: Return ONLY the Russian translation.
    `;

    try {
        const response = await ai.models.generateContent({
            model: modelId,
            contents: prompt,
        });
        return response.text || "Перевод не удался.";
    } catch (e) {
        console.error("Translation error", e);
        return "Ошибка перевода.";
    }
};

export const correctEssay = async (essayText: string, taskPrompt: string): Promise<EssayCorrection> => {
    const prompt = `
        Role: German Telc B2 Examiner.
        Task: Grade and correct this short essay/letter.
        
        Task Prompt: "${taskPrompt}"
        Student Text: "${essayText}"

        Output Requirement: Return ONLY a JSON object.
        Structure:
        {
          "correctedText": "string (The full text rewritten with correct grammar and better style, maintaining the original meaning)",
          "feedback": ["string", "string", "string"], (3 specific bullet points in German on what to improve: grammar, vocabulary, or structure)
          "rating": "string (e.g., 'Gut', 'Befriedigend', 'Nicht bestanden')",
          "grammarScore": number (0-100)
        }
    `;

    try {
        const response = await ai.models.generateContent({
            model: modelId,
            contents: prompt,
            config: { responseMimeType: "application/json" }
        });
        
        const text = response.text;
        if(!text) throw new Error("Empty response");

        return JSON.parse(text) as EssayCorrection;
    } catch (e) {
        console.error(e);
        return {
            correctedText: "Fehler bei der Verbindung.",
            feedback: ["Konnte den Text nicht analysieren."],
            rating: "Fehler",
            grammarScore: 0
        };
    }
}