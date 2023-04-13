import peter from "../assets/IntroFoto.jpeg";
import {
  Colored,
  Cv,
  Foto,
  IntroContainer,
  IntroInfo,
  RedBtn,
  RedesBtns,
  SeccionIntro,
  Text,
} from "../style/intro";
import CV from "../assets/CV.pdf";

import { FiGithub } from "react-icons/fi";
import { SiGmail } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";

const Intro = () => {
  return (
    <IntroContainer id="contact">
      <SeccionIntro>
        <IntroInfo>
          <span>
            <Colored>Hola, qué tal?</Colored>
          </span>
          <Text>
            Soy Peter Castillo desarrollador Frontend y Backend, apasionado por
            la programación y la tecnología. Soy una persona siempre en busca de
            nuevas oportunidades de aprendizaje en el campo del software.
            Dispuesto a trabajar en equipo, colaborar, aprender y ayudar en todo
            lo posible.
          </Text>
          {/* <Do>Constantemente aprendiendo🤓📚.</Do> */}
          <RedesBtns>
            <Cv href={CV} download>
              <span>Ver Curriculum</span> <CgNotes />
            </Cv>
            <RedBtn href="https://github.com/PeterCastillo" target="_blank">
              <span>Github</span> <FiGithub />
            </RedBtn>
            <RedBtn
              href="https://www.linkedin.com/in/peter-castillo-9b4022234/"
              target="_blank"
            >
              <span>Linkedin</span> <FaLinkedinIn />
            </RedBtn>
            <RedBtn
              href="https://mail.google.com/mail/?view=cm&to=peterjackcc@gmail.com"
              target="_blank"
            >
              <span>Gmail</span> <SiGmail />
            </RedBtn>
          </RedesBtns>
        </IntroInfo>
        <Foto>
          <img src={peter} alt="Peter Castillo" />
        </Foto>
      </SeccionIntro>
    </IntroContainer>
  );
};

export default Intro;
