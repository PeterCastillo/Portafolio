import styled from "styled-components";
import { ElementLinkProps, MenuProps } from "../types/propsStyle";

export const NavContainer = styled.div<{show: boolean}>`
  border-bottom: solid 2px rgb(127, 141, 170);
  background-color: white;
  z-index: 5;
  font-family: "Inter", sans-serif;
  animation: fateNav 1.5s ease;
  position: fixed;
  width: 100vw;
  transition: top 150ms ease-in-out;
  top: ${(props) => props.show ? "0" : "-100%"}
  /* https://libardo.vercel.app/ */
`;
export const Navbar = styled.nav<MenuProps>`
  max-width: 1000px;
  padding: 0rem 1rem;
  display: flex;
  justify-content: space-between;
  max-height: 4rem;
  margin: auto;
  transition: all 250ms ease-in-out;
  @media screen and (max-width: 775px) {
    ${(props) => props.toggle && "max-height: 50rem;"}
    flex-direction: column;
  }
`;

export const Nombre = styled.span`
  display: inline-block;
  font-size: 1.2rem;
  height: 4rem;
  display: flex;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: rgb(25, 85, 188);
  color: white;
  cursor: pointer;
  text-shadow: 0 0 10px rgb(25, 85, 188), 0 0 10px rgb(25, 85, 188),
    0 0 10px red, 0 0 10px rgb(25, 85, 188);
`;
export const Logo = styled.div`
  width: 4rem;
  height: 4rem;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  max-height: 20rem;
  object-fit: cover;
`;

export const Nav = styled.ul<MenuProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  font-size: 1rem;
  @media screen and (max-width: 775px) {
    /* ${(props) => !props.toggle && "transform: translateY(-100%)"}; */
    /* ${(props) => props.toggle && "transition: all 200ms ease-out;"}; */
    max-height: 0rem;
    overflow: hidden;
    transition: all 150ms ease-in-out;
    ${(props) => props.toggle && "max-height: 50rem;"}
    flex-direction: column;
    gap: 1rem;
    padding: 0rem 2rem;
    ${(props) => props.toggle && "padding: 0.8rem 2rem;"}
    margin: 0rem;
  }
`;
export const NavElement = styled.li<{onshow: boolean}>`
  list-style: none;
  display: inline-block;
  height: 4rem;
  transition: all 1s ease-in-out;
  ${(props) => props.onshow && "background-color: red;"}
  @media screen and (max-width: 775px) {
    height: 3rem;
    width: 100%;
  }
`;

export const ElementLink = styled.div<ElementLinkProps>`
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
  cursor: pointer;
  user-select: none;
  &:hover {
    border-bottom: solid 2px ${(props) => props.color};
    background: linear-gradient(rgba(5, 7, 12, 0.1), rgba(38, 40, 46, 0.1));
    color: ${(props) => props.color};
  }
  @media screen and (max-width: 775px) {
    justify-content: center;
    border-radius: 1rem;
    height: 3rem;
    &:hover {
      height: 3rem;
      color: white;
      background-color: ${(props) => props.color};
      -webkit-box-shadow: 0px 0px 12px 1px ${(props) => props.color};
      -moz-box-shadow: 0px 0px 12px 1px ${(props) => props.color};
      box-shadow: 0px 0px 12px 1px ${(props) => props.color};
    }
  }
`;

export const MenuBtn = styled.div<MenuProps>`
  cursor: pointer;
  width: 20px;
  height: 3px;
  background-color: ${(props) =>
    props.toggle ? "transparent;" : "rgb(127, 141, 170)"};
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 20px;
    height: 3px;
    background-color: rgb(127, 141, 170);
    transition: all 200ms ease-in-out;
  }
  &::before {
    transform: ${(props) =>
      props.toggle ? "rotate(45deg) translate(3px ,-3px)" : "translateY(-8px)"};
  }
  &::after {
    transform: ${(props) =>
      props.toggle ? "rotate(-45deg) translate(3px ,3px)" : "translateY(8px)"};
  }
`;

export const Bar = styled.div`
  z-index: 25;
  background-color: rgb(255, 255, 255);
  padding: 0rem 1rem;
  padding-left: 0rem;
  @media screen and (max-width: 775px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const BtnNavBar = styled.div`
  cursor: pointer;
  padding: 0.5rem;
  @media screen and (min-width: 775px) {
    display: none;
  }
`;
