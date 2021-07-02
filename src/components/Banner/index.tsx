import {Box, Center, Flex, Heading, Icon, Text, useBreakpointValue} from '@chakra-ui/react'
import { Airplane } from '../Airplane'

//Fazer o avião sair do coiso
export function Banner(){

    const isMediumScreen = useBreakpointValue({
        md: true,
    });

    const isLargeScreen = useBreakpointValue({
        lg: true,
    });

    return (
        <Box backgroundImage="./bannerbackfround.png" w="100%"  backgroundRepeat="no-repeat" backgroundSize="cover" color="white.100" px={4} pt={25} pb={19}>
            <Flex justify={isLargeScreen ? "space-between" : "center"} w="100%" flexWrap={isLargeScreen ? "nowrap" : "wrap"}>    
            <Center>
                <Box>
                    <Heading fontWeight="medium" lineHeight={isMediumScreen ? '54px' : '30px'} as="h1" fontSize={isMediumScreen ? 36 : 20}>5 continentes,  infinitas possibilidades</Heading>
                    <Text fontSize={14} lineHeight="21px">Chegou a hora de tirar do papel a viagem que você sempre sonhou.</Text>
                </Box>
            </Center>
            {isMediumScreen && <Box transform="rotate(6deg)">
                <Icon as={Airplane} />
            </Box>}

            </Flex>

        </Box>
    )
}