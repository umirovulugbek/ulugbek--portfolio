import  { useEffect } from "react";
import { Container } from "../styleComponents.jsx/loyout/HeaderStyle";
import { Link, NavLink } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { useState } from "react";
import Toggle from "./Toogle";
import { useDarkMode } from "./useDarkMode";
import { lightTheme, darkTheme } from "./theme";
import { useDispatch } from "react-redux";
const StyLeDark = styled.div``;

const OverlayMenu = styled.ul`
  z-index: 1111;
  list-style: none;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  li {
    opacity: ${(props) => (props.open ? 1 : 0)};
    display: ${(props) => (props.open ? "block" : "none")};
    font-size: 25px;
    margin: 50px 0px;
    // transition: opacity 0.8s ease-in-out;
    transition: opacity 0.4s ease-in-out;
  }

  li:nth-child(2) {
    margin: 50px 0px;
  }
`;
const Overlay = styled.div`
  z-index: 111;
  position: absolute;

  height: ${(props) => (props.open ? "91vh" : 0)};
  width: 100%;
  background: ${({ theme }) => theme.body};
  // transition:  0.6s ease-in-out;
  transition: height 0.4s ease-in-out;

  @media (min-width: 1090px) {
    display: none;
  }
`;
const Line = styled.span`
  display: block;
  border-radius: 50px;
  width: 25px;
  height: 3px;
  margin: 5px;
  background-color: ${({ theme }) => theme.text};
  transition: width 0.8s ease-in-out;

  :nth-child(2) {
    width: ${(props) => (props.open ? "40%" : "70%")};
  }
  @media (max-width: 600px) {
    width: 22px;
  }
`;
const NavIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;

  @media (min-width: 900px) {
    display: none;
  }
`;
const Item = styled.li`
  & a {
    text-decoration: none;
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }
`;
const StyleComponent = styled.div`
  background: ${({ theme }) => theme.body};
  transition: all 0.25s linear;
`;
const Header = () => {
  const [toggle, toggleNav] = useState(false);
  const [theme, toggleTheme] = useDarkMode("light");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "THEME",
      payload: localStorage.getItem("theme"),
    });
    ///////
  }, [theme]);

  return (
    <div>
      <ThemeProvider
        theme={
          localStorage.getItem("theme") === "light" ? lightTheme : darkTheme
        }
      >
        <StyleComponent>
          <Container>
            <div className="navbar-right">
              <Link to={"/"}>
                <div className="logo">
                  {localStorage.getItem("theme") === "light" ? (
                    <img src="/img/Logo 1.png" alt="" />
                  ) : (
                    <img src="/img/Logo 1 (2).png" alt="" />
                  )}
                </div>
              </Link>
              <ul>
                <li>
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}>About</NavLink>
                </li>
                <li>
                  <NavLink to={"/stack"}>Tech Stack</NavLink>
                </li>
                <li>
                  <NavLink to={"/projects"}>Projects</NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}>Contact</NavLink>
                </li>
              </ul>
            </div>

            <div className="navbar-left">
              <StyLeDark>
                <Toggle onToggle={toggleTheme}>Toggle theme</Toggle>
              </StyLeDark>
              <NavIcon onClick={() => toggleNav(!toggle)}>
                <Line open={toggle} />
                <Line open={toggle} />
                <Line open={toggle} />
              </NavIcon>
            </div>
          </Container>
          <Overlay open={toggle}>
            <OverlayMenu open={toggle}>
              <Item>
                <NavLink activeclassname={"active"} to="/">
                  Home
                </NavLink>
              </Item>

              <Item>
                <NavLink activeclassname={"active"} to="/about">
                  About
                </NavLink>
              </Item>
              <Item>
                <NavLink activeclassname={"active"} to="/stack">
                  Teach Stack
                </NavLink>
              </Item>
              <Item>
                <NavLink activeclassname={"active"} to="/projects">
                  Project
                </NavLink>
              </Item>
              <Item>
                <NavLink activeclassname={"active"} to="/contact">
                  Contact
                </NavLink>
              </Item>
            </OverlayMenu>
          </Overlay>
        </StyleComponent>
      </ThemeProvider>
    </div>
  );
};

export default Header;
