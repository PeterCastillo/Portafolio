import peter from "../assets/IntroFoto.jpeg";
import {
  Colored,
  Foto,
  IntroContainer,
  IntroInfo,
  RedBtn,
  RedesBtns,
  SeccionIntro,
  Text,
} from "../style/intro";

import { FiGithub } from "react-icons/fi";
import { SiGmail } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import Estudios from "./Estudios";
import Habilidades from "./Habilidades";
import Proyectos from "./Proyectos";
import Experiencia from "./Experiencia";


const Intro = () => {
  return (
    <IntroContainer>
      <SeccionIntro>
        <IntroInfo>
          <span>
            <Colored>Hola, qué tal?</Colored>
          </span>
          <Text>
            Soy Peter Castillo desarrollador Frontend y Backend, apasionado por
            la tecnología y la programación. Soy una persona en constante
            estudio en el campo del software. Dispuesto a trabajar en equipo,
            colaborar, aprender y ayudar en todo lo posible.
          </Text>
          {/* <Do>Constantemente aprendiendo🤓📚.</Do> */}
          <RedesBtns>
            <div>
              <span>Ver Curriculum</span> <CgNotes />
            </div>
            <RedBtn href="">
              <span>Github</span> <FiGithub />
            </RedBtn>
            <RedBtn href="">
              <span>Linkedin</span> <FaLinkedinIn />
            </RedBtn>
            <RedBtn href="">
              <span>Gmail</span> <SiGmail />
            </RedBtn>
          </RedesBtns>
        </IntroInfo>
        <Foto>
          <img src={peter} alt="Peter Castillo" />
        </Foto>
      </SeccionIntro>
      <Experiencia/>
      <Estudios/>
      <Habilidades/>
      <Proyectos/>
    </IntroContainer>
  );
};

export default Intro;
