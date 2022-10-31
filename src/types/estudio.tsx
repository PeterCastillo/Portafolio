export interface EstudioProps {
    info: Estudio
}


export interface Estudio {
    logo: string
    estudioName: string
    estudioEspefic: string
    estudioInfo: Array<string>,
    estudioWeb:string
    fechaInicio: string
    fechaFinal: string
}

