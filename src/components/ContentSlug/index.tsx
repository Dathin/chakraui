import { Text, Flex, Heading, Stack } from "@chakra-ui/react";
import React from "react";

interface ContentSlugProps {
    backgroundImageUrl: string;
    heading: string;
    text?: string;
}

export function ContnentSlug({ backgroundImageUrl, heading, text }: ContentSlugProps){
    return (
        <Stack textShadow="1px 1px #47585B" justifyContent="center" alignItems="center" color="white.100"
            w="100%"
            h="250"
            backgroundImage={backgroundImageUrl}
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            lineHeight="36px" fontStyle="normal" fontWeight="700"
        >
            <Heading as="h4" fontSize="24">{heading}</Heading>
            <Text fontSize="14">{text}</Text>
        </Stack>
    )
}