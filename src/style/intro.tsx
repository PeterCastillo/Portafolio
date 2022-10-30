import styled from "styled-components";
import { RedesContactoProps, RedesProps } from "../types/propsStyle";
import { Link } from "react-router-dom"

export const IntroContainer = styled.div`
    align-items: center;
    padding: 5rem 0rem;
    @media screen and (max-width:900px){
        padding: 3rem 0rem;
    }
`

export const SeccionIntro = styled.div`
    max-width: 1300px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 0rem 1rem;
    margin: auto;
    font-family: 'Montserrat', sans-serif;
    @media screen and (max-width:900px){
        flex-direction: column-reverse;
        justify-content: center;
        gap: 1rem;
        padding: 1rem;
    }
`
export const IntroInfo = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
    gap: 1.2rem;
    flex: 4 1 20rem;
    color: rgb(127, 141, 170);
    animation: fade 1.5s ease;
    @media screen and (max-width:900px){
        flex: 0 1 10rem;
        text-align: center;
    }
    @keyframes fade {
        0%{
            transform: translateX(-60px);
            opacity: 0.1;
        }
        100% {
            transform: translateX(0px);
            opacity: 1;
        }
    }
`
export const Saludo = styled.span`
`
export const Colored = styled.span`
    color: rgb(25, 85, 188);
    font-weight: bold;
` 
export const Do = styled.span`
`
export const Redes = styled.div<RedesContactoProps>`
    font-size: 3rem;
    display: flex;
    gap: 0.5rem;
    align-self: ${props => props.type};
    @media screen and (max-width:900px){
        align-self: center;
    }
`

export const IntroImg = styled.div`
    max-width: 23rem;
    max-height: 35rem;
    padding: 0.5rem;
    position: relative;
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background-color: rgb(233, 233, 233);
    animation: fadeFoto 1.5s ease;
    &::before {
        content: '';
        position: absolute;
        width: 900px;
        height: 900px;
        background-image: conic-gradient(transparent,transparent,transparent,rgb(25, 85, 188));
        animation: border 4s  linear infinite;
    }
    &::after {
        content: '';
        position: absolute;
        width: 900px;
        height: 900px;
        background-image: conic-gradient(transparent,transparent,transparent,rgb(25, 85, 188));
        animation: border 4s linear infinite;
        animation-delay: -2s;
    }
    @keyframes border {
            0% {
                transform: rotate(0deg);
            } 
            100% {
                transform: rotate(360deg);
            }
        }
    @media screen and (max-width:900px){
        flex: 0 1 30rem;
    }
    @keyframes fadeFoto {
        0%{
            transform: translateX(60px);
            opacity: 0.1;
        }
        100% {
            transform: translateX(0px);
            opacity: 1;
        }
    }
`
export const ImgIntro = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.5rem;
    z-index: 25;
`
export const Red = styled.a<RedesProps>`
    background-color: black;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1.8rem;
    width: 1.8rem;
    padding: 0.7rem;
    background-color: ${props => props.back};
    color: ${props => props.color};
    cursor: pointer;
    transition: all 200ms ease;
    &:hover {
        -webkit-box-shadow: 0px 0px 13px 0px ${props => props.back};
        -moz-box-shadow: 0px 0px 13px 0px ${props => props.back};
        box-shadow: 0px 0px 13px 0px ${props => props.back};
    }
`

export const Contact = styled(Link)`
    border: none;
    background-color: rgb(25, 85, 188);
    padding: 0.8rem;
    color: white;
    font-weight: bold;
    border-radius: 0.5rem;
    max-width: 20rem;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    @media screen and (max-width:900px){
        align-self: center;
        padding: 0.8rem 1.5rem;
    }
    &:hover {
        -webkit-box-shadow: 0px 0px 13px 0px rgba(25, 85, 188);
        -moz-box-shadow: 0px 0px 13px 0px rgba(25, 85, 188);
        box-shadow: 0px 0px 13px 0px rgba(25, 85, 188);
    }
`