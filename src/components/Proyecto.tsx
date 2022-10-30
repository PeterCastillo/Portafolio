import { Img, Info, Links, ProyectImg, ProyectoInfo, ProyectStyle, ProyectTecs, Tec, Title } from "../style/proyecto"
import { TbBrandReactNative } from "react-icons/tb"
import { ProyectoProps } from "../types/props"
import { FaGithubSquare , FaExternalLinkSquareAlt } from "react-icons/fa"

const Proyecto = ({ info }:ProyectoProps) => {
    return (
        <div>
            <ProyectStyle>
                <ProyectImg><Img src={info.img} alt={info.title} /></ProyectImg>
                <ProyectoInfo>
                    <Title>{info.title}</Title>
                    <Info>{info.info}</Info>
                    <ProyectTecs>
                        {info.tecs.map(item => (
                            <Tec>
                                {item}
                            </Tec>
                        ))}
                    </ProyectTecs>
                    <Links>
                        <Tec href={info.deploy} target={"_blank"}><FaExternalLinkSquareAlt/></Tec>
                        <Tec href={info.codigo} target={"_blank"}><FaGithubSquare/></Tec>
                    </Links>
                </ProyectoInfo>
            </ProyectStyle>
        </div>
    )
}

export default Proyecto