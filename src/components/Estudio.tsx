import { EstudioDate, EstudioDetails, EstudioEstudio, EstudioInfo, EstudioList, EstudioLogo, EstudioPlace, EstudioSpecificInfo, EstudioStyle, EstudioThing, EstudioType, EstudioWeb, Fecha, ImgEstudio } from "../style/estudio"
import { EstudioProps } from "../types/estudio"

const Estudio = ({ info }:EstudioProps) =>{

    return (
        <EstudioStyle>
            <EstudioPlace>
                <EstudioLogo><ImgEstudio src={info.logo} alt={info.estudioName} /></EstudioLogo>
            </EstudioPlace>
            <EstudioInfo>
                <EstudioDetails>
                    <EstudioDate>
                        <EstudioEstudio>{info.estudioName}</EstudioEstudio>
                        <Fecha>
                            <span>{info.fechaInicio}</span>
                            <span>-</span>
                            <span>{info.fechaFinal}</span>
                        </Fecha>
                    </EstudioDate>
                    <EstudioType>{info.estudioEspefic}</EstudioType>
                </EstudioDetails>
                <EstudioSpecificInfo>
                    <EstudioList>
                        {
                            info.estudioInfo.map((item,index) => (
                                <EstudioThing key={index}>- {item}</EstudioThing>
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