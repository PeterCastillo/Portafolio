import styled from "styled-components";

export const EstudioStyle = styled.div`
    display: flex;
    max-width: 1300px;
    margin: auto;
    margin-bottom: 2rem;
    gap: 2rem;
    @media screen and (max-width:900px){
        flex-direction: column;
    }
`
export const EstudioPlace = styled.div`
    align-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    padding: 0.1rem;
    background-color: rgb(25, 85, 188);
    -webkit-box-shadow: 0px 0px 10px 0px rgb(25, 85, 188);
    -moz-box-shadow: 0px 0px 10px 0px rgb(25, 85, 188);
    box-shadow: 0px 0px 10px 0px rgb(25, 85, 188); 
    cursor: pointer;
    transition: all 300ms ease;
    &:hover {
        -webkit-box-shadow: 0px 0px 25px 0px rgb(25, 85, 188);
        -moz-box-shadow: 0px 0px 25px 0px rgb(25, 85, 188);
        box-shadow: 0px 0px 25px 0px rgb(25, 85, 188);
    }

`
export const  ImgEstudio = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: contain;
`

export const EstudioInfo = styled.div`
    flex: 1 1 20rem;
    display: flex;
    flex-direction: column;
    background-color: rgb(25, 85, 188);
    padding: 0.15rem;
    border-radius: 0.5rem;
    -webkit-box-shadow: 0px 0px 10px 0px rgb(25, 85, 188);
    -moz-box-shadow: 0px 0px 10px 0px rgb(25, 85, 188);
    box-shadow: 0px 0px 10px 0px rgb(25, 85, 188);
    transition: all 300ms ease;
    &:hover {
        -webkit-box-shadow: 0px 0px 25px 0px rgb(25, 85, 188);
        -moz-box-shadow: 0px 0px 25px 0px rgb(25, 85, 188);
        box-shadow: 0px 0px 25px 0px rgb(25, 85, 188);
    }
    @media screen and (max-width:900px){
        flex: 1 1 10rem;
    }
`
export const EstudioLogo = styled.div`
    width: 12rem;
    height: 12rem;
    border-radius: 50%;
    padding: 1rem;
    background-color: white;
`

export const EstudioDetails = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1.1rem;
    gap: 0.5rem;
    padding: 0.8rem;
    color: white;
`
export const EstudioType = styled.span`
    
`
export const EstudioDate = styled.div`
     display: flex;
     justify-content: space-between;
     align-items: center;
`
export const EstudioEstudio = styled.span`
    font-size: 1.5rem;
`

export const EstudioSpecificInfo =  styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    background-color: white;
    border-radius: 0.5rem;
`

export const EstudioList = styled.ul`
    margin: 0rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0rem;
`
export const EstudioWeb = styled.a`
    font-size: 1.1rem;
    align-self: flex-end;
    width: 15rem;
    padding: 0.5rem 0rem;
    cursor: pointer;
    border: none;
    border-radius: 0.5rem;
    background-color: rgb(25, 85, 188);
    color: white;
    text-align: center;
    text-decoration: none;
`
export const EstudioThing = styled.li`
    list-style: none;
    font-size: 1.1rem;
    color: rgb(127,141,170);
`
export const Fecha = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;
    max-width: 7rem;
    @media screen and (max-width:900px) {
        flex-direction: column-reverse;
    }
`