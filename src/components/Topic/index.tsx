import { Box, Center, Heading, VStack } from "@chakra-ui/react";
import React, { ElementType } from "react";
import { YellowElipse } from "../YellowElipse";

interface TopicProps {
  topicName: string;
  icon?: ElementType;
}

export function Topic({ topicName, icon }: TopicProps) {
    const headingElement = <Heading
    as="h3"
    color="gray.200"
    fontSize="18px"
    fontStyle="normal"
    fontWeight="500"
    pl={icon ? 0 : 2}
  >
    {topicName}
  </Heading>

  return icon ? (
    <VStack pt={5}>
      <YellowElipse />
      {headingElement}
    </VStack>
  ) : (
    <Center pt={5}>
      <YellowElipse />
      {headingElement}
    </Center>
  );
}
