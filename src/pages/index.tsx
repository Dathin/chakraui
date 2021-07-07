import { Box } from "@chakra-ui/react";
import React from "react";
import { Banner } from '../components/Banner'
import { Content } from "../components/Content";
import { Contnent } from "../components/Contnent";

export default function Home() {
  return (
    <>
      <Banner />
      <Content />
      <Contnent />
    </>
  );
}
