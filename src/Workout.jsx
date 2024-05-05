const apiKey = import.meta.env.VITE_APP_API_KEY;

import { GoogleGenerativeAI } from "@google/generative-ai"

const genAI = new GoogleGenerativeAI(apiKey);

 export async function Workout(name, age, height,currentWeight, targetWeight,specialMedicalCondition, minTime) {

const model = genAI.getGenerativeModel({ model: "gemini-pro"});

const prompt = `You are a helpful workout assistant designed to give output strictly in html format and use only heading tags. generate a weekly gym and cardio workout plan to achieve a goal of getting target weight of ${targetWeight} kg from current weight of ${currentWeight} kg for a man name ${name} with age ${age}years, height ${height} cm with special medical condition of ${specialMedicalCondition} in ${minTime} weeks`

const result = await model.generateContent(prompt);
const response = await result.response;
const text = response.text();
return text;
}