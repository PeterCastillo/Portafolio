import { useState, useEffect } from "react";
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

const nombre = "<PcDev/>";
const NavBar = () => {
  const [setting, setSetting] = useState([
    {
      name: "Contacto",
      color: "rgb(25, 85, 188);",
      to: "contact",
      onshow: false,
    },
    {
      name: "Experiencia",
      color: "#A1CF6B",
      to: "experiencia",
      onshow: false,
    },
    {
      name: "Estudios",
      color: "#FFA987",
      to: "estudios",
      onshow: false,
    },
    {
      name: "Habilidades",
      color: "#FADF7F",
      to: "habilidades",
      onshow: false,
    },
    {
      name: "Proyectos",
      color: "#f33a2d",
      to: "proyectos",
      onshow: false,
    },
  ]);
  const [toggle, setToggle] = useState(false);
  const [showNav, setShowNav] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    let prevScrollpos = window.pageYOffset;
    let timeoutId: any;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      if (prevScrollpos > currentScrollPos) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }

      timeoutId = setTimeout(() => {
        setShowNav(true);
      }, 200);

      prevScrollpos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <NavContainer show={showNav}>
      <Navbar toggle={toggle}>
        <Bar>
          <Nombre>{nombre}</Nombre>
          <BtnNavBar onClick={handleToggle}>
            <MenuBtn toggle={toggle}></MenuBtn>
          </BtnNavBar>
        </Bar>
        <Nav toggle={toggle}>
          {setting.map((item) => (
            <NavElement
              key={item.color}
              onshow={item.onshow}
              onClick={() => {
                const element = document.getElementById(item.to);
                element?.scrollIntoView({ behavior: "smooth" });
                handleToggle;
              }}
            >
              <ElementLink color={item.color}>{item.name}</ElementLink>
            </NavElement>
          ))}
        </Nav>
      </Navbar>
    </NavContainer>
  );
};

export default NavBar;
