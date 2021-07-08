import { Box, Center, Flex, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Tooltip } from "../Tooltip";

interface ContnentContentProps {
    descriptionText: string;
    numberOfCountries: number;
    numberOfLanguages: number;
}

export function ContnentContent({descriptionText, numberOfCountries, numberOfLanguages}: ContnentContentProps){
    return <>
        <Flex w="100%" justifyContent="center" pt={4}>
            <Stack w="90%"> 
                <Text fontStyle="normal" fontWeight="400" lineHeight="21px" fontSize="14px" color="gray.200">
                {descriptionText}
                </Text>
                <Flex>
                <Stack w="25%">
                    <Heading fontStyle="normal" fontWeight="600" lineHeight="36px" fontSize="24px" color="yellow.900">{numberOfCountries}</Heading>
                    <Text fontStyle="normal" fontWeight="400" lineHeight="27px" fontSize="18px" color="gray.200">países</Text>
                </Stack>
                <Stack w="25%">
                    <Heading fontStyle="normal" fontWeight="600" lineHeight="36px" fontSize="24px" color="yellow.900">{numberOfLanguages}</Heading>
                    <Text fontStyle="normal" fontWeight="400" lineHeight="27px" fontSize="18px" color="gray.200">línguas</Text>
                </Stack>
                <Stack w="40%">
                    <Heading fontStyle="normal" fontWeight="600" lineHeight="36px" fontSize="24px" color="yellow.900">24</Heading>
                    <Center>
                        <Text display="inline-block" fontStyle="normal" fontWeight="400" lineHeight="27px" fontSize="18px" color="gray.200" mr={2}>cidades +100</Text>
                        <Tooltip />
                    </Center>
                </Stack>
                </Flex>
            </Stack>
        </Flex>
        <Flex w="100%" justifyContent="center" pt={4}>
            <Flex w="90%" >
                <Heading>Cidades +100</Heading>
            </Flex>
        </Flex>
    </>
}