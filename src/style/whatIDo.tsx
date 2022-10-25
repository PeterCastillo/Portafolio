import styled from "styled-components";
import { TecProps } from "../types/propsStyle";

export const Tecnologies = styled.div`
    display: flex;
    flex-wrap: wrap;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(6rem,1fr));
    gap: 1rem;
`

export const IDO = styled.div`
    font-family: 'Montserrat', sans-serif;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: royalblue;
`
export const IDOTitle = styled.h1`
    text-align: center;
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
    max-width: 1200px;
    margin: auto;
    background-color: green;
    @media screen and (max-width:900px) {
        flex-direction: column;
    }
`
export const Svg = styled.div`
    background-color: red;
    /* flex: 1 1 20rem;
    display: flex;
    align-items: center;
    justify-content: center; */
    width: 600px;
    height: 600px;
`
export const  RD = styled.radialGradient`
    
`

export const Float = styled.g`
    animation: flotante 6s infinite;
    @keyframes flotante {
        0% {
            transform: translateY(0px) scale(1.1);
        }
        50% {
            transform: translateY(-5px) scale(1);
        }
        100% {
            transform: translateY(0px) scale(1.1);
        }
    }
`

export const WhatInfo = styled.div`
    flex: 1 1 10rem;
    display: flex;
    gap: 2rem;
    flex-direction: column;
`

export const Do = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 0rem;
    font-size: 1.5rem;
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
    font-size: 1.8rem;
    font-weight: bold;
`