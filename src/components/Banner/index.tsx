import {Box, Center, Flex, Heading, Icon, Text, useBreakpointValue} from '@chakra-ui/react'
import { useIsSize } from '../../hooks/useIsSize';
import { Airplane } from '../Airplane'

export function Banner(){

    const {isLarge} = useIsSize();

    return (
        <Box backgroundImage="./bannerbackfround.png" w="100%"  backgroundRepeat="no-repeat" backgroundSize="cover" color="white.100" px={4} py={["28px", "56px", "100px", "0", "0"]}>
            <Flex justify={["center", "center", "space-between"]} w="100%" flexWrap={["wrap", "wrap", "nowrap"]}>    
            <Center>
                <Box>
                    <Heading fontWeight="medium" lineHeight={["30px","54px"]} as="h1" fontSize={[20, 36]}>5 continentes,  infinitas possibilidades</Heading>
                    <Text fontSize={14} lineHeight="21px">Chegou a hora de tirar do papel a viagem que você sempre sonhou.</Text>
                </Box>
            </Center>
            {isLarge && <Box transform="rotate(6deg)">
                <Icon as={Airplane} />
            </Box>}

            </Flex>

        </Box>
    )
}