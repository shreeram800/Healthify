import OpenAI from "openai";
const apiKey = import.meta.env.VITE_APP_API_KEY;


const openai = new OpenAI({ apiKey: apiKey, dangerouslyAllowBrowser: true });

export default async function exec(name, age, height, currentWeight, targetWeight, specialMedicalCondition, time, veg) {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "You are a helpful workout assistant designed to give output in formatted html and don't use html, body, head and title tag. just give content of body tag.",
      },
      { role: "user", content: `generate a workout session with a mix of gym and cardio to achieve a goal of getting target weight of ${targetWeight} kg from current weight of ${currentWeight} kg for a man name ${name} with age ${age}years, height ${height} cm with special medical condition of ${specialMedicalCondition} in ${time} weeks.` },
    ],
    model: "gpt-3.5-turbo-0125",
    response_format: { type: "text" },
  }); 
     return (completion.choices[0].message.content); 
}
