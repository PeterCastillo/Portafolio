import { CertificadoInfo, CertificadoLogo, CertificadoStyle, CertificadoThings, CertificadoTitle, LogoImg } from "../style/certificado"
import { ImgEstudio } from "../style/estudio"
import { CertificadoProps } from "../types/certificado"

const Certificado = ({ info }:CertificadoProps) => {
    return (
        <CertificadoStyle>
            <CertificadoLogo>
                <LogoImg><ImgEstudio src={info.img} alt={info.type} /></LogoImg>
            </CertificadoLogo>
            <CertificadoInfo>
                <CertificadoTitle>{info.type}</CertificadoTitle>
                <CertificadoThings>{info.tecs.join(" + ")}</CertificadoThings>
            </CertificadoInfo>
        </CertificadoStyle>
    )
}

export default Certificado