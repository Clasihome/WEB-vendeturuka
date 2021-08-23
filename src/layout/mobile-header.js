import React, { useContext, useState, Fragment } from "react";
import context from "../context";
import styled from "styled-components";
import HamburgerMenu from "react-hamburger-menu";
import { Container } from "react-bootstrap";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

import Logo from "./logo";
import RateBar from "./ratebar";
import { NavLink } from "../styled-components";
import Link from "../components/link";

const Header = styled.header`
  //overflow: hidden;
  background-color: #000;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  padding: 0.5rem 0;
  z-index: 1000;
`;
const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const NavPanel = styled.div`
  background-color: #000;
  height: calc(100vh - 81.38px);
  width: 100vw;
  transition: 500ms ease;
  position: fixed;
  left: ${(props) => (props.visible ? "0" : "100vw")};
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
const NavList = styled.ul`
  list-style: none;
  padding: 0mm;
  margin: 0;
  display: ${(props) => (props.horizontal ? "flex" : "block")};
  text-align: center;
`;
const NavItem = styled.li`
  font-size: 2rem;
`;

export default () => {
  const [open, setOpen] = useState(false);
  const state = useContext(context);
  return (
    <Fragment>
      <Header className='d-lg-none'>
        <Container>
          <Navigation>
            <Link paintDrip hex={state.primaryColor} to='/' duration={0.5}>
              <Logo />
            </Link>
            <HamburgerMenu
              isOpen={open}
              menuClicked={() => setOpen(!open)}
              width={24}
              height={15}
              strokeWidth={2}
              rotate={0}
              color='#ffffff'
              borderRadius={0}
              animationDuration={0.5}
            />
          </Navigation>
        </Container>
      </Header>
      <NavPanel visible={open}>
        <RateBar />
        <NavList>
          <NavItem>
            <Link
              paintDrip
              hex={state.primaryColor}
              to='/properties'
              onClick={() => setOpen(false)}
              duration={0.5}
            >
              <NavLink light>Propiedades</NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link
              paintDrip
              hex={state.primaryColor}
              to='/about'
              onClick={() => setOpen(false)}
              duration={0.5}
            >
              <NavLink light>Nosotros</NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link
              paintDrip
              hex={state.primaryColor}
              to='/contact'
              onClick={() => setOpen(false)}
              duration={0.5}
            >
              <NavLink light>Contacto</NavLink>
            </Link>
          </NavItem>
        </NavList>
        <NavList horizontal>
          <NavItem>
            <Link href={state.facebook} target='_blank' rel='noopener'>
              <NavLink light>
                <FacebookOutlined />
              </NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href={state.instagram} target='_blank' rel='noopener'>
              <NavLink light>
                <InstagramOutlined style={{ margin: "0 1rem" }} />
              </NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href={state.twitter} target='_blank' rel='noopener'>
              <NavLink light>
                <TwitterOutlined />
              </NavLink>
            </Link>
          </NavItem>
        </NavList>
      </NavPanel>
    </Fragment>
  );
};
