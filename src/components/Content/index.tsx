import { Divider, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { Topic } from "../Topic";

export function Content() {
  return (
    <>
    <Flex width="100%" justifyContent="center">
      <Flex wrap="wrap" w="75%" justifyContent="center">
        <Topic width="50%" topicName="vida noturna" />
        <Topic width="50%" topicName="praia" />
        <Topic width="50%" topicName="moderno" />
        <Topic width="50%" topicName="clássico" />
        <Topic width="50%" topicName="e mais..." />
        <Flex width="75%" justifyContent="center">
          <Divider pt={9} w="25%" />
        </Flex>
        <Heading textAlign="center" pt={9} as="h2" fontStyle="normal" fontWeight="500" fontSize="20px" lineHeight="30px" color="gray.200">Vamos nessa?<br /> Então escolha seu continente</Heading>
      </Flex>
    </Flex>
    </>
  );
}
