const apiKey = import.meta.env.VITE_APP_API_KEY;

import { GoogleGenerativeAI } from "@google/generative-ai"

export const genAI = new GoogleGenerativeAI(apiKey);


