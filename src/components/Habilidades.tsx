import {
  HabilidadItem,
  HabilidadesContainer,
  HabilidadesList,
  Header,
  Skills,
  Title,
} from "../style/habilidades";
import { IHabilidad } from "../types/habilidades";
import { FaCss3Alt, FaHtml5, FaSass, FaReact, FaNodeJs } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiStyledcomponents, SiExpress } from "react-icons/si";
import {
  SiRedux,
  SiReduxsaga,
  SiTypescript,
  SiNextdotjs,
  SiPrisma,
  SiMongodb,
  SiMysql,
  SiSwagger,
  SiPostman,
} from "react-icons/si";
import { HiBarsArrowUp } from "react-icons/hi2";
import { DiNpm } from "react-icons/di"
import { useState } from "react";

const habilidades: Array<IHabilidad> = [
  {
    nombre: "FrontEnd",
    habilidades: [
      {
        name: "HTML",
        logo: <FaHtml5 />,
      },
      {
        name: "CSS",
        logo: <FaCss3Alt />,
      },
      {
        name: "SASS",
        logo: <FaSass />,
      },
      {
        name: "JavaScript",
        logo: <DiJavascript1 />,
      },
      {
        name: "React",
        logo: <FaReact />,
      },
      {
        name: "Style Components",
        logo: <SiStyledcomponents />,
      },
      {
        name: "TypeScript",
        logo: <SiTypescript />,
      },
      {
        name: "Redux",
        logo: <SiRedux />,
      },
      {
        name: "Redux Saga",
        logo: <SiReduxsaga />,
      },
      {
        name: "NextJs",
        logo: <SiNextdotjs />,
      },
      {
        name: "HTML",
        logo: <FaHtml5 />,
      },
    ],
  },
  {
    nombre: "BackEnd",
    habilidades: [
      {
        name: "Node",
        logo: <FaNodeJs />,
      },
      {
        name: "Express",
        logo: <SiExpress />,
      },
      {
        name: "Primsa",
        logo: <SiPrisma />,
      },
      {
        name: "MySql",
        logo: <SiMysql />,
      },
      {
        name: "Mongoose",
        logo: <SiMongodb />,
      },
      {
        name: "Swagger",
        logo: <SiSwagger />,
      },
      {
        name: "Postman",
        logo: <SiPostman />,
      },
    ],
  },
  {
    nombre: "Herramientas",
    habilidades: [
      {
        name: "GitHub",
        logo: <FaNodeJs />,
      },
      {
        name: "NPM",
        logo: <DiNpm />,
      },
    ],
  },
];
const Habilidad = ({ info }: { info: IHabilidad }) => {
  const [showItems, setShowItems] = useState(true);
  return (
    <HabilidadItem showItems={showItems}>
      <Header showItems={showItems} onClick={() => setShowItems(!showItems)}>
        <span>{info.nombre}</span>
        <HiBarsArrowUp />
      </Header>
      <Skills showItems={showItems}>
        {info.habilidades.map((item, index) => {
          return (
            <div key={index}>
              <span>{item.name}</span>
              {item.logo}
            </div>
          );
        })}
      </Skills>
    </HabilidadItem>
  );
};

const Habilidades = () => {
  return (
    <HabilidadesContainer id="habilidades">
      <Title>Habilidades</Title>
      <HabilidadesList>
        {habilidades.map((item, index) => (
          <Habilidad info={item} key={index} />
        ))}
      </HabilidadesList>
    </HabilidadesContainer>
  );
};

export default Habilidades;
