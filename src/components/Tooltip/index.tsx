import { QuestionOutlineIcon } from "@chakra-ui/icons"
import {Tooltip as ChakraTooltip} from "@chakra-ui/react"

export function Tooltip(){
    return <ChakraTooltip label="As cidades +100 são as cidades que aquele continente possui que estão entre as 100 cidades mais visitadas do mundo" fontSize="md">
        <QuestionOutlineIcon />
    </ChakraTooltip>
}