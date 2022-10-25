import { useState } from "react"
import { Bar, ElementLink, Img, Logo, MenuBtn, Nav, Navbar, NavContainer, NavElement, Nombre } from "../style/navbar"

const Navegation = [
    {
        name: "Home",
        color: "rgb(25, 85, 188);"
    },
    {
        name: "About Me",
        color: "#A1CF6B"
    },
    {
        name: "Skills",
        color: "#FFA987"
    },
    {
        name: "Proyects",
        color: "#FADF7F"
    },
]
const nombre = "<PcDev/>"
const NavBar = () => {

    const [ toggle , setToggle ] = useState(false) 

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <NavContainer>
            <Navbar toggle={toggle}>
                <Bar>
                    <Nombre>{nombre}</Nombre>
                    <MenuBtn  onClick={handleToggle} toggle={toggle}></MenuBtn>
                </Bar>
                <Nav toggle={toggle}>
                    {Navegation.map(item =>(
                        <NavElement><ElementLink color={item.color} href="">{item.name}</ElementLink></NavElement>
                    ))}
                </Nav>
            </Navbar>
        </NavContainer>
    )
}

export default NavBar