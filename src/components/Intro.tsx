import peter from "../assets/Peter.jpg"
import { Colored, Contact, Do, ImgIntro, IntroContainer, IntroImg, IntroInfo, Saludo, SeccionIntro } from "../style/intro"
import RedesContacto from "./RedesContacto"

const Intro = () => {
    return (
        <IntroContainer>
            <SeccionIntro>
                <IntroInfo>
                    <Saludo>Hola</Saludo>
                    <span>Soy<Colored> Peter Castillo.</Colored></span>
                    <span><Colored>Frontend Developer </Colored> enfocado en JavaScript y<Colored> React.</Colored></span>
                    <Do>Constantemente aprendiendo🤓📚.</Do>
                    <RedesContacto type={""}/>
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