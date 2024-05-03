import main from "./aiGenerate";
import exec from "./aiExerciseGenerate";


export function generate(name, age, height, currentWeight, targetWeight, specialMedicalCondition, minTime, exercise){
    let output;
    if(exercise=="DIET"){
        output=main(name, age, height,currentWeight, targetWeight,specialMedicalCondition, minTime  );
    }
    else{
        output=exec(name, age, height,currentWeight, targetWeight,specialMedicalCondition, minTime );
    }
    return output;
}