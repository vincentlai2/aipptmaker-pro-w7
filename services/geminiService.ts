import { GoogleGenAI, Type } from "@google/genai";
import { Slide } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY || '' });

const MODEL_ID = 'gemini-3-flash-preview';

/**
 * Generates a structured outline for the presentation based on a topic.
 */
export const generateOutline = async (topic: string, count: number = 8): Promise<{ title: string; slideOutlines: { title: string; purpose: string }[] }> => {
  const prompt = `
    Task: Create a professional presentation outline for the topic: "${topic}".
    Target Audience: Business professionals or students.
    Tone: Professional, insightful, and clear.
    Slide Count: Approximately ${count} slides.

    Requirements:
    1. Create a compelling, non-generic title for the deck.
    2. Outline ${count} slides. For each slide, provide a "title" and a one-sentence "purpose" describing the key message.
    3. Ensure a logical flow: Introduction -> Problem/Context -> Solution/Analysis -> Data/Evidence -> Conclusion.

    Output JSON format only.
  `;

  try {
    const response = await ai.models.generateContent({
      model: MODEL_ID,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            slideOutlines: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING },
                  purpose: { type: Type.STRING }
                }
              }
            }
          }
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    return JSON.parse(text);
  } catch (error) {
    console.error("Outline generation failed:", error);
    throw error;
  }
};

/**
 * Generates detailed content for a specific slide.
 */
export const generateSlideContent = async (topic: string, slideTitle: string, purpose: string): Promise<Omit<Slide, 'id' | 'layout'>> => {
  const prompt = `
    Topic: "${topic}"
    Slide: "${slideTitle}"
    Context: ${purpose}
    
    Task: Write content for this presentation slide.
    
    Requirements:
    1. Refine the Title: Make it punchy and professional.
    2. Content: Provide 3-4 bullet points. Each point should be a complete thought, not just a keyword. Avoid robotic "AI" language like "In the realm of..." or "Unleash power". Be direct and factual.
    3. Image Prompt: Describe a real-world photography style image that illustrates this concept. Do not ask for text in the image. Example: "A modern office meeting with diverse team, cinematic lighting" or "Close up of renewable energy wind turbines, blue sky".

    Output JSON only.
  `;

  try {
    const response = await ai.models.generateContent({
      model: MODEL_ID,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            content: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            imagePrompt: { type: Type.STRING }
          }
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    return JSON.parse(text);
  } catch (error) {
    console.error("Slide content generation failed:", error);
    return {
      title: slideTitle,
      content: ["Content pending generation..."],
      imagePrompt: "abstract business background"
    };
  }
};