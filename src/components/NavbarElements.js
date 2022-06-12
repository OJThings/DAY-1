import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  background: transparent;
`;

export const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: black;
    border-radius: 5px;
    transition: all 0.2s ease-out;
  }
`;

export const Logo = styled(Link)`
  ${NavLink}
  font-style: italic;
`;

export const MenuBars = styled(FaBars)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    background-size: contain;
    height: 30px;
    width: 30px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 50%);
  }
`;
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  &:active {
    background: black;
    opacity: 1;
    transition: all 0.5s ease;
    z-index: 1;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavMenuLinks = styled(Link)`
  ${NavLink}
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  &:active {
    background: black;
    opacity: 1;
    transition: all 0.5s ease;
    z-index: 1;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
