import { Red, Redes } from "../style/intro"
import { FaGithub , FaLinkedinIn  } from 'react-icons/fa'
import { SiGmail  } from 'react-icons/si'
import { RedesContactoProps } from "../types/props"

export const RedesContacto = ({ type }:RedesContactoProps) => {
    return (
        <Redes type={type}>
            <Red href="https://github.com/PeterCastillo" target={"_blank"} color="white" back="rgb(0,0,0)"><FaGithub/></Red>
            <Red href="https://www.linkedin.com/in/peter-castillo-9b4022234/" target={"_blank"} color="white" back="rgb(25, 85, 188)"><FaLinkedinIn/></Red>
            <Red href="mailto:peterjackcc@gmail.com" target={"_blank"} color="white" back="rgb(250,0,0)"><SiGmail/></Red>
        </Redes>
    )
}

export default RedesContacto