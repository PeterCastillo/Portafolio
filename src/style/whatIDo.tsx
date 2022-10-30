import styled from "styled-components";
import { TecProps } from "../types/propsStyle";

export const Tecnologies = styled.div`
    display: flex;
    flex-wrap: wrap;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(6rem,1fr));
    place-content: center;
    gap: 0.5rem;
`

export const IDO = styled.div`
    font-family: 'Montserrat', sans-serif;
    padding: 2rem;
    animation: oppa 1.5s ease;
    max-width: 1300px;
    margin: auto;
    @keyframes oppa {
        0%{
            transform: translateY(100px);
            opacity: 0;
        }
    }
    @media screen and (max-width:900px) {
        gap: 0.5rem;
    }
`
export const IDOTitle = styled.h1`
    text-align: center;
    font-weight: bold;
    font-size: 2rem;
    color: rgb(52, 52, 52);
`

export const Tec = styled.span<TecProps>`
    display: inline-block;
    font-size: ${props => props.size};
    color: ${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Head = styled.g`
    animation: rotate 2s infinite;
    @keyframes rotate {
        0%{
            transform: translateX(0px);;
        }
        50%{
            transform: translateX(2px);
        }
        100%{
            transform: translateX(0px);;
        }
    }
`

export const EyeB = styled.g`
    animation: chiclin  3s  infinite forwards;
    @keyframes chiclin {
        0%{
            transform: translateY(0px);
        }
        40%{
            transform: translateY(5px);
        }
        50%{
            transform: translateY(0px);
        }
    }
`

export const What = styled.div`
    display: flex;
    margin: auto;
    gap: 1rem;
    @media screen and (max-width:900px) {
        flex-direction: column;
    }
`
export const Svg = styled.div`
    flex: 4 1 30rem;
`
export const  RD = styled.radialGradient`
    
`

export const Float = styled.g`
    animation: flotante 6s infinite;
    @keyframes flotante {
        0% {
            transform: translateY(0px) scale(1.03);
        }
        50% {
            transform: translateY(-5px) scale(1);
        }
        100% {
            transform: translateY(0px) scale(1.03);
        }
    }
`

export const WhatInfo = styled.div`
    flex: 1 1 25rem;
    display: flex;
    gap: 2rem;
    flex-direction: column;
`

export const Do = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 0rem;
    font-size: 1.3rem;
    margin: 0rem;
    flex: 1 1 20rem;
`

export const I = styled.li`
    list-style: none;
    color: rgb(127, 141, 170);
    margin-top: 1rem;
`
export const Title = styled.span`
    align-self: center;
    font-size: 2rem;
    text-align: center;
    font-weight: bold;
    color: rgb(52, 52, 52);
`