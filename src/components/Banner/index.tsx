import {Box, Center, Flex, Heading, Icon, Text} from '@chakra-ui/react'
import React from 'react'
import { Airplane } from '../Airplane'

export function Banner(){
    return (
        <Box backgroundImage="./bannerbackfround.png" w="100%"  backgroundRepeat="no-repeat" backgroundSize="cover" color="white.100" pt="50px" px="180px">
            <Flex justify="space-between" w="100%">
            <Center>
                <Box>
                    <Heading fontWeight="medium" as="h1">5 continentes,  infinitas possibilidades</Heading>
                    <Text>Chegou a hora de tirar do papel a viagem que você sempre sonhou.</Text>
                </Box>
            </Center>
            <Box transform="rotate(3deg)">
                <Icon as={Airplane} />
            </Box>

            </Flex>

        </Box>
    )
}