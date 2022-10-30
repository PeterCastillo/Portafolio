import styled from "styled-components";
import { ContractoIntroProps } from "../types/propsStyle";

export const ContactoContainer = styled.div`
    font-family: 'Montserrat', sans-serif;
    margin-top: 4rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 6rem;
`

export const ContactoIntro = styled.div<ContractoIntroProps>`
    display: flex;
    align-items: center;
    max-width: 1300px;
    margin: auto;
    flex-wrap: wrap;
    flex-direction: ${props => props.type};
`
export const  IntroImg = styled.div`
    flex: 1 1 25rem;
`
export const IntroInfo = styled.div`
    flex:  1 1 25rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`
export const Title = styled.span`
    align-self: center;
    font-size: 2rem;
    font-weight: bold;
    color: rgb(52,52,52);
`
export const Info = styled.p`
    align-self: center;
    text-align: center;
    width: 80%;
    font-size: 1.3rem;
    color: rgb(127,141,170);
    padding: 0rem;
    margin: 0rem;
`
export const BtnCV = styled.button`
    align-self: center;
    border: none;
    background-color: rgb(25, 85, 188);
    padding: 0.8rem;
    color: white;
    font-weight: bold;
    border-radius: 0.5rem;
    max-width: 20rem;
    font-size: 1.3rem;
    cursor: pointer;
`
export const IntroAboutInfo = styled.div`
    flex: 1 1 25rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

/*********************/


export const AboutSvg = styled.div`
    
`
export const AboutInfo = styled.div`
    
`
export const TitleAbout = styled.span`
    
`
export const AboutDetails = styled.p`
    
`