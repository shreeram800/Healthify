import React, { useState } from "react";
import { VStack, Box, Select, Input, Text, Button, Spinner, Center, Flex } from "@chakra-ui/react";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { generate } from "./genrate";

const medicalCondition = ["None", "Diabetes", "High BP", "Low BP", "Thyroid", "Cancer", "Lung problem"];
const type = ["Select", "Diet", "Exercise"];

export function Form() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [height, setHeight] = useState("");
    const [currentWeight, setCurrentWeight] = useState("");
    const [targetWeight, setTargetWeight] = useState("");
    const [specialMedicalCondition, setSpecialMedicalCondition] = useState("");
    const [minTime, setMinTime] = useState("");
    const [exercise, setExercise] = useState("");
    const [error, setError] = useState("");
    const [showOverlay, setShowOverlay] = useState(false);
    const [outputHTML, setOutputText] = useState("");

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleAgeChange = (event) => {
        setAge(event.target.value);
    };

    const handleHeightChange = (event) => {
        setHeight(event.target.value);
    };

    const handleCurrentWeightChange = (event) => {
        setCurrentWeight(event.target.value);
    };

    const handleTargetWeightChange = (event) => {
        setTargetWeight(event.target.value);
    };

    const handleSpecialMedicalConditionChange = (event) => {
        setSpecialMedicalCondition(event.target.value);
    };

    const handleMinTimeChange = (event) => {
        setMinTime(event.target.value);
    };

    const handleExercise = (event) => {
        setExercise(event.target.value);
    };
    let output;
    const onSubmit = async (event) => {
        setShowOverlay(true);
        try {
            const output = await generate(name, age, height, currentWeight, targetWeight, specialMedicalCondition, minTime, exercise);
            setOutputText(output);
            setName("");
            setAge("");
            setHeight("");
            setCurrentWeight("");
            setTargetWeight("");
            setSpecialMedicalCondition("");
            setMinTime("");
            setExercise("");
            setError("");
        } catch (error) {
            setError("An error occurred: " + error);
        }
        setShowOverlay(false);
    };

    return (
        <Box position="relative">
            {showOverlay && (
                <Flex
                    position="fixed"
                    top={0}
                    left={0}
                    width="100%"
                    height="100%"
                    backgroundColor="rgba(0, 0, 0, 0.5)"
                    zIndex={999}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Spinner size="xl" color="teal.500" thickness="4px" />
                </Flex>
            )}
            <VStack spacing={"10px"} marginTop={"5%"} align={"left"} ml={"30%"}>
            <Text fontSize={"xl"}>Name: </Text>
            <Input w={"60%"} rounded={"max"} value={name} onChange={handleNameChange} size="lg" borderRadius={"8px"}></Input>
            <Text fontSize={"xl"}>age: </Text>
            <Input w={"60%"} rounded={"max"} type="number" value={age} onChange={handleAgeChange} size="lg" borderRadius={"8px"}></Input>
            <Text fontSize={"xl"}>Height in cm: </Text>
            <Input w={"60%"} rounded={"max"} value={height} type="number" onChange={handleHeightChange} size="lg" borderRadius={"8px"}></Input>
            <Text fontSize={"xl"}>Current weight in kg: </Text>
            <Input w={"60%"} rounded={"max"} value={currentWeight} type="number" onChange={handleCurrentWeightChange} size="lg" borderRadius={"8px"}></Input>
            <Text fontSize={"xl"}>Target Weight in kg: </Text>
            <Input w={"60%"} rounded={"max"} value={targetWeight} size="lg" type="number" onChange={handleTargetWeightChange} borderRadius={"8px"}></Input>
            <Text fontSize={"xl"}>Special medical Condition: </Text>
            <Select w={"60%"} rounded={"max"} value={specialMedicalCondition} onChange={handleSpecialMedicalConditionChange} size="lg" borderRadius={"8px"}>
                {medicalCondition.map((condition, index) => (
                    <option key={index} value={condition}>
                        {condition}
                    </option>
                ))}
            </Select>
            <Text fontSize={"xl"}>Min time to achieve Target in weeks: </Text>
            <Input w={"60%"} rounded={"max"} value={minTime} size="lg" type="number" onChange={handleMinTimeChange} borderRadius={"8px"}></Input>
            <Text fontSize={"xl"}>EXERCISE OR DIET: </Text>
            <Select w={"60%"} rounded={"max"} value={exercise} onChange={handleExercise} size="lg" borderRadius={"8px"}>
                {type.map((condition, index) => (
                    <option key={index} value={condition}>
                        {condition}
                    </option>
                ))}
            </Select>
            </VStack>
            <Center marginTop="20px">
                <Button
                    colorScheme="cyan"
                    rightIcon={<IoCheckmarkDoneCircle size={"25px"} />}
                    size="lg"
                    onClick={onSubmit}
                >
                    Submit
                </Button>
            </Center>
            {error && (
                <Text color="red.500" textAlign="center" marginTop="20px">
                    {error}
                </Text>
            )}
            {outputHTML && (
                <Box align={"center"}>
                <Text fontSize="3xl" color={"cyan"} as={"b"} marginTop={"50px"}>OUTPUT</Text>
                <Box marginTop="20px" align="left" padding="30px" w="70%" border="2px" borderRadius="10px" borderColor={"cyan"} marginBottom={"20%"} dangerouslySetInnerHTML={{ __html: outputHTML }} />
                </Box>
            )}
        </Box>
    );
}