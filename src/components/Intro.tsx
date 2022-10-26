import peter from "../assets/Peter.jpg"
import { Colored, Contact, Do, ImgIntro, IntroContainer, IntroImg, IntroInfo, Red, Redes, Saludo, SeccionIntro } from "../style/intro"
import { FaGithub , FaLinkedinIn  } from 'react-icons/fa'
import { SiGmail  } from 'react-icons/si'

const Intro = () => {
    return (
        <IntroContainer>
            <SeccionIntro>
                <IntroInfo>
                    <Saludo>Hello</Saludo>
                    <span>Soy<Colored> Peter Castillo.</Colored></span>
                    <span><Colored>Frontend Developer </Colored>in love with JavaScript and<Colored> React.</Colored></span>
                    <Do>Always learning🤓📚.</Do>
                    <Redes>
                        <Red color="white" back="rgb(0,0,0)"><FaGithub/></Red>
                        <Red color="white" back="rgb(25, 85, 188)"><FaLinkedinIn/></Red>
                        <Red color="white" back="rgb(250,0,0)"><SiGmail/></Red>
                    </Redes>
                    <Contact to={"/Contacto"}>Contactame</Contact>
                </IntroInfo>
                <IntroImg>
                    <ImgIntro src={peter} alt="" />
                </IntroImg>
            </SeccionIntro>
        </IntroContainer>
    )
}

export default Intro