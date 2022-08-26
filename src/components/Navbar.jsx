import React, { useState } from "react";
import styled from "styled-components";

const Nav = styled.nav`
  padding: 0 50px;
  min-height: 8vh;
  background: #1c2022;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;

  min-width: 93.4%;
  @media (max-width: 768px) {
    padding: 0 25px;
    min-height: 7vh;
    z-index: 100;
    min-width: 85%;
  }
  @media (min-width: 500px) {
    padding: 0 25px;
    min-height: 8vh;
    z-index: 100;
    min-width: 80%;
  }
`;

const Logo = styled.h1`
  font-size: 25px;
  color: white;
  z-index: 100;
  padding-left: 50px;
  @media (max-width: 769px) {
    padding-left: 10px;
    margin-top: -20px;
  }
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  padding-right: 30px;
  z-index: 100;
  li:nth-child(2) {
    margin-left: 40px;
  }
  li:nth-child(3) {
    margin: 0px 40px;
  }
  li:nth-child(4) {
    margin: 0px 35px;
    margin-left: -5px;
  }
  li:nth-child(5) {
    margin: 0px 15px;
    margin-left: -5px;
    padding-right: 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Item = styled.li``;

const Link = styled.a`
  color: white;
  text-decoration: none;
  z-index: 100;

  transition: 0.3s ease-in-out all;
  :hover {
    text-decoration: underline;
  }
`;

const NavIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;
  z-index: 110;
  padding-top: 10px;
  @media (min-width: 769px) {
    display: none;
  }
`;

const Line = styled.span`
  display: block;
  border-radius: 50px;
  width: 25px;
  height: 3px;
  margin: 5px;
  background-color: #fff;
  transition: width 0.4s ease-in-out;
  z-index: 100;

  :nth-child(2) {
    width: ${(props) => (props.open ? "40%" : "70%")};
  }
`;

const Overlay = styled.div`
  position: absolute;
  height: ${(props) => (props.open ? "91vh" : 0)};
  width: 100vw;
  z-index: 100;
  background: #1c2022;
  transition: height 0.4s ease-in-out;

  @media (min-width: 769px) {
    display: none;
  }
`;

const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  z-index: 100;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);

  li {
    z-index: 100;
    opacity: ${(props) => (props.open ? 1 : 0)};
    font-size: 25px;
    margin: 50px 0px;
    transition: opacity 0.4s ease-in-out;
  }

  li:nth-child(2) {
    z-index: 100;
    margin: 50px 0px;
  }
`;

const Navbar = () => {
  const [toggle, toggleNav] = useState(false);
  return (
    <>
      <Nav>
        <Logo>ATWA</Logo>
        <Menu>
          <Item>
            <Link target="#" href="https://www.instagram.com/igor_dumencic/">
              About Me
            </Link>
          </Item>
          <Item>
            <Link target="#" href="https://www.behance.net/igordumencic">
              what i offer
            </Link>
          </Item>
          <Item>
            <Link target="#" href="https://github.com/Igor178">
              packages
            </Link>
          </Item>
          <Item>
            <Link target="#" href="https://github.com/Igor178">
              get to know me
            </Link>
          </Item>
          <Item>
            <Link target="#" href="https://github.com/Igor178">
              Contact Us
            </Link>
          </Item>
        </Menu>
        <NavIcon onClick={() => toggleNav(!toggle)}>
          <Line open={toggle} />
          <Line open={toggle} />
          <Line open={toggle} />
        </NavIcon>
      </Nav>
      <Overlay open={toggle}>
        <OverlayMenu open={toggle}>
          <Item>
            <Link target="#" href="https://www.instagram.com/igor_dumencic/">
              who am i
            </Link>
          </Item>
          <Item>
            <Link target="#" href="https://www.behance.net/igordumencic">
              what will you get
            </Link>
          </Item>
          <Item>
            <Link target="#" href="https://github.com/Igor178">
              packages
            </Link>
          </Item>
          <Item>
            <Link target="#" href="https://github.com/Igor178">
              About Me
            </Link>
          </Item>
          <Item>
            <Link target="#" href="https://github.com/Igor178">
              get to know me
            </Link>
          </Item>
          <Item>
            <Link target="#" href="https://github.com/Igor178">
              Contact Us
            </Link>
          </Item>
        </OverlayMenu>
      </Overlay>
    </>
  );
};

export default Navbar;
