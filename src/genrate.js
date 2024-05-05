import { Diet } from "./Diet";
import { Workout } from"./Workout";


export function generate(name, age, height, currentWeight, targetWeight, specialMedicalCondition, minTime, exercise){
    let output;
    if(exercise=="Diet"){
        output=Diet(name, age, height,currentWeight, targetWeight,specialMedicalCondition, minTime  );
    }
    else if(exercise=="Exercise"){
        output=Workout(name, age, height,currentWeight, targetWeight,specialMedicalCondition, minTime );
    }
    else{
        return "Error: occurred....!!!!"
    }

    return output;
}