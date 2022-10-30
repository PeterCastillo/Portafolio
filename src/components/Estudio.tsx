import { EstudioDate, EstudioDetails, EstudioEstudio, EstudioInfo, EstudioList, EstudioLogo, EstudioPlace, EstudioSpecificInfo, EstudioStyle, EstudioThing, EstudioType, EstudioWeb, ImgEstudio } from "../style/estudio"
import { EstudioProps } from "../types/estudio"

const Estudio = ({ info }:EstudioProps) =>{

    return (
        <EstudioStyle>
            <EstudioPlace>
                <EstudioLogo><ImgEstudio src={info.logo} alt="" /></EstudioLogo>
            </EstudioPlace>
            <EstudioInfo>
                <EstudioDetails>
                    <EstudioDate>
                        <EstudioEstudio>{info.estudioName}</EstudioEstudio>
                        <span>{info.estudioDate}</span>
                    </EstudioDate>
                    <EstudioType>{info.estudioEspefic}</EstudioType>
                </EstudioDetails>
                <EstudioSpecificInfo>
                    <EstudioList>
                        {
                            info.estudioInfo.map(item => (
                                <EstudioThing>- {item}</EstudioThing>
                            ))
                        }
                    </EstudioList>
                    <EstudioWeb href={info.estudioWeb} target="_blank">Visit Website</EstudioWeb>
                </EstudioSpecificInfo>  
            </EstudioInfo>
        </EstudioStyle>
    )
}

export default Estudio