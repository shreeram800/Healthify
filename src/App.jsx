'use client'

import { FaGithub } from "react-icons/fa";

import {
  Box,
  HStack,
  Text,
  Flex,
  Button
} from '@chakra-ui/react'
import { Form } from "./Form";


export default function App() {

  return (
    <>
      <Box bg="cyan" px={4} h="80px">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={8} alignItems={'center'}>
            <Box fontSize="xx-large" color={"black"}> <Text as="b" >Healthify</Text></Box>
          </HStack>
          <HStack spacing={"5px"} >
            <a href="https://github.com/shreeram800"><Button><FaGithub size="30px"color="black"/></Button></a>
          <Box fontSize="large" color="black"><Text as={"b"}>Shree Ram</Text></Box>
          </HStack> 
        </Flex>
        <Form ></Form>
      </Box>
    </>
  )
}