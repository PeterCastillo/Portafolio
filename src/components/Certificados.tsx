import { CertificadosContainer, CertificadosStyle, Title } from "../style/certificados"
import { CertificadoI } from "../types/certificado"
import Certificado from "./Certificado"

const Cert:Array<CertificadoI> = [
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBa9YBLIaXxppdKPPHyS5iAXTIhejY1UfPj0EmV3t-6xASNwDWr8nW2qnbynbMew8AYvY&usqp=CAU",
        type: "Front-End",
        tecs: [
            "JavaScript",
            "ReactJS",
            "TypeScript"
        ]
    }
]

const Cerftificados = () => {
    return (
        <CertificadosStyle>
            <Title>Certificados</Title>
            <CertificadosContainer>
                {
                    Cert.map((item,index) => (
                        <Certificado key={index} info={item}/>
                    ))
                }
            </CertificadosContainer>
        </CertificadosStyle>
    )
}

export default Cerftificados