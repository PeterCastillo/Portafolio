import styled from 'styled-components'
import { ElementLinkProps, MenuProps } from '../types/propsStyle'
import { Link } from "react-router-dom"

export const NavContainer = styled.div`
    border-bottom: solid 4px rgb(127, 141, 170);
    background-color: white;
    font-family: 'Montserrat', sans-serif;
    animation: fateNav 1.5s ease;
    @keyframes fateNav {
        0%{
            transform: translateY(-4.5rem);
            opacity: 0;
        }
        100%{
            transform: translateY(0px);
        }
    }
`
export const  Navbar = styled.nav<MenuProps>`
    max-width: 1300px;
    display: flex;
    justify-content: space-between;
    max-height: 4.5rem;
    margin: auto;
    transition: all 250ms ease-in-out;
    @media screen and (max-width:680px){
        ${props => props.toggle && "max-height: 50rem;"}
        flex-direction: column;

    }
`

export const Nombre = styled.span`
    display: inline-block;
    font-size: 1.20rem;
    height: 4.5rem;
    display: flex;
    font-weight: bold;
    align-items: center;
    justify-content: center;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    color : rgb(25, 85, 188);
    color: white;
    text-shadow: 0 0 10px rgb(25, 85, 188), 0 0 10px rgb(25, 85, 188), 0 0 10px red, 0 0 10px rgb(25, 85, 188);
`
export const  Logo = styled.div`
    width: 4.5rem;
    height: 4.5rem;
`

export const  Img = styled.img`
    width: 100%;
    height: 100%;
    max-height: 20rem;
    object-fit: cover;
`

export const Nav = styled.ul<MenuProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.6rem;
    font-size: 1.20rem;
    @media screen and (max-width:680px) {
        /* ${props => !props.toggle && "transform: translateY(-100%)"}; */
        /* ${props => props.toggle && "transition: all 200ms ease-out;"}; */
        max-height: 0rem;
        overflow: hidden;
        transition: all 150ms ease-in-out;
        ${props => props.toggle && "max-height: 50rem;"}
        flex-direction: column;
        gap: 1rem;
        padding: 0rem 2rem;
        ${props => props.toggle && "padding: 0.8rem 2rem;"}
        margin: 0rem;
    }
`
export const NavElement = styled.li`
    list-style: none;
    display: inline-block;
    height: 4.5rem;
    @media screen and (max-width:680px) {
        height: 3rem;
        width: 100%;
    }
`

export const ElementLink = styled(Link)<ElementLinkProps>`
    text-decoration: none;
    display: inline-block;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0rem 1rem;
    border-bottom: solid 4px transparent;
    color: rgb(127, 141, 170);
    transition: all 120ms ease;
    font-weight: bold;
    &:hover{
        border-bottom: solid 4px ${props => props.color};
        background: linear-gradient(rgba(5, 7, 12, 0.1),rgba(38, 40, 46, 0.1));
        color: ${props => props.color};
    }
    @media screen and (max-width:680px) {
        justify-content: center;
        border-radius: 1rem;
        height: 3rem;
        &:hover{
            height: 3rem;
            color: white;
            background-color: ${props => props.color};
            -webkit-box-shadow: 0px 0px 12px 1px ${props => props.color} ;
            -moz-box-shadow: 0px 0px 12px 1px ${props => props.color} ;
            box-shadow: 0px 0px 12px 1px ${props => props.color} ;
        }
    }
`

export const MenuBtn = styled.div<MenuProps>`
    cursor: pointer;
    width: 20px;
    height: 3px;
    background-color: ${props => props.toggle ? "transparent;" : "rgb(127, 141, 170)"};
    &::before, &::after {
        content: '';
        position: absolute;
        width: 20px;
        height: 3px;
        background-color: rgb(127, 141, 170);
        transition: all 200ms ease-in-out;
    }
    &::before {
        transform: ${props => props.toggle ? "rotate(45deg) translate(3px ,-3px)" : "translateY(-8px)"};
    }
    &::after {
        transform: ${props => props.toggle ? "rotate(-45deg) translate(3px ,3px)" : "translateY(8px)"}
    }
`


export const Bar = styled.div`
    z-index: 25;
    background-color: white;
    padding: 0rem 1rem;
    @media screen and (max-width:680px){
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`

export const BtnNavBar = styled.div`
    cursor: pointer;
    padding: 0.5rem;
    @media screen and (min-width:680px){
        display: none;
    }
`