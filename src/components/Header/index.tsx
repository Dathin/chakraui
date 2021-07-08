import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Image, Flex, Center, Box, Link } from "@chakra-ui/react";
import React from "react";
import { useHeaderContext } from "../../contexts/HeaderContext";

export function Header() {
  const {backUrl} = useHeaderContext();

  return (
    <Flex justify="center" w="100vw" bgColor="white.100">
      <Flex justify={backUrl ? 'space-between' : 'center'} p="3" maxW="90%" w="100%" >
        {backUrl && (
          <Link href={backUrl}>
            <Center>
              <ChevronLeftIcon w={["16px", "32px"]} h={["16px", "32px"]} />
            </Center>
          </Link>
        )}
        <Center>
          <Image
            src="/worldtriplogo.svg"
            alt="Worldtrip Logo"
            h={["20px", "45px"]}
          />
        </Center>
        <Box />
      </Flex>
    </Flex>
  );
}
