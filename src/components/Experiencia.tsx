import {
  Contenedor,
  ExperienciaContainer,
  ExperienciaItem,
  Tecs,
  Title,
  Type,
} from "../style/experiencia";
import {
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiSwagger,
  SiFastapi,
} from "react-icons/si";
import { FaReact, FaSass, FaPython } from "react-icons/fa";

const experiencia = [
  {
    puesto: "Frontend Developer",
    empresa: "CeatecSoft",
    link: "https://ceatec.com.pe/",
    descripcion: [
      "Migración de Sistema ERP Contable a la web.",
      "Resolución de necesidades del negocio enfocadas en dar la mejor experiencia a los usuarios.",
      "Colaboración estrecha con los desarrolladores de Back-end para mejorar la integración de la API y los patrones de acceso a los datos.",
    ],
    date: {
      inicio: "Noviembre 2022",
      fin: "Febrero 2023",
    },
    stack: [
      {
        name: "React",
        logo: <FaReact />,
      },
      {
        name: "Next",
        logo: <SiNextdotjs />,
      },
      {
        name: "TypeScript",
        logo: <SiTypescript />,
      },
      {
        name: "Sass",
        logo: <FaSass />,
      },
      {
        name: "Python",
        logo: <FaPython />,
      },
      {
        name: "FastAPI",
        logo: <SiFastapi />,
      },
      {
        name: "MongoDB",
        logo: <SiMongodb />,
      },
      {
        name: "Swagger",
        logo: <SiSwagger />,
      },
    ],
  },
];

const Experiencia = () => {
  return (
    <Contenedor>
      <Title>Experiencia</Title>
      <ExperienciaContainer>
        {experiencia.map((item, index) => (
          <ExperienciaItem>
            <Type>
              <div>
                <span>{item.puesto}</span>
                <span>{`(${item.date.inicio} - ${item.date.fin})`}</span>
              </div>
              <a href={item.link}>@{item.empresa}</a>
            </Type>
            <ul>{item.descripcion.map((item,i) => <li key={i}>{item}</li>)}</ul>
            <Tecs>
                {
                    item.stack.map((tec,i) => <div><span>{tec.name}</span>{tec.logo}</div>)
                }
            </Tecs>
          </ExperienciaItem>
        ))}
      </ExperienciaContainer>
    </Contenedor>
  );
};
export default Experiencia;
