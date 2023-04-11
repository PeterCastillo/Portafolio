export interface EstudioProps {
    info: Estudio
}


export interface Estudio {
    logo: string
    estudioName: string
    estudioEspefic: {
        name: string
        logo: JSX.Element;
    }[]
    estudioInfo: Array<string>,
    estudioWeb:string
    fechaInicio: string
    fechaFinal: string
}

