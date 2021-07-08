import { Box } from "@chakra-ui/react";
import React from "react";
import { Banner } from '../components/Banner'
import { HomeContent } from "../components/HomeContent";
import { Contnent } from "../components/Contnent";

export default function Home() {
  return (
    <>
      <Banner />
      <HomeContent />
      <Contnent />
    </>
  );
}
