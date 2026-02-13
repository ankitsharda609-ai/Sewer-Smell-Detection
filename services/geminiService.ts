
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are a master technician for "Sewer Smell Pro" based on Dickson St in Fayetteville, Arkansas. 
Your goal is to help customers diagnose why their home smells like sewage or rotten eggs.
Key context:
- Fayetteville has a mix of historic homes (with old cast iron pipes) and new construction.
- Common issues: Dry P-traps, cracked vent stacks in the attic, failed wax rings under toilets, or main line backups.
- Explain "Smoke Testing": it's the best way to find hidden leaks.
- Be professional, slightly clinical (since sewer gas is a health concern), and reassuring.
- Always warn users that if the smell is overwhelming, they should ventilate the house and call (844) 340-6413 immediately.
- Keep responses concise and action-oriented.
`;

export async function getDiagnosticResponse(userMessage: string) {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text || "I'm sorry, I'm having trouble processing that request. Please call our Fayetteville office at (844) 340-6413.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our diagnostic AI is currently unavailable. Please call 100 Dickson St office directly at (844) 340-6413.";
  }
}
