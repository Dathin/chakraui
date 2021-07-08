import { Avatar, Box, Center, Flex, SimpleGrid, Stack } from "@chakra-ui/react";
import React from "react";
import Image from 'next/image'

interface CitiesProps {
    top100Cities: {
          image: string,
          name: string,
          countryName: string,
          countryImage: string,
        }[],
}

export function Cities({top100Cities}: CitiesProps){
    return <Flex w="100%" justifyContent="center" pt={9} mb={9}>
        <SimpleGrid columns={1} spacing={10} >
            {top100Cities.map(({image, name, countryName, countryImage}, index) => <Stack width="256" spacing={0} key={index}>
                <Image width="256" height="173" src={image} alt={name} />
                <Flex w="100%" p={4} border="1px solid #FFBA08" borderBottomRadius={3} borderTop="none">
                    <Stack w="50%">
                        <Box>{name}</Box>
                        <Box>{countryName}</Box>
                    </Stack>
                    <Flex w="50%" justifyContent="center" alignItems="center">
                        <Avatar name="defaultcontryavatar" width="30" height="30" src={countryImage} />
                    </Flex>
                </Flex>
            </Stack>)}
        </SimpleGrid>
    </Flex>
}