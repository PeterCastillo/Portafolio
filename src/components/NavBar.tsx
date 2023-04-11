import { useState } from "react";
import {
  Bar,
  BtnNavBar,
  ElementLink,
  MenuBtn,
  Nav,
  Navbar,
  NavContainer,
  NavElement,
  Nombre,
} from "../style/navbar";

const Navegation = [
  {
    name: "Home",
    color: "rgb(25, 85, 188);",
    to: "/",
  },
  {
    name: "Educacion",
    color: "#A1CF6B",
    to: "/Educacion",
  },
  {
    name: "Proyectos",
    color: "#FFA987",
    to: "/Proyectos",
  },
  {
    name: "Contacto",
    color: "#FADF7F",
    to: "/Contacto",
  },
];
const nombre = "<PcDev/>";
const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <NavContainer>
      <Navbar toggle={toggle}>
        <Bar>
          <Nombre>{nombre}</Nombre>
          <BtnNavBar onClick={handleToggle}>
            <MenuBtn toggle={toggle}></MenuBtn>
          </BtnNavBar>
        </Bar>
        <Nav toggle={toggle}>
          {Navegation.map((item) => (
            <NavElement key={item.color} onClick={handleToggle}>
              <ElementLink color={item.color} to={item.to}>
                {item.name}
              </ElementLink>
            </NavElement>
          ))}
        </Nav>
      </Navbar>
    </NavContainer>
  );
};

export default NavBar;
