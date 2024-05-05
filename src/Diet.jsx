const apiKey = import.meta.env.VITE_APP_API_KEY;

import { GoogleGenerativeAI } from "@google/generative-ai"

const genAI = new GoogleGenerativeAI(apiKey);

 export async function Diet(name, age, height,currentWeight, targetWeight,specialMedicalCondition, minTime) {

const model = genAI.getGenerativeModel({ model: "gemini-pro"});

const prompt = `You are a helpful Diet assistant designed to give output strictly in html format use only heading tags . generate a weekly indian diet plan to achieve a goal of getting target weight of ${targetWeight} kg from current weight of ${currentWeight} kg for a man name ${name} with age ${age}years, height ${height} cm with special medical condition of ${specialMedicalCondition} in ${minTime} weeks`

const result = await model.generateContent(prompt);
const response = await result.response;
const text = response.text();
return text;
}