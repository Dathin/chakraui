import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import React, { useEffect } from "react";
import { Cities } from "../../components/Cities";
import { ContnentSlug } from "../../components/ContentSlug";
import { ContnentContent } from "../../components/ContnentContent/ContnentContent";
import { useHeaderContext } from "../../contexts/HeaderContext";

interface ContnentProps {
  continentImage: string;
  continentName: string;
  descriptionText: string;
  numberOfCountries: number,
  numberOfLanguages: number,
  top100Cities: {
      image: string,
      name: string,
      countryName: string,
      countryImage: string,
    }[]
  ,
}

export default function Contnent({continentImage, continentName, descriptionText, numberOfCountries, numberOfLanguages, top100Cities}: ContnentProps) {
  const {setBackUrl} = useHeaderContext();
  useEffect(() => setBackUrl('/'), [])
  console.log({continentImage, descriptionText, numberOfCountries, numberOfLanguages, top100Cities})
  return (
  <>
    <ContnentSlug backgroundImageUrl={continentImage} heading={continentName}/>
    <ContnentContent descriptionText={descriptionText} numberOfCountries={numberOfCountries} numberOfLanguages={numberOfLanguages} />
    <Cities top100Cities={top100Cities}/>
  </>
  );
}

const getPageDataByContinent = (continent: string): ContnentProps | undefined => {
  switch(continent){
    case 'europe':
      return {
        continentImage: "/europe.jpeg",
        continentName: "Europa",
        descriptionText: "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste",
        numberOfCountries: 12,
        numberOfLanguages: 33,
        top100Cities: [
          {
            image: "/rome.png",
            name: "Roma",
            countryName: "Itália",
            countryImage: "/defaulcountryavatar.png",
          },
          {
            image: "/amsterda.png",
            name: "Amsterdã",
            countryName: "Holanda",
            countryImage: "/defaulcountryavatar.png",
          },
          {
            image: "/prage.png",
            name: "Praga",
            countryName: "República Tcheca",
            countryImage: "/defaulcountryavatar.png",
          },
          {
            image: "/paris.png",
            name: "Paris",
            countryName: "França",
            countryImage: "/defaulcountryavatar.png",
          },
          {
            image: "/londom.png",
            name: "Londres",
            countryName: "Inglaterra",
            countryImage: "/defaulcountryavatar.png",
          },
        ],
      }
    case 'america':
      return {
        continentImage: "/america.jpeg",
        continentName: "America",
        descriptionText: "A Europa é, hue br",
        numberOfCountries: 12,
        numberOfLanguages: 33,
        top100Cities: [
          {
            image: "/rome.png",
            name: "Roma",
            countryName: "Itália",
            countryImage: "/defaulcountryavatar.png",
          },
          {
            image: "/amsterda.png",
            name: "Amsterdã",
            countryName: "Holanda",
            countryImage: "/defaulcountryavatar.png",
          },
          {
            image: "/prage.png",
            name: "Praga",
            countryName: "República Tcheca",
            countryImage: "/defaulcountryavatar.png",
          },
          {
            image: "/paris.png",
            name: "Paris",
            countryName: "França",
            countryImage: "/defaulcountryavatar.png",
          },
          {
            image: "/londom.png",
            name: "Londres",
            countryName: "Inglaterra",
            countryImage: "/defaulcountryavatar.png",
          },
        ],
      }
    case 'asia':
      return {
        continentImage: "/asia.jpeg",
        continentName: "Asia",
        descriptionText: "A Ásia é, ぁあぃ",
        numberOfCountries: 12,
        numberOfLanguages: 33,
        top100Cities: [
          {
            image: "/rome.png",
            name: "Roma",
            countryName: "Itália",
            countryImage: "/defaulcountryavatar.png",
          },
          {
            image: "/amsterda.png",
            name: "Amsterdã",
            countryName: "Holanda",
            countryImage: "/defaulcountryavatar.png",
          },
          {
            image: "/prage.png",
            name: "Praga",
            countryName: "República Tcheca",
            countryImage: "/defaulcountryavatar.png",
          },
          {
            image: "/paris.png",
            name: "Paris",
            countryName: "França",
            countryImage: "/defaulcountryavatar.png",
          },
          {
            image: "/londom.png",
            name: "Londres",
            countryName: "Inglaterra",
            countryImage: "/defaulcountryavatar.png",
          },
        ],
      }
    case 'africa':
      return {
        continentImage: "/africa.jpeg",
        continentName: "Africa",
        descriptionText: "A Africa é, muito loca",
        numberOfCountries: 12,
        numberOfLanguages: 33,
        top100Cities: [
          {
            image: "/rome.png",
            name: "Roma",
            countryName: "Itália",
            countryImage: "/defaulcountryavatar.png",
          },
          {
            image: "/amsterda.png",
            name: "Amsterdã",
            countryName: "Holanda",
            countryImage: "/defaulcountryavatar.png",
          },
          {
            image: "/prage.png",
            name: "Praga",
            countryName: "República Tcheca",
            countryImage: "/defaulcountryavatar.png",
          },
          {
            image: "/paris.png",
            name: "Paris",
            countryName: "França",
            countryImage: "/defaulcountryavatar.png",
          },
          {
            image: "/londom.png",
            name: "Londres",
            countryName: "Inglaterra",
            countryImage: "/defaulcountryavatar.png",
          },
        ],
      }
    case 'oceania':
      return {
        continentImage: "/oceania.jpeg",
        continentName: "Oceania",
        descriptionText: "A Oceania é, daora",
        numberOfCountries: 12,
        numberOfLanguages: 33,
        top100Cities: [
          {
            image: "/rome.png",
            name: "Roma",
            countryName: "Itália",
            countryImage: "/defaulcountryavatar.png",
          },
          {
            image: "/amsterda.png",
            name: "Amsterdã",
            countryName: "Holanda",
            countryImage: "/defaulcountryavatar.png",
          },
          {
            image: "/prage.png",
            name: "Praga",
            countryName: "República Tcheca",
            countryImage: "/defaulcountryavatar.png",
          },
          {
            image: "/paris.png",
            name: "Paris",
            countryName: "França",
            countryImage: "/defaulcountryavatar.png",
          },
          {
            image: "/londom.png",
            name: "Londres",
            countryName: "Inglaterra",
            countryImage: "/defaulcountryavatar.png",
          },
        ],
      }
    default:
      return;
  }
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [
    { params: { contnent: "europe" } },
    { params: { contnent: "america" } },
    { params: { contnent: "asia" } },
    { params: { contnent: "africa" } },
    { params: { contnent: "oceania" } },
  ],
  fallback: false,
});

export const getStaticProps: GetStaticProps<ContnentProps> = async (
  {params}: GetStaticPropsContext
) => {
  const contnent = String(params?.contnent);
  const contnentData = getPageDataByContinent(contnent);

  const oneDay = 60 * 60 * 24;
  return contnentData ? {
    props: contnentData,
    revalidate: oneDay,
  } : {
    redirect: {
      destination: '/',
      permanent: false,
    },
  }
};
