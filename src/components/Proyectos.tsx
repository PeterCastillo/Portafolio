import { Container, ProyectosContainer, Title } from "../style/proyectosContainer";
import Proyecto from "./Proyecto";
import PokeApi from "../assets/PokeApi.jpeg";
import RickAPI from "../assets/RickApi.jpeg";
import PeliCorn from "../assets/PeliCorn.jpeg";
import CountryApi from "../assets/CountryApi.jpeg";
import {
  SiJavascript,
  SiReact,
  SiCss3,
  SiHtml5,
  SiTypescript,
  SiRedux,
  SiStyledcomponents,
  SiFirebase,
  SiSass,
} from "react-icons/si";

const ProyectosTodos = [
  {
    img: PokeApi,
    title: "PokeApi",
    info: "Desarrollada utilizando la API de Pokemon GO, implementando Redux para la como la comunicancon entre componente.",
    tecs: [<SiReact />, <SiTypescript />, <SiRedux />, <SiStyledcomponents />],
    deploy: "https://pokeapi-gold-five.vercel.app/",
    codigo: "https://github.com/PeterCastillo/PokeApi",
  },
  {
    img: RickAPI,
    title: "Rick & Morty Client",
    info: "Desarrollada utilizando la API de Rick&Morty, implementando Redux para mejorar el performance de la pagina al usar FireBase.",
    tecs: [
      <SiReact />,
      <SiJavascript />,
      <SiRedux />,
      <SiStyledcomponents />,
      <SiFirebase />,
    ],
    deploy: "https://rickandmortyclient.vercel.app/",
    codigo: "https://github.com/PeterCastillo/Rick-MortyClient",
  },
  {
    img: PeliCorn,
    title: "PeliCorn",
    info: "Desarrollada utilizando la API de TheMovieDB, enfocada en ser una pagina SPA mediante eventos en el hash.",
    tecs: [<SiJavascript />, <SiCss3 />, <SiHtml5 />],
    deploy: "https://petercastillo.github.io/PelicCorn.github.io/",
    codigo: "https://github.com/PeterCastillo/PelicCorn.github.io",
  },
  {
    img: CountryApi,
    title: "CountryApi",
    info: "Primera pagina desarrollada en React, utilizando la API de CountryAPI y SASS para los estilar la pagina.",
    tecs: [<SiReact />, <SiJavascript />, <SiSass />],
    deploy: "https://countryapi-navy.vercel.app/",
    codigo: "https://github.com/PeterCastillo/CountryAPI",
  },
];

const Proyectos = () => {
  return (
    <Container id="proyectos">
        <Title>Proyectos</Title>
      <ProyectosContainer>
        {ProyectosTodos.map((item, index) => (
          <Proyecto key={index} info={item} />
        ))}
      </ProyectosContainer>
    </Container>
  );
};

export default Proyectos;
