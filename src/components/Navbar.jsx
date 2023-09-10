import React, { useState } from "react";
import styled from "styled-components";
import ScrollIntoView from "react-scroll-into-view";
import { Link } from "react-router-dom";
import HeaderLogo from '../images/atwa-logo.jpeg'
const Nav = styled.nav`
  padding: 0 50px;
  min-height: 8vh;
  background: black;
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
  text-decoration: none;
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

const Linkk = styled.a`
  color: white;
  text-decoration: none;
  z-index: 100;
  cursor: pointer;
  transition: 0.3s ease-in-out all;
  :hover {
    text-decoration: underline;
  }
  font-size: 20px;
`;

const NavIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;
  z-index: 110;
  padding-top: 10px;
  margin-top: 20px;
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
  z-index: 0;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);

  li {
    z-index: 0;
    opacity: ${(props) => (props.open ? 1 : 0)};
    font-size: 25px;
    margin: 50px 0px;
    transition: opacity 0.4s ease-in-out;
  }

  li:nth-child(2) {
    z-index: 0;
    margin: 50px 0px;
  }
`;

const Navbar = () => {
  const [toggle, toggleNav] = useState(false);
  return (
    <>
      <Nav id="heroContainer">
        <Logo>
          <a
            href="/"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            <img src={HeaderLogo} alt="Atwa" 
            style={{
              width: window.innerWidth > 768 ? "60px" : "50px",
              // height: "50px",
              // borderRadius: "50%",
              marginRight: "10px",
              marginTop:window.innerWidth > 768 ? "0px" : "20px"
              // marginBottom: "10px"
            }}
            />
          </a>
        </Logo>
        <Menu>
          {/* <Item>
           
            <ScrollIntoView selector="#heroContainer">
              <Link>About Me</Link>
            </ScrollIntoView>
          </Item> */}
          <Item>
            <Linkk href="/">Home</Linkk>
          </Item>
          <Item>
            <ScrollIntoView selector="#packages">
              <Linkk>packages</Linkk>
            </ScrollIntoView>
          </Item>
          <Item>
            <Linkk href="/about">get to know me</Linkk>
          </Item>
          <Item>
            <Linkk href="contact">Contact Us</Linkk>
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
            <Linkk href="/">Home</Linkk>
          </Item>
          {/* <Item>
            <Link target="#" href="https://www.facebook.com/mazen.fayezmano">
              what will you get
            </Link>
          </Item> */}
          <Item>
            <ScrollIntoView selector="#packages">
              <Linkk>packages</Linkk>
            </ScrollIntoView>
          </Item>
          {/* <Item>
            <Link target="#" href="https://www.facebook.com/mazen.fayezmano">
              About Me
            </Link>
          </Item> */}
          <Item>
            <Item>
              <Linkk href="/about">get to know me</Linkk>
            </Item>
          </Item>
          <Item>
            <Item>
              <Linkk href="contact">Contact Us</Linkk>
            </Item>
          </Item>
        </OverlayMenu>
      </Overlay>
    </>
  );
};

export default Navbar;
