import { Divider, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { Topic } from "../Topic";

export function Content() {
  return (
    <Flex w="100%" justifyContent="center" flexWrap="wrap" pt={6}>
      <Flex w="75%" justifyContent="center" flexWrap="wrap">
        <Flex w="100%" justifyContent="space-between">
          <Topic topicName="vida noturna" />
          <Topic topicName="praia" />
        </Flex>
        <Flex w="100%" justifyContent="space-between">
          <Topic topicName="moderno" />
          <Topic topicName="clássico" />
        </Flex>
        <Flex w="100%" justifyContent="center">
          <Topic topicName="e mais..." />
        </Flex>
        <Divider pt={7} w="16%" />
      </Flex>
      <Heading
          textAlign="center"
          pt={7}
          as="h2"
          fontStyle="normal"
          fontWeight="500"
          fontSize="20px"
          lineHeight="30px"
          color="gray.200"
        >
          Vamos nessa?
          <br /> Então escolha seu continente
        </Heading>
    </Flex>
  );
}