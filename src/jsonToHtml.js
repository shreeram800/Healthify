import { genAI } from "./Workout";

export function jsonToHtml(jsonData) {
         let table = $("<div>");
         let cols = Object.keys(jsonData[0]);
         let thead = $("<h2>");
         let tr = $("<h3>");
         
         cols.map(function(col) {
            let th = $("<h2>").text(col); 
            tr.append(th);
         });
         thead.append(tr); 
         table.append(thead);
         
         jsonData.map(function(item) {
            let tr = $("<h3>");
    
            let vals = Object.values(item);
            
            vals.map(function(val) {
               let td = $("<h4>").text(val);
               tr.append(td);
            });
            table.append(tr);
         });
         return table;
      }
export async function Workout(name, age, height, currentWeight, targetWeight, specialMedicalCondition, minTime) {

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `You are a helpful workout assistant designed to give output strictly in html format and use only heading tags. generate a weekly gym and cardio workout plan to achieve a goal of getting target weight of ${targetWeight} kg from current weight of ${currentWeight} kg for a man name ${name} with age ${age}years, height ${height} cm with special medical condition of ${specialMedicalCondition} in ${minTime} weeks`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text;
}
