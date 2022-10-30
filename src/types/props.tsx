export interface RedesContactoProps {
    type: string
}
export interface Proyecto {
    img: string
    title: string
    info: string
    tecs: Array<JSX.Element>
    deploy: string
    codigo: string
}

export interface ProyectoProps {
    info: Proyecto
}