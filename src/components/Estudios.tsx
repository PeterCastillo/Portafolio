import { EstudiosContainer, EstudiosStyle, Title } from "../style/estudios";
import { Estudio as EstudioTypes } from "../types/estudio";
import { DiJavascript1, DiReact, DiGithubBadge, DiJava } from "react-icons/di";
import { SiTypescript, SiMicrosoftsqlserver } from "react-icons/si";
import { RiEnglishInput } from "react-icons/ri"
import Estudio from "./Estudio";

const grades: Array<EstudioTypes> = [
  {
    logo: "https://media.licdn.com/dms/image/C4E0BAQHEJeex8EY65A/company-logo_200_200/0/1546889844566?e=1689206400&v=beta&t=oMBAj4IcOUifuLw5LbJg8NyAiHxg4JDY-zR_BbCmIz0",
    estudioName: "Desarrollador Front-End",
    estudioEspefic: [
      { name: "JavaScript", logo: <DiJavascript1 /> },
      { name: "TypeScrit", logo: <SiTypescript /> },
      { name: "React", logo: <DiReact /> },
      { name: "GitHub", logo: <DiGithubBadge /> },
    ],
    fechaInicio: "2022",
    fechaFinal: "2022",
    estudioInfo: [
      "Desarrollar y estructurar proyectos propios con las tecnologias enseñadas.",
      "Realizar trabajos colaborativos mediante GitHub.",
      "Diseñar interfaces de usuario responsivas con enfoque en Mobile First. ",
    ],
    estudioWeb: "https://codigo.edu.pe/",
  },
  {
    logo: "https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/7027605/7027605-1594073079014-5624fa4eb5c6d.jpg",
    estudioName: "Ingenieria de Sistemas",
    estudioEspefic: [
      { name: "Java", logo: <DiJava /> },
      { name: "SQL Server", logo: <SiMicrosoftsqlserver /> },
    ],
    fechaInicio: "2019",
    fechaFinal: "2022",
    estudioInfo: [
      "Estructurar y crear base de datos relacional.",
      "Desarrollar pequeños sitemas utilizando Java.",
      "Normalizar Base de datos.",
    ],
    estudioWeb: "https://www.utp.edu.pe/",
  },
  {
    logo: "data:image/png;base64,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",
    estudioName: "Ingles",
    estudioEspefic: [{ name: "Ingles", logo: <RiEnglishInput/>}],
    fechaInicio: "2019",
    fechaFinal: "2021",
    estudioInfo: [
      "Practicar la fluides y entoncion.",
      "Realizar conversasiones y reportes en ingles.",
      "Crear presentaciones en Ingles.",
    ],
    estudioWeb: "https://www.icpna.edu.pe/",
  },
];

const Estudios = () => {
  return (
    <EstudiosStyle>
      <Title>Estudios</Title>
      <EstudiosContainer>
        {grades.map((item, index) => (
          <Estudio key={index} info={item} />
        ))}
      </EstudiosContainer>
    </EstudiosStyle>
  );
};

export default Estudios;
